function B(){}function X(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function Y(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return B;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function xt(t,e,n,i){if(t){const s=K(t,e,n,i);return t[0](s)}}function K(t,e,n,i){return t[1]&&i?X(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)u[l]=e.dirty[l]|s[l];return u}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,u){if(s){const r=K(e,n,i,u);t.p(r,s)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let j=!1;function et(){j=!0}function nt(){j=!1}function it(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=o?s+1:it(1,s,_=>e[n[_]].claim_order,o))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,s=Math.max(d,s)}const u=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);u.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<u.length&&r[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(r[c],a)}}function rt(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){j&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function Et(){return D(" ")}function At(){return D("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ot(t,i,e[i])}function ut(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,s=!1){ft(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,e,n,i){return Q(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||u.push(l.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Nt(t,e,n){return at(t,e,n,lt)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>D(e),!0)}function Mt(t){return _t(t," ")}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e){t.value=e==null?"":e}function Tt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function b(t){w=t}function N(){if(!w)throw new Error("Function called outside component initialization");return w}function qt(t){N().$$.on_mount.push(t)}function Bt(t){N().$$.after_update.push(t)}function Dt(t,e){N().$$.context.set(t,e)}function zt(t){return N().$$.context.get(t)}const x=[],I=[],A=[],G=[],R=Promise.resolve();let P=!1;function U(){P||(P=!0,R.then(V))}function Ft(){return U(),R}function q(t){A.push(t)}const L=new Set;let E=0;function V(){const t=w;do{for(;E<x.length;){const e=x[E];E++,b(e),dt(e.$$)}for(b(null),x.length=0,E=0;I.length;)I.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];L.has(n)||(L.add(n),n())}A.length=0}while(x.length);for(;G.length;)G.pop()();P=!1,L.clear(),b(t)}function dt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const S=new Set;let g;function Ht(){g={r:0,c:[],p:g}}function It(){g.r||$(g.c),g=g.p}function W(t,e){t&&t.i&&(S.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Jt(t,e){t.d(1),e.delete(t.key)}function Kt(t,e,n,i,s,u,r,l,c,o,a,d){let _=t.length,m=u.length,h=_;const M={};for(;h--;)M[t[h].key]=h;const k=[],C=new Map,O=new Map;for(h=m;h--;){const f=d(s,u,h),y=n(f);let p=r.get(y);p?i&&p.p(f,e):(p=o(y,f),p.c()),C.set(y,k[h]=p),y in M&&O.set(y,Math.abs(h-M[y]))}const z=new Set,F=new Set;function T(f){W(f,1),f.m(l,a),r.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=k[m-1],y=t[_-1],p=f.key,v=y.key;f===y?(a=f.first,_--,m--):C.has(v)?!r.has(p)||z.has(p)?T(f):F.has(v)?_--:O.get(p)>O.get(v)?(F.add(p),T(f)):(z.add(v),_--):(c(y,r),_--)}for(;_--;){const f=t[_];C.has(f.key)||c(f,r)}for(;m;)T(k[m-1]);return k}function Qt(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],l=e[u];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[u]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Rt(t){return typeof t=="object"&&t!==null?t:{}}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||q(()=>{const c=u.map(J).filter(Y);r?r.push(...c):$(c),t.$$.on_mount=[]}),l.forEach(q)}function mt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(x.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,s,u,r,l=[-1]){const c=w;b(t);const o=t.$$={fragment:null,ctx:null,props:u,update:B,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return o.ctx&&s(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),a&&yt(t,d)),_}):[],o.update(),a=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){et();const d=ut(e.target);o.fragment&&o.fragment.l(d),d.forEach(st)}else o.fragment&&o.fragment.c();e.intro&&W(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),nt(),V()}b(c)}class Xt{$destroy(){mt(this,1),this.$destroy=B}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as A,mt as B,X as C,Ft as D,B as E,xt as F,Pt as G,rt as H,wt as I,$t as J,bt as K,jt as L,zt as M,gt as N,vt as O,Lt as P,Kt as Q,Jt as R,Xt as S,Ot as T,St as U,$ as V,ut as a,ot as b,Nt as c,st as d,lt as e,Tt as f,kt as g,_t as h,Wt as i,Ct as j,Et as k,At as l,Mt as m,Ht as n,Gt as o,It as p,W as q,Dt as r,pt as s,D as t,Bt as u,qt as v,Ut as w,Vt as x,ht as y,Qt as z};
