(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();function l(o,n,c,i){const e=Math.PI/180,r=(c-o)*e,a=(i-n)*e,d=Math.sin(r/2)*Math.sin(r/2)+Math.cos(o*e)*Math.cos(c*e)*Math.sin(a/2)*Math.sin(a/2);return 6371e3*(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)))}function g(o,n,c,i,t){return l(o,n,c,i)/t}function p(o,n){o.addEventListener("click",f),n.addEventListener("click",m)}const s=[];let u;function f(){u=navigator.geolocation.watchPosition(o=>{const n=o.coords.latitude,c=o.coords.longitude,i=Date.now();if(console.log(`Latitude: ${n}, Longitude: ${c}`),s.push({latitude:n,longitude:c,timestamp:i}),s.length>1){const t=s[s.length-1],e=s[s.length-2],r=t.timestamp-e.timestamp,a=g(e.latitude,e.longitude,t.latitude,t.longitude,r/1e3);console.log(`Speed: ${a} m/s`),document.querySelector("#speed").innerHTML=`Speed: ${a.toFixed(2)} m/s`}document.querySelector("#lat-long").innerHTML=`lat: ${n}, long: ${c}`},o=>{console.error("Error getting user location:",o)},{enableHighAccuracy:!0,timeout:2500,maximumAge:0})}function m(){navigator.geolocation.clearWatch(u),s.forEach(o=>{console.log(`Latitude: ${o.latitude}, Longitude: ${o.longitude}`)}),document.querySelector("#lat-long").innerHTML=""}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Route tracker</h1>
    <div class="card">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
    <div id="speed"></div>
    <div id="lat-long"></div>
  </div>
`;p(document.querySelector("#start"),document.querySelector("#stop"));