"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{2988:function(e,r,t){t.d(r,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}},8149:function(e,r,t){t.d(r,{M:function(){return n}});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(null==e||e(n),!1===t||!n.defaultPrevented)return null==r?void 0:r(n)}}},1584:function(e,r,t){t.d(r,{F:function(){return o},e:function(){return l}});var n=t(2265);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return(0,n.useCallback)(o(...e),e)}},8324:function(e,r,t){t.d(r,{b:function(){return l},k:function(){return o}});var n=t(2265);function o(e,r){let t=(0,n.createContext)(r);function o(e){let{children:r,...o}=e,l=(0,n.useMemo)(()=>o,Object.values(o));return(0,n.createElement)(t.Provider,{value:l},r)}return o.displayName=e+"Provider",[o,function(o){let l=(0,n.useContext)(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,r=[]){let t=[],o=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let o=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let l=(0,n.createContext)(o),i=t.length;function s(r){let{scope:t,children:o,...s}=r,a=(null==t?void 0:t[e][i])||l,c=(0,n.useMemo)(()=>s,Object.values(s));return(0,n.createElement)(a.Provider,{value:c},o)}return t=[...t,o],s.displayName=r+"Provider",[s,function(t,s){let a=(null==s?void 0:s[e][i])||l,c=(0,n.useContext)(a);if(c)return c;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}},3938:function(e,r,t){let n;t.d(r,{XB:function(){return f}});var o=t(2988),l=t(2265),i=t(8149),s=t(5171),a=t(1584),c=t(5137);let u="dismissableLayer.update",d=(0,l.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,l.forwardRef)((e,r)=>{var t;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:m,onPointerDownOutside:g,onFocusOutside:v,onInteractOutside:h,onDismiss:y,...w}=e,x=(0,l.useContext)(d),[E,k]=(0,l.useState)(null),O=null!==(t=null==E?void 0:E.ownerDocument)&&void 0!==t?t:null==globalThis?void 0:globalThis.document,[,C]=(0,l.useState)({}),P=(0,a.e)(r,e=>k(e)),j=Array.from(x.layers),[z]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),S=j.indexOf(z),N=E?j.indexOf(E):-1,D=x.layersWithOutsidePointerEventsDisabled.size>0,T=N>=S,W=function(e,r=null==globalThis?void 0:globalThis.document){let t=(0,c.W)(e),n=(0,l.useRef)(!1),o=(0,l.useRef)(()=>{});return(0,l.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function l(){b("dismissableLayer.pointerDownOutside",t,n,{discrete:!0})}"touch"===e.pointerType?(r.removeEventListener("click",o.current),o.current=l,r.addEventListener("click",o.current,{once:!0})):l()}else r.removeEventListener("click",o.current);n.current=!1},l=window.setTimeout(()=>{r.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",e),r.removeEventListener("click",o.current)}},[r,t]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let r=e.target,t=[...x.branches].some(e=>e.contains(r));!T||t||(null==g||g(e),null==h||h(e),e.defaultPrevented||null==y||y())},O),M=function(e,r=null==globalThis?void 0:globalThis.document){let t=(0,c.W)(e),n=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{let e=e=>{e.target&&!n.current&&b("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return r.addEventListener("focusin",e),()=>r.removeEventListener("focusin",e)},[r,t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let r=e.target;[...x.branches].some(e=>e.contains(r))||(null==v||v(e),null==h||h(e),e.defaultPrevented||null==y||y())},O);return!function(e,r=null==globalThis?void 0:globalThis.document){let t=(0,c.W)(e);(0,l.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e),()=>r.removeEventListener("keydown",e)},[t,r])}(e=>{N!==x.layers.size-1||(null==m||m(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},O),(0,l.useEffect)(()=>{if(E)return f&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(n=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(E)),x.layers.add(E),p(),()=>{f&&1===x.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=n)}},[E,O,f,x]),(0,l.useEffect)(()=>()=>{E&&(x.layers.delete(E),x.layersWithOutsidePointerEventsDisabled.delete(E),p())},[E,x]),(0,l.useEffect)(()=>{let e=()=>C({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,l.createElement)(s.WV.div,(0,o.Z)({},w,{ref:P,style:{pointerEvents:D?T?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,W.onPointerDownCapture)}))});function p(){let e=new CustomEvent(u);document.dispatchEvent(e)}function b(e,r,t,{discrete:n}){let o=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&o.addEventListener(e,r,{once:!0}),n?(0,s.jH)(o,l):o.dispatchEvent(l)}},3201:function(e,r,t){t.d(r,{M:function(){return a}});var n,o=t(2265),l=t(1336);let i=(n||(n=t.t(o,2)))["useId".toString()]||(()=>void 0),s=0;function a(e){let[r,t]=o.useState(i());return(0,l.b)(()=>{e||t(e=>null!=e?e:String(s++))},[e]),e||(r?`radix-${r}`:"")}},6935:function(e,r,t){t.d(r,{h:function(){return s}});var n=t(2988),o=t(2265),l=t(4887),i=t(5171);let s=(0,o.forwardRef)((e,r)=>{var t;let{container:s=null==globalThis?void 0:null===(t=globalThis.document)||void 0===t?void 0:t.body,...a}=e;return s?l.createPortal((0,o.createElement)(i.WV.div,(0,n.Z)({},a,{ref:r})),s):null})},5171:function(e,r,t){t.d(r,{WV:function(){return s},jH:function(){return a}});var n=t(2988),o=t(2265),l=t(4887),i=t(1538);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,o.forwardRef)((e,t)=>{let{asChild:l,...s}=e,a=l?i.g7:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(a,(0,n.Z)({},s,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&(0,l.flushSync)(()=>e.dispatchEvent(r))}},1538:function(e,r,t){t.d(r,{A4:function(){return a},g7:function(){return i}});var n=t(2988),o=t(2265),l=t(1584);let i=(0,o.forwardRef)((e,r)=>{let{children:t,...l}=e,i=o.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(s,(0,n.Z)({},l,{ref:r}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,t):null)}return(0,o.createElement)(s,(0,n.Z)({},l,{ref:r}),t)});i.displayName="Slot";let s=(0,o.forwardRef)((e,r)=>{let{children:t,...n}=e;return(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?(0,l.F)(r,t.ref):t.ref}):o.Children.count(t)>1?o.Children.only(null):null});s.displayName="SlotClone";let a=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===a}},5137:function(e,r,t){t.d(r,{W:function(){return o}});var n=t(2265);function o(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}},1715:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(2265),o=t(5137);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=(0,n.useState)(e),[l]=t,i=(0,n.useRef)(l),s=(0,o.W)(r);return(0,n.useEffect)(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,c=(0,o.W)(t);return[a,(0,n.useCallback)(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[s,e,i,c])]}},1336:function(e,r,t){t.d(r,{b:function(){return o}});var n=t(2265);let o=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}},4839:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},1810:function(e,r,t){t.d(r,{w_:function(){return u}});var n=t(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){var n,o;n=r,o=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e){return r=>n.createElement(d,s({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>n.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function d(e){var r=r=>{var t,{attr:o,size:l,title:a}=e,u=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,i),d=l||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,u,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>r(e)):r(o)}},6164:function(e,r,t){t.d(r,{m6:function(){return $}});let n=/^\[(.+)\]$/;function o(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let l=/\s+/;function i(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let n="";for(let o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);return n}(e))&&(n&&(n+=" "),n+=r);return n}function s(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return h(e)||u.has(e)||c.test(e)}function v(e){return D(e,"length",T)}function h(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return D(e,"number",h)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&h(e.slice(0,-1))}function E(e){return a.test(e)}function k(e){return d.test(e)}let O=new Set(["length","size","percentage"]);function C(e){return D(e,O,W)}function P(e){return D(e,"position",W)}let j=new Set(["image","url"]);function z(e){return D(e,j,L)}function S(e){return D(e,"",M)}function N(){return!0}function D(e,r,t){let n=a.exec(e);return!!n&&(n[1]?"string"==typeof r?n[1]===r:r.has(n[1]):t(n[2]))}function T(e){return f.test(e)&&!p.test(e)}function W(){return!1}function M(e){return b.test(e)}function L(e){return m.test(e)}let $=function(e,...r){let t,s,a;let c=function(l){var i;return s=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map;function o(o,l){t.set(o,l),++r>e&&(r=0,n=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}}((i=r.reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,t=1===r.length,n=r[0],o=r.length;return function(e){let l;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===n&&(t||e.slice(c,c+o)===r)){i.push(e.slice(a,c)),a=c+o;continue}if("/"===u){l=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===i.length?e:e.substring(a),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}(i),...function(e){let r=function(e){var r;let{theme:t,prefix:n}=e,l={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),n?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[n+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,n,l){r.forEach(r=>{if("string"==typeof r){(""===r?t:o(t,r)).classGroupId=n;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),t,n,l);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([r,i])=>{e(i,o(t,r),n,l)})})})(r,l,e,t)}),l}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let n=r[0],o=t.nextPart.get(n),l=o?e(r.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=r.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId}(t,r)||function(e){if(n.test(e)){let r=n.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let n=t[e]||[];return r&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,a=t.cache.set,c=u,u(l)};function u(e){let r=s(e);if(r)return r;let n=function(e,r){let{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:o}=r,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:r,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=t(e),s=n(i?l.substring(0,i):l),a=!!i;if(!s){if(!i||!(s=n(l)))return{isTailwindClass:!1,originalClassName:e};a=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:o?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:a}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:n}=e,l=r+t;return!i.has(l)&&(i.add(l),o(t,n).forEach(e=>i.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return a(e,n),n}return function(){return c(i.apply(null,arguments))}}(function(){let e=s("colors"),r=s("spacing"),t=s("blur"),n=s("brightness"),o=s("borderColor"),l=s("borderRadius"),i=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),f=s("invert"),p=s("gap"),b=s("gradientColorStops"),m=s("gradientColorStopPositions"),O=s("inset"),j=s("margin"),D=s("opacity"),T=s("padding"),W=s("saturate"),M=s("scale"),L=s("sepia"),$=s("skew"),R=s("space"),_=s("translate"),G=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",E,r],V=()=>[E,r],Z=()=>["",g,v],A=()=>["auto",h,E],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",E],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[h,y],U=()=>[h,E];return{cacheSize:500,separator:":",theme:{colors:[N],spacing:[g,v],blur:["none","",k,E],brightness:Q(),borderColor:[e],borderRadius:["none","","full",k,E],borderSpacing:V(),borderWidth:Z(),contrast:Q(),grayscale:X(),hueRotate:U(),invert:X(),gap:V(),gradientColorStops:[e],gradientColorStopPositions:[x,v],inset:F(),margin:F(),opacity:Q(),padding:V(),saturate:Q(),scale:Q(),sepia:X(),skew:U(),space:V(),translate:V()},classGroups:{aspect:[{aspect:["auto","square","video",E]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),E]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:G()}],"overscroll-x":[{"overscroll-x":G()}],"overscroll-y":[{"overscroll-y":G()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[O]}],"inset-x":[{"inset-x":[O]}],"inset-y":[{"inset-y":[O]}],start:[{start:[O]}],end:[{end:[O]}],top:[{top:[O]}],right:[{right:[O]}],bottom:[{bottom:[O]}],left:[{left:[O]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,E]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",E]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",w,E]}],"grid-cols":[{"grid-cols":[N]}],"col-start-end":[{col:["auto",{span:["full",w,E]},E]}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":[N]}],"row-start-end":[{row:["auto",{span:[w,E]},E]}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",E]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",E]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[T]}],px:[{px:[T]}],py:[{py:[T]}],ps:[{ps:[T]}],pe:[{pe:[T]}],pt:[{pt:[T]}],pr:[{pr:[T]}],pb:[{pb:[T]}],pl:[{pl:[T]}],m:[{m:[j]}],mx:[{mx:[j]}],my:[{my:[j]}],ms:[{ms:[j]}],me:[{me:[j]}],mt:[{mt:[j]}],mr:[{mr:[j]}],mb:[{mb:[j]}],ml:[{ml:[j]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",E,r]}],"min-w":[{"min-w":[E,r,"min","max","fit"]}],"max-w":[{"max-w":[E,r,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[E,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[E,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[E,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[E,r,"auto","min","max","fit"]}],"font-size":[{text:["base",k,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[N]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",E]}],"line-clamp":[{"line-clamp":["none",h,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,E]}],"list-image":[{"list-image":["none",E]}],"list-style-type":[{list:["none","disc","decimal",E]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[D]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,v]}],"underline-offset":[{"underline-offset":["auto",g,E]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",E]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",E]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[D]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),P]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},z]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[D]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[D]}],"divide-style":[{divide:q()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[g,E]}],"outline-w":[{outline:[g,v]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[D]}],"ring-offset-w":[{"ring-offset":[g,v]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,S]}],"shadow-color":[{shadow:[N]}],opacity:[{opacity:[D]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",k,E]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[W]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[D]}],"backdrop-saturate":[{"backdrop-saturate":[W]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",E]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",E]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",E]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[w,E]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",E]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",E]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",E]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,v,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);