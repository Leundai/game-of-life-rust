"use strict";(()=>{var q=(d,w)=>()=>(w||d((w={exports:{}}).exports,w),w.exports);var G=(d,w,c)=>new Promise((n,y)=>{var s=o=>{try{a(c.next(o))}catch(j){y(j)}},g=o=>{try{a(c.throw(o))}catch(j){y(j)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,g);a((c=c.apply(d,w)).next())});var J=q(V=>{(self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[]).push([[115],{35:(d,w,c)=>{c.a(d,(n,y)=>G(V,null,function*(){try{c.d(w,{Pd:()=>g.Pd,bL:()=>g.bL});var s=c(914),g=c(889),a=n([s]);s=(a.then?(yield a)():a)[0],(0,g.oT)(s),y()}catch(o){y(o)}}))},889:(d,w,c)=>{c.d(w,{KM:()=>Z,Or:()=>z,Pd:()=>k,a2:()=>Y,bL:()=>A,iX:()=>$,mI:()=>N,oT:()=>y,ug:()=>x}),d=c.hmd(d);let n;function y(e){n=e}const s=new Array(128).fill(void 0);s.push(void 0,null,!0,!1);function g(e){return s[e]}let a=s.length;function o(e){e<132||(s[e]=a,a=e)}function j(e){const t=g(e);return o(e),t}const B=typeof TextDecoder=="undefined"?(0,d.require)("util").TextDecoder:TextDecoder;let C=new B("utf-8",{ignoreBOM:!0,fatal:!0});C.decode();let T=null;function F(){return(T===null||T.byteLength===0)&&(T=new Uint8Array(n.memory.buffer)),T}function l(e,t){return e=e>>>0,C.decode(F().subarray(e,e+t))}let u=null;function b(){return(u===null||u.byteLength===0)&&(u=new Int32Array(n.memory.buffer)),u}function p(e){a===s.length&&s.push(s.length+1);const t=a;return a=s[t],s[t]=e,t}let h=0;const S=typeof TextEncoder=="undefined"?(0,d.require)("util").TextEncoder:TextEncoder;let L=new S("utf-8");const H=typeof L.encodeInto=="function"?function(e,t){return L.encodeInto(e,t)}:function(e,t){const r=L.encode(e);return t.set(r),{read:e.length,written:r.length}};function X(e,t,r){if(r===void 0){const v=L.encode(e),M=t(v.length,1)>>>0;return F().subarray(M,M+v.length).set(v),h=v.length,M}let i=e.length,m=t(i,1)>>>0;const I=F();let f=0;for(;f<i;f++){const v=e.charCodeAt(f);if(v>127)break;I[m+f]=v}if(f!==i){f!==0&&(e=e.slice(f)),m=r(m,i,i=f+e.length*3,1)>>>0;const v=F().subarray(m+f,m+i),M=H(e,v);f+=M.written}return h=f,m}function E(e){return()=>{throw new Error(`${e} is not defined`)}}const A=Object.freeze({Dead:0,0:"Dead",Alive:1,1:"Alive"});class k{static __wrap(t){t=t>>>0;const r=Object.create(k.prototype);return r.__wbg_ptr=t,r}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();n.__wbg_universe_free(t)}tick(){n.universe_tick(this.__wbg_ptr)}set_width(t){n.universe_set_width(this.__wbg_ptr,t)}width(){return n.universe_width(this.__wbg_ptr)>>>0}set_height(t){n.universe_set_height(this.__wbg_ptr,t)}height(){return n.universe_height(this.__wbg_ptr)>>>0}set_speed(t){n.universe_set_speed(this.__wbg_ptr,t)}cells(){return n.universe_cells(this.__wbg_ptr)}toggle_cell(t,r){n.universe_toggle_cell(this.__wbg_ptr,t,r)}reset(){n.universe_reset(this.__wbg_ptr)}random(){n.universe_random(this.__wbg_ptr)}static new(t,r){const i=n.universe_new(t,r);return k.__wrap(i)}resize(t,r){n.universe_resize(this.__wbg_ptr,t,r)}render(){let t,r;try{const I=n.__wbindgen_add_to_stack_pointer(-16);n.universe_render(I,this.__wbg_ptr);var i=b()[I/4+0],m=b()[I/4+1];return t=i,r=m,l(i,m)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(t,r,1)}}}function Y(){const e=new Error;return p(e)}function Z(e,t){const r=g(t).stack,i=X(r,n.__wbindgen_malloc,n.__wbindgen_realloc),m=h;b()[e/4+1]=m,b()[e/4+0]=i}function $(e,t){let r,i;try{r=e,i=t,console.error(l(e,t))}finally{n.__wbindgen_free(r,i,1)}}function x(e){j(e)}const N=typeof Math.random=="function"?Math.random:E("Math.random");function z(e,t){throw new Error(l(e,t))}},115:(d,w,c)=>{c.a(d,(n,y)=>G(V,null,function*(){try{c.r(w);var s=c(35),g=c(914),a=n([s,g]);[s,g]=a.then?(yield a)():a;const o=10,j="#e5e5e5",B="#FFFFFF",C="#000000";window.mobileCheck=function(){let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e};const T=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),F=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);let l=Math.floor(T/(o+1)),u=Math.floor(F/(o+1));const b=s.Pd.new(l,u);window.addEventListener("resize",e=>{const t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);window.mobileCheck()||(l=Math.floor(t/(o+1)),u=Math.floor(r/(o+1)),b.resize(l,u),p.height=u*(o+1)+1,p.width=l*(o+1)+1,k())});const p=document.getElementById("game-of-life-canvas");p.height=u*(o+1)+1,p.width=l*(o+1)+1;const h=p.getContext("2d");let S=null;const L=()=>{x(),z(),b.tick(),S=requestAnimationFrame(L)},H=()=>S===null,X=document.getElementById("play-pause"),E=document.getElementById("play-pause-icon"),A=()=>{E.className="bi bi-pause-fill",L()},k=()=>{E.className="bi bi-play-fill",x(),z(),cancelAnimationFrame(S),S=null};X.addEventListener("click",e=>{H()?A():k()}),document.getElementById("reset").addEventListener("click",e=>{b.reset(),k(),x(),z()}),document.getElementById("random").addEventListener("click",e=>{b.random(),x(),z()}),document.getElementById("speed").addEventListener("input",e=>{b.set_speed(e.target.value)}),p.addEventListener("click",e=>{const t=p.getBoundingClientRect(),r=p.width/t.width,i=p.height/t.height,m=(e.clientX-t.left)*r,I=(e.clientY-t.top)*i,f=Math.min(Math.floor(I/(o+1)),u-1),v=Math.min(Math.floor(m/(o+1)),l-1);b.toggle_cell(f,v),x(),z()});const x=()=>{h.beginPath(),h.strokeStyle=j;for(let e=0;e<=l;e++)h.moveTo(e*(o+1)+1,0),h.lineTo(e*(o+1)+1,(o+1)*u+1);for(let e=0;e<=u;e++)h.moveTo(0,e*(o+1)+1),h.lineTo((o+1)*l+1,e*(o+1)+1);h.stroke()},N=(e,t)=>e*l+t,z=()=>{const e=b.cells(),t=new Uint8Array(g.memory.buffer,e,l*u);h.beginPath();for(let r=0;r<u;r++)for(let i=0;i<l;i++){const m=N(r,i);h.fillStyle=t[m]===s.bL.Dead?B:C,h.fillRect(i*(o+1)+1,r*(o+1)+1,o,o)}h.stroke()};x(),z(),A(),y()}catch(o){y(o)}}))},914:(d,w,c)=>{var n=c(889);d.exports=c.v(w,d.id,"70c7a3d4af60d9e17b97",{"./wasm_game_of_life_bg.js":{__wbg_new_abda76e883ba8a5f:n.a2,__wbg_stack_658279fe44541cf6:n.KM,__wbg_error_f851667af71bcfc6:n.iX,__wbindgen_object_drop_ref:n.ug,__wbg_random_5f61cd0d6777a993:n.mI,__wbindgen_throw:n.Or}})}}])});J();})();
