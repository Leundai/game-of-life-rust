"use strict";(()=>{var J=(l,w)=>()=>(w||l((w={exports:{}}).exports,w),w.exports);var G=(l,w,i)=>new Promise((n,p)=>{var s=r=>{try{d(i.next(r))}catch(T){p(T)}},b=r=>{try{d(i.throw(r))}catch(T){p(T)}},d=r=>r.done?n(r.value):Promise.resolve(r.value).then(s,b);d((i=i.apply(l,w)).next())});var O=J(V=>{(self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[]).push([[115],{35:(l,w,i)=>{i.a(l,(n,p)=>G(V,null,function*(){try{i.d(w,{Pd:()=>b.Pd,bL:()=>b.bL});var s=i(914),b=i(889),d=n([s]);s=(d.then?(yield d)():d)[0],(0,b.oT)(s),p()}catch(r){p(r)}}))},889:(l,w,i)=>{i.d(w,{KM:()=>Z,Or:()=>I,Pd:()=>x,a2:()=>Y,bL:()=>A,iX:()=>$,mI:()=>k,oT:()=>p,ug:()=>L}),l=i.hmd(l);let n;function p(t){n=t}const s=new Array(128).fill(void 0);s.push(void 0,null,!0,!1);function b(t){return s[t]}let d=s.length;function r(t){t<132||(s[t]=d,d=t)}function T(t){const e=b(t);return r(t),e}const C=typeof TextDecoder=="undefined"?(0,l.require)("util").TextDecoder:TextDecoder;let B=new C("utf-8",{ignoreBOM:!0,fatal:!0});B.decode();let S=null;function M(){return(S===null||S.byteLength===0)&&(S=new Uint8Array(n.memory.buffer)),S}function a(t,e){return t=t>>>0,B.decode(M().subarray(t,t+e))}let u=null;function v(){return(u===null||u.byteLength===0)&&(u=new Int32Array(n.memory.buffer)),u}function m(t){d===s.length&&s.push(s.length+1);const e=d;return d=s[e],s[e]=t,e}let h=0;const E=typeof TextEncoder=="undefined"?(0,l.require)("util").TextEncoder:TextEncoder;let j=new E("utf-8");const X=typeof j.encodeInto=="function"?function(t,e){return j.encodeInto(t,e)}:function(t,e){const o=j.encode(t);return e.set(o),{read:t.length,written:o.length}};function N(t,e,o){if(o===void 0){const y=j.encode(t),z=e(y.length,1)>>>0;return M().subarray(z,z+y.length).set(y),h=y.length,z}let c=t.length,f=e(c,1)>>>0;const F=M();let g=0;for(;g<c;g++){const y=t.charCodeAt(g);if(y>127)break;F[f+g]=y}if(g!==c){g!==0&&(t=t.slice(g)),f=o(f,c,c=g+t.length*3,1)>>>0;const y=M().subarray(f+g,f+c),z=X(t,y);g+=z.written}return h=g,f}function H(t){return()=>{throw new Error(`${t} is not defined`)}}const A=Object.freeze({Dead:0,0:"Dead",Alive:1,1:"Alive"});class x{static __wrap(e){e=e>>>0;const o=Object.create(x.prototype);return o.__wbg_ptr=e,o}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_universe_free(e)}tick(){n.universe_tick(this.__wbg_ptr)}set_width(e){n.universe_set_width(this.__wbg_ptr,e)}width(){return n.universe_width(this.__wbg_ptr)>>>0}set_height(e){n.universe_set_height(this.__wbg_ptr,e)}height(){return n.universe_height(this.__wbg_ptr)>>>0}set_speed(e){n.universe_set_speed(this.__wbg_ptr,e)}cells(){return n.universe_cells(this.__wbg_ptr)}toggle_cell(e,o){n.universe_toggle_cell(this.__wbg_ptr,e,o)}reset(){n.universe_reset(this.__wbg_ptr)}random(){n.universe_random(this.__wbg_ptr)}static new(e,o){const c=n.universe_new(e,o);return x.__wrap(c)}resize(e,o){n.universe_resize(this.__wbg_ptr,e,o)}render(){let e,o;try{const F=n.__wbindgen_add_to_stack_pointer(-16);n.universe_render(F,this.__wbg_ptr);var c=v()[F/4+0],f=v()[F/4+1];return e=c,o=f,a(c,f)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(e,o,1)}}}function Y(){const t=new Error;return m(t)}function Z(t,e){const o=b(e).stack,c=N(o,n.__wbindgen_malloc,n.__wbindgen_realloc),f=h;v()[t/4+1]=f,v()[t/4+0]=c}function $(t,e){let o,c;try{o=t,c=e,console.error(a(t,e))}finally{n.__wbindgen_free(o,c,1)}}function L(t){T(t)}const k=typeof Math.random=="function"?Math.random:H("Math.random");function I(t,e){throw new Error(a(t,e))}},115:(l,w,i)=>{i.a(l,(n,p)=>G(V,null,function*(){try{i.r(w);var s=i(35),b=i(914),d=n([s,b]);[s,b]=d.then?(yield d)():d;const r=10,T="#e5e5e5",C="#FFFFFF",B="#000000",S=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),M=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);let a=Math.floor(S/(r+1)),u=Math.floor(M/(r+1));const v=s.Pd.new(a,u);window.addEventListener("resize",t=>{const e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),o=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);a=Math.floor(e/(r+1)),u=Math.floor(o/(r+1)),v.resize(a,u),m.height=u*(r+1)+1,m.width=a*(r+1)+1,x()});const m=document.getElementById("game-of-life-canvas");m.height=u*(r+1)+1,m.width=a*(r+1)+1;const h=m.getContext("2d");let E=null;const j=()=>{L(),I(),v.tick(),E=requestAnimationFrame(j)},X=()=>E===null,N=document.getElementById("play-pause"),H=document.getElementById("play-pause-icon"),A=()=>{H.className="bi bi-pause-fill",j()},x=()=>{H.className="bi bi-play-fill",L(),I(),cancelAnimationFrame(E),E=null};N.addEventListener("click",t=>{X()?A():x()}),document.getElementById("reset").addEventListener("click",t=>{v.reset(),x(),L(),I()}),document.getElementById("random").addEventListener("click",t=>{v.random(),L(),I()}),document.getElementById("speed").addEventListener("input",t=>{v.set_speed(t.target.value)}),m.addEventListener("click",t=>{const e=m.getBoundingClientRect(),o=m.width/e.width,c=m.height/e.height,f=(t.clientX-e.left)*o,F=(t.clientY-e.top)*c,g=Math.min(Math.floor(F/(r+1)),u-1),y=Math.min(Math.floor(f/(r+1)),a-1);v.toggle_cell(g,y),L(),I()});const L=()=>{h.beginPath(),h.strokeStyle=T;for(let t=0;t<=a;t++)h.moveTo(t*(r+1)+1,0),h.lineTo(t*(r+1)+1,(r+1)*u+1);for(let t=0;t<=u;t++)h.moveTo(0,t*(r+1)+1),h.lineTo((r+1)*a+1,t*(r+1)+1);h.stroke()},k=(t,e)=>t*a+e,I=()=>{const t=v.cells(),e=new Uint8Array(b.memory.buffer,t,a*u);h.beginPath();for(let o=0;o<u;o++)for(let c=0;c<a;c++){const f=k(o,c);h.fillStyle=e[f]===s.bL.Dead?C:B,h.fillRect(c*(r+1)+1,o*(r+1)+1,r,r)}h.stroke()};L(),I(),A(),p()}catch(r){p(r)}}))},914:(l,w,i)=>{var n=i(889);l.exports=i.v(w,l.id,"70c7a3d4af60d9e17b97",{"./wasm_game_of_life_bg.js":{__wbg_new_abda76e883ba8a5f:n.a2,__wbg_stack_658279fe44541cf6:n.KM,__wbg_error_f851667af71bcfc6:n.iX,__wbindgen_object_drop_ref:n.ug,__wbg_random_5f61cd0d6777a993:n.mI,__wbindgen_throw:n.Or}})}}])});O();})();