function q(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function F(){return Object.create(null)}function $(t){t.forEach(K)}function it(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return q;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function vt(t,e,n,i){if(t){const c=Q(t,e,n,i);return t[0](c)}}function Q(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],s=Math.max(e.dirty.length,c.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|c[l];return u}return e.dirty|c}return e.dirty}function Tt(t,e,n,i,c,u){if(c){const s=Q(e,n,i,u);t.p(s,c)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let S=!1;function st(){S=!0}function lt(){S=!1}function ot(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:ot(1,c,_=>e[n[_]].claim_order,o))-1;i[r]=n[a]+1;const d=a+1;n[d]=r,c=Math.max(d,c)}const u=[],s=[];let l=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);l>=r;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<s.length;r++){for(;o<u.length&&s[r].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[r],a)}}function ft(t,e){if(S){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function at(t,e,n){t.insertBefore(e,n||null)}function _t(t,e,n){S&&!n?ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function St(){return D(" ")}function Mt(){return D("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:dt(t,i,e[i])}function ht(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function X(t,e,n,i,c=!1){V(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function mt(t,e,n,i){return X(t,c=>c.nodeName===e,c=>{const u=[];for(let s=0;s<c.attributes.length;s++){const l=c.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>c.removeAttribute(s))},()=>i(e))}function Ht(t,e,n){return mt(t,e,n,U)}function yt(t,e){return X(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>D(e),!0)}function Lt(t){return yt(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===e)return i}return t.length}function Ot(t){const e=I(t,"HTML_TAG_START",0),n=I(t,"HTML_TAG_END",e);if(e===n)return new R;V(t);const i=t.splice(e,n-e+1);N(i[0]),N(i[i.length-1]);const c=i.slice(1,i.length-1);for(const u of c)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new R(c)}function Bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e){t.value=e==null?"":e}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class pt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)at(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class R extends pt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)_t(this.t,this.n[n],e)}}let w;function b(t){w=t}function M(){if(!w)throw new Error("Function called outside component initialization");return w}function Gt(t){M().$$.on_mount.push(t)}function zt(t){M().$$.after_update.push(t)}function Ft(t,e){M().$$.context.set(t,e)}function It(t){return M().$$.context.get(t)}const x=[],W=[],T=[],J=[],Y=Promise.resolve();let B=!1;function Z(){B||(B=!0,Y.then(tt))}function Rt(){return Z(),Y}function P(t){T.push(t)}const O=new Set;let A=0;function tt(){const t=w;do{for(;A<x.length;){const e=x[A];A++,b(e),gt(e.$$)}for(b(null),x.length=0,A=0;W.length;)W.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];O.has(n)||(O.add(n),n())}T.length=0}while(x.length);for(;J.length;)J.pop()();B=!1,O.clear(),b(t)}function gt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const E=new Set;let g;function Wt(){g={r:0,c:[],p:g}}function Jt(){g.r||$(g.c),g=g.p}function et(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),g.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Qt(t,e){t.d(1),e.delete(t.key)}function Ut(t,e,n,i,c,u,s,l,r,o,a,d){let _=t.length,m=u.length,h=_;const j={};for(;h--;)j[t[h].key]=h;const k=[],C=new Map,H=new Map;for(h=m;h--;){const f=d(c,u,h),y=n(f);let p=s.get(y);p?i&&p.p(f,e):(p=o(y,f),p.c()),C.set(y,k[h]=p),y in j&&H.set(y,Math.abs(h-j[y]))}const G=new Set,z=new Set;function L(f){et(f,1),f.m(l,a),s.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=k[m-1],y=t[_-1],p=f.key,v=y.key;f===y?(a=f.first,_--,m--):C.has(v)?!s.has(p)||G.has(p)?L(f):z.has(v)?_--:H.get(p)>H.get(v)?(z.add(p),L(f)):(G.add(v),_--):(r(y,s),_--)}for(;_--;){const f=t[_];C.has(f.key)||r(f,s)}for(;m;)L(k[m-1]);return k}function Vt(t,e){const n={},i={},c={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const r in s)r in l||(i[r]=1);for(const r in l)c[r]||(n[r]=l[r],c[r]=1);t[u]=l}else for(const r in s)c[r]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:c,on_mount:u,on_destroy:s,after_update:l}=t.$$;c&&c.m(e,n),i||P(()=>{const r=u.map(K).filter(it);s?s.push(...r):$(r),t.$$.on_mount=[]}),l.forEach(P)}function bt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(x.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,c,u,s,l=[-1]){const r=w;b(t);const o=t.$$={fragment:null,ctx:null,props:u,update:q,not_equal:c,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return o.ctx&&c(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),a&&wt(t,d)),_}):[],o.update(),a=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){st();const d=ht(e.target);o.fragment&&o.fragment.l(d),d.forEach(N)}else o.fragment&&o.fragment.c();e.intro&&et(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),lt(),tt()}b(r)}class ee{$destroy(){bt(this,1),this.$destroy=q}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Xt as A,bt as B,nt as C,Rt as D,q as E,vt as F,Dt as G,ft as H,Tt as I,Et as J,At as K,R as L,Ot as M,Ct as N,It as O,kt as P,Nt as Q,Ut as R,ee as S,Qt as T,Pt as U,jt as V,$ as W,ht as a,dt as b,Ht as c,N as d,U as e,qt as f,_t as g,yt as h,te as i,Bt as j,St as k,Mt as l,Lt as m,Wt as n,Kt as o,Jt as p,et as q,Ft as r,$t as s,D as t,zt as u,Gt as v,Yt as w,Zt as x,xt as y,Vt as z};
