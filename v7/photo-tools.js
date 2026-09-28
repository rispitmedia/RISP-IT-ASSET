/* RISP photo pipeline — pinned IMG.LY 1.7.0, runs in the browser. */
(function (root) {
  'use strict';
  let modulePromise, queue = Promise.resolve();
  const prepared = new WeakMap();
  function deadline(p, ms) {
    let timer;
    return Promise.race([p, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Photo processing took too long.')), ms); })]).finally(() => clearTimeout(timer));
  }
  function read(blob) { return new Promise((resolve,reject) => { const r=new FileReader(); r.onload=()=>resolve(r.result); r.onerror=()=>reject(new Error('Cannot read this image.')); r.readAsDataURL(blob); }); }
  async function canvasFor(blob, max) {
    const url=URL.createObjectURL(blob), img=new Image();
    try {
      await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('Cannot open this image. Try a JPG or PNG.'));img.src=url;});
      const scale=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));
      const c=document.createElement('canvas'); c.width=Math.max(1,Math.round(img.naturalWidth*scale)); c.height=Math.max(1,Math.round(img.naturalHeight*scale));
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c;
    } finally { URL.revokeObjectURL(url); }
  }
  function blobOf(canvas){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Cannot prepare image.')),'image/png'));}
  async function frame(blob, cutout){
    const c=await canvasFor(blob,1400), ctx=c.getContext('2d');
    let x0=0,y0=0,x1=c.width-1,y1=c.height-1;
    if(cutout){
      const d=ctx.getImageData(0,0,c.width,c.height).data; x0=c.width;y0=c.height;x1=-1;y1=-1;
      for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++)if(d[(y*c.width+x)*4+3]>30){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
      if(x1<x0||y1<y0)throw new Error('No device was detected. Try another photo.');
    }
    const out=document.createElement('canvas');out.width=1200;out.height=1200;
    const w=x1-x0+1,h=y1-y0+1,s=Math.min(1040/w,1040/h),draw=out.getContext('2d');
    draw.imageSmoothingEnabled=true;draw.imageSmoothingQuality='high';
    draw.drawImage(c,x0,y0,w,h,(1200-w*s)/2,(1200-h*s)/2,w*s,h*s);
    return blobOf(out);
  }
  function panel(){
    const box=document.createElement('div');box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Prepare device photo');
    box.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:rgba(2,9,17,.7);backdrop-filter:blur(10px);font:15px/1.5 system-ui;color:#eff7ff';
    box.innerHTML='<div style="width:min(440px,100%);padding:26px;border-radius:22px;background:#0c1a2a;border:1px solid #34516f;box-shadow:0 24px 80px #0008"><b style="font-size:20px">Preparing device photo</b><p aria-live="polite">Loading background remover… First use can take longer.</p><div style="display:flex;gap:8px;flex-wrap:wrap"></div></div>';
    document.body.appendChild(box);const status=box.querySelector('p'),actions=box.querySelector('div div');
    return {box,status,actions,choice(message){status.textContent=message;actions.replaceChildren();return new Promise(resolve=>{for(const [label,val]of [['Try again','retry'],['Use original','original'],['Cancel','cancel']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.style.cssText='padding:12px 15px;border:1px solid #54718f;border-radius:10px;background:#173451;color:white;cursor:pointer';b.onclick=()=>{actions.replaceChildren();resolve(val)};actions.appendChild(b);}actions.firstChild.focus();});}};
  }
  async function process(file){
    if(!file||!/^image\//.test(file.type))throw new Error('Select an image file.');
    if(file.size>30*1024*1024)throw new Error('Please choose a photo below 30 MB.');
    const ui=panel();let result,removed=false;
    try{
      const resized=await blobOf(await canvasFor(file,1400));
      for(;;){
        try{
          ui.status.textContent='Removing background… First use downloads the image model.';
          if(!modulePromise)modulePromise=import('https://esm.sh/@imgly/background-removal@1.7.0?deps=onnxruntime-web@1.21.0-dev.20250206-d981b153d3').catch(e=>{modulePromise=null;throw e});
          const mod=await deadline(modulePromise,30000);
          const remove=mod.removeBackground||mod.default;
          const cut=await deadline(remove(resized,{model:'isnet_quint8',device:'cpu',output:{format:'image/png',quality:1},progress:(key,current,total)=>{if(ui.box.isConnected)ui.status.textContent=key.indexOf('fetch')===0?'Loading image model… '+Math.round(total?current/total*100:0)+'%':'Removing background…';}}),120000);
          result=await frame(cut,true);removed=true;break;
        }catch(e){
          const choice=await ui.choice('Background removal could not finish. '+(e.message||'Please try again.')+' You can keep the original image.');
          if(choice==='cancel')throw new Error('Photo change cancelled.');
          if(choice==='original'){result=await frame(resized,false);break;}
        }
      }
      const name=String(file.name||'device').replace(/\.[^.]+$/,'')+'.png';
      return {dataUrl:await read(result),fileName:name,mimeType:'image/png',blob:result,backgroundRemoved:removed};
    }finally{ui.box.remove();}
  }
  root.RISPPhoto={prepare(file){if(prepared.has(file))return prepared.get(file);const p=queue.catch(()=>{}).then(()=>process(file));queue=p;prepared.set(file,p);p.catch(()=>prepared.delete(file));return p;}};
})(window);
