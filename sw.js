if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let t={};const o=e=>s(e,d),c={module:{uri:d},exports:t,require:o};i[d]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B1iCpjzG.js",revision:null},{url:"assets/index-Dqfg3g-d.css",revision:null},{url:"index.html",revision:"62ce3e577dcb7935f8e2a284b22ddcd1"},{url:"registerSW.js",revision:"22d0dfeacfc227d5619771aa5cb3e2ca"},{url:"icons/192.png",revision:"2a90357b130f58e5af1d11b9310b751c"},{url:"icons/512.png",revision:"1d92ad223be5d5366da876e55df0d187"},{url:"manifest.webmanifest",revision:"6cc9b7cde6a115a0b81f5c4ef00a5fde"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
