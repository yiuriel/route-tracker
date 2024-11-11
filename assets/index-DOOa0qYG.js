(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function a(o,r){o.addEventListener("click",l),r.addEventListener("click",d)}const u=[];let s;function l(){s=navigator.geolocation.watchPosition(o=>{const r=o.coords.latitude,n=o.coords.longitude;console.log(`Latitude: ${r}, Longitude: ${n}`),u.push({latitude:r,longitude:n}),document.querySelector("#lat-long").innerHTML+=`<br>lat: ${r}, long: ${n}`},o=>{console.error("Error getting user location:",o)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}function d(){navigator.geolocation.clearWatch(s),u.forEach(o=>{console.log(`Latitude: ${o.latitude}, Longitude: ${o.longitude}`)}),document.querySelector("#lat-long").innerHTML=""}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Route tracker</h1>
    <div class="card">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
    <div id="lat-long"></div>
  </div>
`;a(document.querySelector("#start"),document.querySelector("#stop"));
