(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function u(r,o){r.addEventListener("click",d),o.addEventListener("click",a)}let s;function d(){s=navigator.geolocation.watchPosition(r=>{const o=r.coords.latitude,n=r.coords.longitude;console.log(`Latitude: ${o}, Longitude: ${n}`),document.querySelector("#lat").textContent+=String(o),document.querySelector("#long").textContent+=String(n)},r=>{console.error("Error getting user location:",r)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}function a(){navigator.geolocation.clearWatch(s)}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Route tracker</h1>
    <div class="card">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
    <div id="lat"></div>
    <div id="long"></div>
  </div>
`;u(document.querySelector("#start"),document.querySelector("#stop"));
