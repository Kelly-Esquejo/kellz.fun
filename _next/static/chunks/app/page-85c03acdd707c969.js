(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4114:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,7970,23)),Promise.resolve().then(n.bind(n,3218))},8173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(306),o=n(5155),u=r._(n(2115)),a=n(180),l=n(1394),i=n(4116),s=n(4445),c=n(5353),f=n(2170),d=n(9544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}n(2363);let m=u.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:y,prefetch:g=null,passHref:b,replace:v,shallow:P,scroll:E,onClick:_,onMouseEnter:j,onTouchStart:C,legacyBehavior:O=!1,...x}=e;n=y,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=u.default.useContext(l.AppRouterContext),w=!1!==g,k=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:I,as:M}=u.default.useMemo(()=>{let e=h(a);return{href:e,as:m?h(m):e}},[a,m]),S=u.default.useRef(I),T=u.default.useRef(M);O&&(r=u.default.Children.only(n));let A=O?r&&"object"==typeof r&&r.ref:t,[R,U,F]=(0,i.useIntersection)({rootMargin:"200px"}),L=u.default.useCallback(e=>{(T.current!==M||S.current!==I)&&(F(),T.current=M,S.current=I),R(e)},[M,I,F,R]),q=(0,c.useMergedRef)(L,A);u.default.useEffect(()=>{N&&U&&w&&p(N,I,{kind:k})},[M,I,U,w,N,k]);let D={ref:q,onClick(e){O||"function"!=typeof _||_(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,a,l){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,N,I,M,v,P,E)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&w&&p(N,I,{kind:k})},onTouchStart:function(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&w&&p(N,I,{kind:k})}};return(0,f.isAbsoluteUrl)(M)?D.href=M:O&&!b&&("a"!==r.type||"href"in r.props)||(D.href=(0,d.addBasePath)(M)),O?u.default.cloneElement(r,D):(0,o.jsx)("a",{...x,...D,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(2115),o=n(8571),u="function"==typeof IntersectionObserver,a=new Map,l=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,s=i||!u,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let r=n(9955)._(n(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),i&&"object"==typeof i&&(i=String(r.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+u+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},4156:(e,t)=>{"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return u},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},3218:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),o=n(5565),u=n(8173),a=n.n(u);let l=e=>{let{items:t,width:n,height:u,quantity:l}=e,i=null!=n?n:"100px",s=null!=u?u:"100px";return(0,r.jsx)("div",{className:"scroller",style:{"--width":i,"--height":s,"--quantity":null!=l?l:t.length},children:(0,r.jsx)("div",{className:"scroll__inner",children:t.map((e,t)=>(0,r.jsx)("div",{className:"item-container",children:(0,r.jsxs)(a(),{href:e.url,className:"item ".concat(e.className),style:{"--position":t+1},onClick:t=>{"coming-soon"===e.className&&t.preventDefault()},children:[(0,r.jsx)(o.default,{unoptimized:!0,src:e.src,alt:e.alt,width:parseInt(i),height:parseInt(s),className:e.className}),"coming-soon"===e.className&&(0,r.jsx)("div",{className:"coming-soon-label",children:"Coming Soon"})]})},t))})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[565,441,517,358],()=>t(4114)),_N_E=e.O()}]);