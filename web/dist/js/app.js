(()=>{(()=>{"use strict";var g={},y={};function t(e){var o=y[e];if(o!==void 0)return o.exports;var a=y[e]={id:e,loaded:!1,exports:{}};return g[e](a,a.exports,t),a.loaded=!0,a.exports}t.m=g,(()=>{var e=typeof Symbol=="function"?Symbol("webpack queues"):"__webpack_queues__",o=typeof Symbol=="function"?Symbol("webpack exports"):"__webpack_exports__",a=typeof Symbol=="function"?Symbol("webpack error"):"__webpack_error__",s=n=>{n&&n.d<1&&(n.d=1,n.forEach(r=>r.r--),n.forEach(r=>r.r--?r.r++:r()))},p=n=>n.map(r=>{if(r!==null&&typeof r=="object"){if(r[e])return r;if(r.then){var l=[];l.d=0,r.then(c=>{i[o]=c,s(l)},c=>{i[a]=c,s(l)});var i={};return i[e]=c=>c(l),i}}var u={};return u[e]=c=>{},u[o]=r,u});t.a=(n,r,l)=>{var i;l&&((i=[]).d=-1);var u=new Set,c=n.exports,f,m,w,v=new Promise((b,d)=>{w=d,m=b});v[o]=c,v[e]=b=>(i&&b(i),u.forEach(b),v.catch(d=>{})),n.exports=v,r(b=>{f=p(b);var d,k=()=>f.map(_=>{if(_[a])throw _[a];return _[o]}),S=new Promise(_=>{d=()=>_(k),d.r=0;var x=h=>h!==i&&!u.has(h)&&(u.add(h),h&&!h.d&&(d.r++,h.push(d)));f.map(h=>h[e](x))});return d.r?S:k()},b=>(b?w(v[a]=b):m(c),s(i))),i&&i.d<0&&(i.d=0)}})(),t.d=(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((o,a)=>(t.f[a](e,o),o),[])),t.u=e=>"js/"+e+".76e.js",t.miniCssF=e=>{},t.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),t.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="create-wasm-app:";t.l=(a,s,p,n)=>{if(e[a]){e[a].push(s);return}var r,l;if(p!==void 0)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var c=i[u];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==o+p){r=c;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",o+p),r.src=a),e[a]=[s];var f=(w,v)=>{r.onerror=r.onload=null,clearTimeout(m);var b=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),b&&b.forEach(d=>d(v)),w)return w(v)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),l&&document.head.appendChild(r)}})(),t.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.v=(e,o,a,s)=>{var p=fetch(t.p+""+a+".module.wasm");return typeof WebAssembly.instantiateStreaming=="function"?WebAssembly.instantiateStreaming(p,s).then(n=>Object.assign(e,n.instance.exports)):p.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,s)).then(n=>Object.assign(e,n.instance.exports))},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var a=o.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!e;)e=a[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),(()=>{var e={143:0};t.f.j=(s,p)=>{var n=t.o(e,s)?e[s]:void 0;if(n!==0)if(n)p.push(n[2]);else{var r=new Promise((c,f)=>n=e[s]=[c,f]);p.push(n[2]=r);var l=t.p+t.u(s),i=new Error,u=c=>{if(t.o(e,s)&&(n=e[s],n!==0&&(e[s]=void 0),n)){var f=c&&(c.type==="load"?"missing":c.type),m=c&&c.target&&c.target.src;i.message="Loading chunk "+s+` failed.
(`+f+": "+m+")",i.name="ChunkLoadError",i.type=f,i.request=m,n[1](i)}};t.l(l,u,"chunk-"+s,s)}};var o=(s,p)=>{var[n,r,l]=p,i,u,c=0;if(n.some(m=>e[m]!==0)){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(l)var f=l(t)}for(s&&s(p);c<n.length;c++)u=n[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0},a=self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))})();var E={};t.e(115).then(t.bind(t,115)).catch(e=>console.error("Error importing `life.js`:",e))})();})();
