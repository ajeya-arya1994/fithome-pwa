/* Offline shell and all self-hosted H.264 instructional clips. */
const VERSION = 'fithome-shell-v2.0.0';
const ids=['march','chair','wall','calf','shoulder','pelvic','bird','bridge','step','stretch','seated','wallslide'];
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png',
...ids.flatMap(id=>[`./videos/${id}.mp4`,`./videos/${id}.jpg`])];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fithome-shell-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
// Safari and Chromium may request MP4 with a Range header. Return valid HTTP 206
// from the cached full video rather than returning 200 for a partial request.
async function mediaRangeResponse(request,cached){
 const range=request.headers.get('range');
 if(!range || !cached) return cached;
 const bytes=await cached.arrayBuffer(),size=bytes.byteLength;
 const match=/^bytes=(\d*)-(\d*)$/.exec(range);
 if(!match)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${size}`}});
 let start=match[1]?Number(match[1]):0;
 let end=match[2]?Number(match[2]):size-1;
 if(!match[1]&&match[2]){start=Math.max(0,size-Number(match[2]));end=size-1;}
 if(!Number.isFinite(start)||!Number.isFinite(end)||start>=size||end<start)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${size}`}});
 end=Math.min(end,size-1);
 return new Response(bytes.slice(start,end+1),{status:206,headers:{'Content-Type':'video/mp4','Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':String(end-start+1)}});
}
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
 const cached=await caches.match(event.request,{ignoreSearch:true});
 if(cached){if(event.request.headers.has('range')&&new URL(event.request.url).pathname.endsWith('.mp4'))return mediaRangeResponse(event.request,cached);return cached;}
 try{const response=await fetch(event.request);
 if(response.ok && !event.request.headers.has('range')){
   const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(event.request,copy)).catch(()=>{});
 }
 return response;
 }catch{return event.request.mode==='navigate'?(await caches.match('./index.html')):Response.error();}
 })());
});
