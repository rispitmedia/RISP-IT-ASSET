/* RISP IT ASSET V7.6.20 — AI cutout with real transparent PNG output. */
(function (root) {
  'use strict';
  var aiModulePromise = null;
  var normalCache = new WeakMap(), aiCache = new WeakMap();
  function validate(file) {
    if (!file || !/^image\//.test(file.type)) throw new Error('Select an image file.');
    if (file.size > 30 * 1024 * 1024) throw new Error('Choose a photo smaller than 30 MB.');
  }
  function read(blob) {
    return new Promise(function(resolve,reject){var r=new FileReader();r.onload=function(){resolve(r.result);};r.onerror=function(){reject(new Error('Cannot read this image.'));};r.readAsDataURL(blob);});
  }
  function loadCanvas(blob,maxSize) {
    return new Promise(function(resolve,reject){
      var url=URL.createObjectURL(blob),img=new Image();
      img.onload=function(){URL.revokeObjectURL(url);var scale=Math.min(1,maxSize/Math.max(img.naturalWidth,img.naturalHeight));var c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.naturalWidth*scale));c.height=Math.max(1,Math.round(img.naturalHeight*scale));c.getContext('2d',{willReadFrequently:true}).drawImage(img,0,0,c.width,c.height);resolve(c);};
      img.onerror=function(){URL.revokeObjectURL(url);reject(new Error('Cannot open this image. Use JPG or PNG.'));};img.src=url;
    });
  }
  function canvasBlob(canvas,type,quality){return new Promise(function(resolve,reject){canvas.toBlob(function(b){b?resolve(b):reject(new Error('Could not encode transparent PNG.'));},type,quality);});}
  function deadline(promise,ms,label){var timer;return Promise.race([promise,new Promise(function(_,reject){timer=setTimeout(function(){reject(new Error(label||'Background removal timed out.'));},ms);})]).then(function(v){clearTimeout(timer);return v;},function(e){clearTimeout(timer);throw e;});}
  function progressPanel(){
    var el=document.createElement('div');el.setAttribute('role','status');el.setAttribute('aria-live','polite');
    el.style.cssText='position:fixed;inset:0;z-index:999999;display:grid;place-items:center;padding:20px;background:rgba(2,9,17,.76);backdrop-filter:blur(8px);font:14px/1.5 system-ui;color:#eff7ff';
    el.innerHTML='<div style="width:min(390px,100%);padding:24px;border-radius:20px;background:#0c1a2a;border:1px solid #34516f;box-shadow:0 24px 80px #0008"><b style="font-size:18px">Removing background with AI</b><p style="margin:10px 0 0;color:#9bb3c9">Loading AI model…</p><small style="color:#718ba4">Keep this page open. The first run may take a while.</small></div>';
    document.body.appendChild(el);return {el,status:el.querySelector('p')};
  }
  async function removeBackgroundAI(file){
    validate(file);var ui=progressPanel();
    try{
      var input=await loadCanvas(file,1800);var inputBlob=await canvasBlob(input,'image/png');
      if(!aiModulePromise){
        aiModulePromise=import('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/+esm').catch(function(first){
          return import('https://esm.sh/@imgly/background-removal@1.7.0?bundle').catch(function(second){aiModulePromise=null;throw new Error('โหลด AI ไม่สำเร็จ ตรวจสอบอินเทอร์เน็ตแล้วลองใหม่ ('+((second&&second.message)||(first&&first.message)||'CDN unavailable')+')');});
        });
      }
      ui.status.textContent='Loading AI model…';
      var mod=await deadline(aiModulePromise,90000,'โหลด AI เกินเวลา กรุณาลองใหม่');
      var remove=mod.removeBackground||mod.default;
      if(typeof remove!=='function')throw new Error('AI background-removal module is unavailable.');
      ui.status.textContent='AI is separating the device from its background…';
      var cut=await deadline(remove(inputBlob,{
        publicPath:'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
        model:'isnet_quint8',device:'cpu',output:{format:'image/png',quality:1,type:'foreground'},
        progress:function(key,current,total){if(!ui.el.isConnected)return;var pct=total?Math.round(current/total*100):0;ui.status.textContent=String(key||'').toLowerCase().indexOf('fetch')===0?'Downloading AI model… '+pct+'%':'Removing background… '+pct+'%';}
      }),240000,'AI ลบพื้นหลังเกินเวลา กรุณาลองรูปที่มีขนาดเล็กลง');
      if(!(cut instanceof Blob))throw new Error('AI did not return an image.');
      if(!/^image\/png$/i.test(cut.type||''))throw new Error('AI did not return a transparent PNG. Please try again.');
      var c=await loadCanvas(cut,1600),ctx=c.getContext('2d',{willReadFrequently:true}),im=ctx.getImageData(0,0,c.width,c.height),d=im.data;
      var transparentPixels=0,visiblePixels=0;
      for(var ai=3;ai<d.length;ai+=4){if(d[ai]<=8)transparentPixels++;if(d[ai]>12)visiblePixels++}
      if(!visiblePixels||transparentPixels<Math.max(20,Math.floor(d.length/4*.005)))throw new Error('AI returned an opaque image instead of a cut-out. Check model download / connection and try again.');
      var minX=c.width,minY=c.height,maxX=-1,maxY=-1;
      for(var y=0;y<c.height;y++)for(var x=0;x<c.width;x++){if(d[(y*c.width+x)*4+3]>12){if(x<minX)minX=x;if(x>maxX)maxX=x;if(y<minY)minY=y;if(y>maxY)maxY=y;}}
      if(maxX<minX||maxY<minY)throw new Error('AI could not detect the device. Try another photo.');
      var pad=Math.max(12,Math.round(Math.max(maxX-minX+1,maxY-minY+1)*.035));
      minX=Math.max(0,minX-pad);minY=Math.max(0,minY-pad);maxX=Math.min(c.width-1,maxX+pad);maxY=Math.min(c.height-1,maxY+pad);
      var crop=document.createElement('canvas');crop.width=maxX-minX+1;crop.height=maxY-minY+1;
      crop.getContext('2d').putImageData(ctx.getImageData(minX,minY,crop.width,crop.height),0,0);
      var out=document.createElement('canvas');out.width=1200;out.height=1200;var o=out.getContext('2d');o.clearRect(0,0,1200,1200);o.imageSmoothingEnabled=true;o.imageSmoothingQuality='high';
      var scale=Math.min(1080/crop.width,1080/crop.height),w=crop.width*scale,h=crop.height*scale;o.drawImage(crop,(1200-w)/2,(1200-h)/2,w,h);
      var png=await canvasBlob(out,'image/png');
      return {dataUrl:await read(png),fileName:String(file.name||'device').replace(/\.[^.]+$/,'')+'-no-bg.png',mimeType:'image/png',blob:png,backgroundRemoved:true,whiteBackground:false,alphaVerified:true};
    } finally {if(ui.el&&ui.el.remove)ui.el.remove();}
  }
  async function normalPhoto(file){validate(file);var src=await loadCanvas(file,1200),out=document.createElement('canvas');out.width=1200;out.height=1200;var c=out.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,1200,1200);var scale=Math.min(1080/src.width,1080/src.height),w=src.width*scale,h=src.height*scale;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(src,(1200-w)/2,(1200-h)/2,w,h);var jpg=await canvasBlob(out,'image/jpeg',.9);return {dataUrl:await read(jpg),fileName:String(file.name||'device').replace(/\.[^.]+$/,'')+'.jpg',mimeType:'image/jpeg',blob:jpg,backgroundRemoved:false,whiteBackground:true};}
  root.RISPPhoto={
    prepare:function(file){validate(file);if(normalCache.has(file))return normalCache.get(file);var p=normalPhoto(file);normalCache.set(file,p);p.catch(function(){normalCache.delete(file);});return p;},
    prepareAI:function(file){validate(file);if(aiCache.has(file))return aiCache.get(file);var p=removeBackgroundAI(file);aiCache.set(file,p);p.catch(function(){aiCache.delete(file);});return p;}
  };
})(window);
