/* RISP IT ASSET V7.6.17 — local high-quality white-background cutout. */
(function (root) {
  'use strict';
  const normalCache = new WeakMap(), cutCache = new WeakMap();

  function read(blob) {
    return new Promise((resolve, reject) => {
      const r = new FileReader(); r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error('Cannot read this image.')); r.readAsDataURL(blob);
    });
  }
  function toBlob(canvas, mime, quality) {
    return new Promise((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error('Cannot prepare image.')), mime || 'image/png', quality == null ? 1 : quality));
  }
  async function imageCanvas(blob, maxSize) {
    const url = URL.createObjectURL(blob), img = new Image();
    try {
      await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('Cannot open this image. Use a JPG or PNG photo.'));img.src=url;});
      const scale=Math.min(1,maxSize/Math.max(img.naturalWidth,img.naturalHeight));
      const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.naturalWidth*scale));c.height=Math.max(1,Math.round(img.naturalHeight*scale));
      c.getContext('2d',{willReadFrequently:true}).drawImage(img,0,0,c.width,c.height);return c;
    } finally { URL.revokeObjectURL(url); }
  }
  function validate(file){if(!file||!/^image\//.test(file.type))throw new Error('Select an image file.');if(file.size>30*1024*1024)throw new Error('Choose a photo smaller than 30 MB.');}
  function median(values){values.sort((a,b)=>a-b);return values[Math.floor(values.length/2)]||0;}
  function getBorderColor(d,w,h){
    const rs=[],gs=[],bs=[],step=Math.max(1,Math.floor(Math.max(w,h)/300));
    for(let x=0;x<w;x+=step){let p=x*4;rs.push(d[p]);gs.push(d[p+1]);bs.push(d[p+2]);p=((h-1)*w+x)*4;rs.push(d[p]);gs.push(d[p+1]);bs.push(d[p+2]);}
    for(let y=0;y<h;y+=step){let p=y*w*4;rs.push(d[p]);gs.push(d[p+1]);bs.push(d[p+2]);p=(y*w+w-1)*4;rs.push(d[p]);gs.push(d[p+1]);bs.push(d[p+2]);}
    return [median(rs),median(gs),median(bs)];
  }
  function isBackground(r,g,b,bg){
    const max=Math.max(r,g,b),min=Math.min(r,g,b),avg=(r+g+b)/3;
    const chroma=max-min,dist=Math.sqrt((r-bg[0])**2+(g-bg[1])**2+(b-bg[2])**2);
    // Accept white, warm-white, and light-grey shadows connected to the image edge.
    return avg>184 && min>166 && chroma<78 && dist<112;
  }
  async function removeWhiteBackground(file){
    const src=await imageCanvas(file,1500),w=src.width,h=src.height,ctx=src.getContext('2d',{willReadFrequently:true});
    const image=ctx.getImageData(0,0,w,h),d=image.data,bg=getBorderColor(d,w,h);
    const count=w*h,seen=new Uint8Array(count),stack=new Int32Array(count);let head=0,tail=0,removed=0;
    function push(i){if(i<0||i>=count||seen[i])return;const p=i*4;if(!isBackground(d[p],d[p+1],d[p+2],bg))return;seen[i]=1;stack[tail++]=i;}
    for(let x=0;x<w;x++){push(x);push((h-1)*w+x);}
    for(let y=1;y<h-1;y++){push(y*w);push(y*w+w-1);}
    while(head<tail){
      const i=stack[head++],p=i*4;d[p+3]=0;removed++;
      const x=i%w;if(x>0)push(i-1);if(x<w-1)push(i+1);if(i>=w)push(i-w);if(i<count-w)push(i+w);
    }
    if(removed<count*.003)throw new Error('Could not find a plain light background touching the photo edges. Try a photo with more white space around the device.');
    // Smooth the cut edge: remove a thin connected halo and reduce semi-transparent fringe.
    const fringe=new Uint8Array(count);
    for(let i=0;i<count;i++)if(seen[i]){
      const x=i%w;if(x>0)fringe[i-1]=1;if(x<w-1)fringe[i+1]=1;if(i>=w)fringe[i-w]=1;if(i<count-w)fringe[i+w]=1;
    }
    for(let i=0;i<count;i++)if(fringe[i]&&!seen[i]){
      const p=i*4,avg=(d[p]+d[p+1]+d[p+2])/3;
      if(avg>172){const alpha=Math.max(0,Math.min(255,Math.round((220-avg)*5.2)));d[p+3]=Math.min(d[p+3],alpha);}
    }
    // Find subject bounds after transparency; crop away transparent margins.
    let minX=w,minY=h,maxX=-1,maxY=-1;
    for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(d[(y*w+x)*4+3]>18){if(x<minX)minX=x;if(x>maxX)maxX=x;if(y<minY)minY=y;if(y>maxY)maxY=y;}
    if(maxX<minX||maxY<minY)throw new Error('The subject could not be isolated. Try another photo.');
    const cw=maxX-minX+1,ch=maxY-minY+1,crop=document.createElement('canvas');crop.width=cw;crop.height=ch;
    const cropData=ctx.createImageData(cw,ch);
    for(let y=0;y<ch;y++){const from=((minY+y)*w+minX)*4;cropData.data.set(d.subarray(from,from+cw*4),y*cw*4);}
    crop.getContext('2d').putImageData(cropData,0,0);
    // High-resolution transparent output with modest clear margin, keeping original proportions.
    const out=document.createElement('canvas'),size=1200;out.width=size;out.height=size;
    const o=out.getContext('2d');o.clearRect(0,0,size,size);o.imageSmoothingEnabled=true;o.imageSmoothingQuality='high';
    const scale=Math.min(1080/cw,1080/ch),dw=cw*scale,dh=ch*scale;o.drawImage(crop,(size-dw)/2,(size-dh)/2,dw,dh);
    const blob=await toBlob(out,'image/png',1);
    return {dataUrl:await read(blob),fileName:String(file.name||'device').replace(/\.[^.]+$/,'')+'-transparent.png',mimeType:'image/png',blob,backgroundRemoved:true,whiteBackground:false};
  }
  async function whiteBackground(file){
    const source=await imageCanvas(file,1200),out=document.createElement('canvas');out.width=1200;out.height=1200;
    const c=out.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,1200,1200);
    const scale=Math.min(1080/source.width,1080/source.height),w=source.width*scale,h=source.height*scale;
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(source,(1200-w)/2,(1200-h)/2,w,h);
    const blob=await toBlob(out,'image/jpeg',.9);
    return {dataUrl:await read(blob),fileName:String(file.name||'device').replace(/\.[^.]+$/,'')+'.jpg',mimeType:'image/jpeg',blob,backgroundRemoved:false,whiteBackground:true};
  }
  root.RISPPhoto={
    prepare(file){validate(file);if(normalCache.has(file))return normalCache.get(file);const p=whiteBackground(file);normalCache.set(file,p);p.catch(()=>normalCache.delete(file));return p;},
    prepareAI(file){validate(file);if(cutCache.has(file))return cutCache.get(file);const p=removeWhiteBackground(file);cutCache.set(file,p);p.catch(()=>cutCache.delete(file));return p;}
  };
})(window);
