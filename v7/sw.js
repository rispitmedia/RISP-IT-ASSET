
const CACHE_NAME='risp-it-asset-v7-step2-1-shell-1';
const CORE=[
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
  './icon-192.png','./icon-512.png','./apple-touch-icon.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  // Only cache our own GitHub PWA shell. Never cache the authenticated Apps Script bridge.
  if(url.origin!==self.location.origin) return;

  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req).then(res=>{
        const copy=res.clone();
        caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy));
        return res;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached=>{
      const net=fetch(req).then(res=>{
        if(res && res.ok){
          const copy=res.clone();
          caches.open(CACHE_NAME).then(c=>c.put(req,copy));
        }
        return res;
      }).catch(()=>cached);
      return cached || net;
    })
  );
});
