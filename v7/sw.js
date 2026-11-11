const CACHE_NAME = 'risp-it-asset-v7-6-23-safe-area-header';
const CORE = ['./','./index.html','./asset/index.html','./styles.css?v=7631','./app.js?v=7631','./photo-tools.js?v=7631','./manifest.webmanifest?v=772','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>Promise.allSettled(CORE.map(url=>cache.add(url)))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('risp-it-asset-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'||/\.(?:js|html|css)$/.test(url.pathname)){
    event.respondWith(fetch(req).then(res=>{if(res&&res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)));}return res;}).catch(async()=> (await caches.match(req))||(await caches.match('./index.html'))));return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res&&res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)));}return res;})));
});
