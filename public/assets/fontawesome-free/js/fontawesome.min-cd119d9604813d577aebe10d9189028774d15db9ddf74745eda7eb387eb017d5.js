/*!
 * Font Awesome Free 5.8.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */

!function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function B(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},e=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.forEach(function(t){var e,n,a;e=r,a=i[n=t],n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a})}return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=function(){},e={},n={},a=null,o={mark:t,measure:t};try{"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(n=document),"undefined"!=typeof MutationObserver&&(a=MutationObserver),"undefined"!=typeof performance&&(o=performance)}catch(t){}var c=(e.navigator||{}).userAgent,s=void 0===c?"":c,h=e,p=n,l=a,f=o,u=!!h.document,g=!!p.documentElement&&!!p.head&&"function"==typeof p.addEventListener&&"function"==typeof p.createElement,k=~s.indexOf("MSIE")||~s.indexOf("Trident/"),v="___FONT_AWESOME___",A=16,b="fa",y="svg-inline--fa",U="data-fa-i2svg",w="data-fa-pseudo-element",x="data-fa-pseudo-element-pending",C="data-prefix",N="data-icon",S="fontawesome-i2svg",z="async",M=["HTML","HEAD","STYLE","SCRIPT"],O=function(){try{return!0}catch(t){return!1}}(),E={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},j={solid:"fas",regular:"far",light:"fal",brands:"fab"},P="fa-layers-text",L=/Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,_={900:"fas",400:"far",normal:"far",300:"fal"},T=[1,2,3,4,5,6,7,8,9,10],R=T.concat([11,12,13,14,15,16,17,18,19,20]),H=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(T.map(function(t){return"".concat(t,"x")})).concat(R.map(function(t){return"w-".concat(t)})),F=h.FontAwesomeConfig||{};if(p&&"function"==typeof p.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e,n=d(t,2),a=n[0],r=n[1],i=""===(e=function(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(a))||"false"!==e&&("true"===e||e);null!=i&&(F[r]=i)})}var Y=B({},{familyPrefix:b,replacementClass:y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},F);Y.autoReplaceSvg||(Y.observeMutations=!1);var V=B({},Y);h.FontAwesomeConfig=V;var D=h||{};D[v]||(D[v]={}),D[v].styles||(D[v].styles={}),D[v].hooks||(D[v].hooks={}),D[v].shims||(D[v].shims=[]);var q=D[v],W=[],X=!1;function K(t){g&&(X?setTimeout(t,0):W.push(t))}g&&((X=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState))||p.addEventListener("DOMContentLoaded",function t(){p.removeEventListener("DOMContentLoaded",t),X=1,W.map(function(t){return t()})}));var G,J="pending",Q="settled",Z="fulfilled",$="rejected",tt=function(){},et="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,nt="undefined"==typeof setImmediate?setTimeout:setImmediate,at=[];function rt(){for(var t=0;t<at.length;t++)at[t][0](at[t][1]);G=!(at=[])}function it(t,e){at.push([t,e]),G||(G=!0,nt(rt,0))}function ot(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=Z;try{a=r(a)}catch(t){ft(i,t)}}ct(i,a)||(n===Z&&st(i,a),n===$&&ft(i,a))}function ct(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===r(n))){var t=n.then;if("function"==typeof t)return t.call(n,function(t){a||(a=!0,n===t?lt(e,t):st(e,t))},function(t){a||(a=!0,ft(e,t))}),!0}}catch(t){return a||ft(e,t),!0}return!1}function st(t,e){t!==e&&ct(t,e)||lt(t,e)}function lt(t,e){t._state===J&&(t._state=Q,t._data=e,it(dt,t))}function ft(t,e){t._state===J&&(t._state=Q,t._data=e,it(mt,t))}function ut(t){t._then=t._then.forEach(ot)}function dt(t){t._state=Z,ut(t)}function mt(t){t._state=$,ut(t),!t._handled&&et&&global.process.emit("unhandledRejection",t._data,t)}function ht(t){global.process.emit("rejectionHandled",t)}function pt(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof pt==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){ft(e,t)}try{t(function(t){st(e,t)},n)}catch(t){n(t)}}(t,this)}pt.prototype={constructor:pt,_state:J,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===$&&et&&it(ht,this)),this._state===Z||this._state===$?it(ot,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},pt.all=function(c){if(!Array.isArray(c))throw new TypeError("You must pass an array to Promise.all().");return new pt(function(n,t){var a=[],r=0;function e(e){return r++,function(t){a[e]=t,--r||n(a)}}for(var i,o=0;o<c.length;o++)(i=c[o])&&"function"==typeof i.then?i.then(e(o),t):a[o]=i;r||n(a)})},pt.race=function(r){if(!Array.isArray(r))throw new TypeError("You must pass an array to Promise.race().");return new pt(function(t,e){for(var n,a=0;a<r.length;a++)(n=r[a])&&"function"==typeof n.then?n.then(t,e):t(n)})},pt.resolve=function(e){return e&&"object"===r(e)&&e.constructor===pt?e:new pt(function(t){t(e)})},pt.reject=function(n){return new pt(function(t,e){e(n)})};var gt="function"==typeof Promise?Promise:pt,vt=A,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yt(t){if(t&&g){var e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=p.head.childNodes,a=null,r=n.length-1;-1<r;r--){var i=n[r],o=(i.tagName||"").toUpperCase();-1<["STYLE","LINK"].indexOf(o)&&(a=i)}return p.head.insertBefore(e,a),t}}var wt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xt(){for(var t=12,e="";0<t--;)e+=wt[62*Math.random()|0];return e}function kt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function At(t){return t.classList?kt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ct(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~I.indexOf(n))?null:i}function Nt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function St(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function zt(t){return t.size!==bt.size||t.x!==bt.x||t.y!==bt.y||t.rotate!==bt.rotate||t.flipX||t.flipY}function Mt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var Ot={x:0,y:0,width:"100%",height:"100%"};function Et(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,s=t.title,l=t.extra,f=t.watchable,u=void 0!==f&&f,d=a.found?a:n,m=d.width,h=d.height,p="fa-w-".concat(Math.ceil(m/h*16)),g=[V.replacementClass,i?"".concat(V.familyPrefix,"-").concat(i):"",p].filter(function(t){return-1===l.classes.indexOf(t)}).concat(l.classes).join(" "),v={children:[],attributes:B({},l.attributes,{"data-prefix":r,"data-icon":i,class:g,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};u&&(v.attributes[U]=""),s&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(xt())},children:[s]});var b,y,w,x,k,A,C,N,S,z,M,O,E,j,P,L,_,T,R,H,I,F,Y,D=B({},v,{prefix:r,iconName:i,main:n,mask:a,transform:o,symbol:c,styles:l.styles}),q=a.found&&n.found?(y=(b=D).children,w=b.attributes,x=b.main,k=b.mask,A=b.transform,C=x.width,N=x.icon,S=k.width,z=k.icon,M=Mt({transform:A,containerWidth:S,iconWidth:C}),O={tag:"rect",attributes:B({},Ot,{fill:"white"})},E={tag:"g",attributes:B({},M.inner),children:[{tag:"path",attributes:B({},N.attributes,M.path,{fill:"black"})}]},j={tag:"g",attributes:B({},M.outer),children:[E]},P="mask-".concat(xt()),L="clip-".concat(xt()),_={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:[z]},{tag:"mask",attributes:B({},Ot,{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,j]}]},y.push(_,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(P,")")},Ot)}),{children:y,attributes:w}):function(t){var e=t.children,n=t.attributes,a=t.main,r=t.transform,i=St(t.styles);if(0<i.length&&(n.style=i),zt(r)){var o=Mt({transform:r,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:B({},o.outer),children:[{tag:"g",attributes:B({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:B({},a.icon.attributes,o.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}(D),W=q.children,X=q.attributes;return D.children=W,D.attributes=X,c?(R=(T=D).prefix,H=T.iconName,I=T.children,F=T.attributes,Y=T.symbol,[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B({},F,{id:!0===Y?"".concat(R,"-").concat(V.familyPrefix,"-").concat(H):Y}),children:I}]}]):function(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(zt(o)&&n.found&&!a.found){var c=n.width/n.height/2,s=.5;r.style=St(B({},i,{"transform-origin":"".concat(c+o.x/16,"em ").concat(s+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}(D)}function jt(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,c=t.watchable,s=void 0!==c&&c,l=B({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});s&&(l[U]="");var f,u,d,m,h,p,g,v,b,y=B({},o.styles);zt(r)&&(y.transform=(u=(f={transform:r,startCentered:!0,width:n,height:a}).transform,d=f.width,m=void 0===d?A:d,h=f.height,p=void 0===h?A:h,g=f.startCentered,b="",b+=(v=void 0!==g&&g)&&k?"translate(".concat(u.x/vt-m/2,"em, ").concat(u.y/vt-p/2,"em) "):v?"translate(calc(-50% + ".concat(u.x/vt,"em), calc(-50% + ").concat(u.y/vt,"em)) "):"translate(".concat(u.x/vt,"em, ").concat(u.y/vt,"em) "),b+="scale(".concat(u.size/vt*(u.flipX?-1:1),", ").concat(u.size/vt*(u.flipY?-1:1),") "),b+="rotate(".concat(u.rotate,"deg) ")),y["-webkit-transform"]=y.transform);var w=St(y);0<w.length&&(l.style=w);var x=[];return x.push({tag:"span",attributes:l,children:[e]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}var Pt=function(){},Lt=V.measurePerformance&&f&&f.mark&&f.measure?f:{mark:Pt,measure:Pt},_t='FA "5.8.1"',Tt=function(t){Lt.mark("".concat(_t," ").concat(t," ends")),Lt.measure("".concat(_t," ").concat(t),"".concat(_t," ").concat(t," begins"),"".concat(_t," ").concat(t," ends"))},Rt={begin:function(t){return Lt.mark("".concat(_t," ").concat(t," begins")),function(){return Tt(t)}},end:Tt},Ht=function(t,e,n,a){var r,i,o,c,s,l=Object.keys(t),f=l.length,u=void 0!==a?(c=e,s=a,function(t,e,n,a){return c.call(s,t,e,n,a)}):e;for(o=void 0===n?(r=1,t[l[0]]):(r=0,n);r<f;r++)o=u(o,t[i=l[r]],i,t);return o};var It=q.styles,Ft=q.shims,Yt={},Dt={},qt={},Wt=function(){var t=function(a){return Ht(It,function(t,e,n){return t[n]=Ht(e,a,{}),t},{})};Yt=t(function(t,e,n){return e[3]&&(t[e[3]]=n),t}),Dt=t(function(e,t,n){var a=t[2];return e[n]=n,a.forEach(function(t){e[t]=n}),e});var i="far"in It;qt=Ht(Ft,function(t,e){var n=e[0],a=e[1],r=e[2];return"far"!==a||i||(a="fas"),t[n]={prefix:a,iconName:r},t},{})};function Xt(t,e){return Yt[t][e]}Wt();var Bt=q.styles,Ut=function(){return{prefix:null,iconName:null,rest:[]}};function Vt(t){return t.reduce(function(t,e){var n=Ct(V.familyPrefix,e);if(Bt[e])t.prefix=e;else if(V.autoFetchSvg&&-1<["fas","far","fal","fab","fa"].indexOf(e))t.prefix=e;else if(n){var a="fa"===t.prefix?qt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==V.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},Ut())}function Kt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Gt(t){var n,e=t.tag,a=t.attributes,r=void 0===a?{}:a,i=t.children,o=void 0===i?[]:i;return"string"==typeof t?Nt(t):"<".concat(e," ").concat((n=r,Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Nt(n[e]),'" ')},"").trim()),">").concat(o.map(Gt).join(""),"</").concat(e,">")}var Jt=function(){};function Qt(t){return"string"==typeof(t.getAttribute?t.getAttribute(U):null)}var Zt={replace:function(t){var e=t[0],n=t[1].map(function(t){return Gt(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(V.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~At(e).indexOf(V.replacementClass))return Zt.replace(t);var a=new RegExp("".concat(V.familyPrefix,"-.*"));delete n[0].attributes.style;var r=n[0].attributes.class.split(" ").reduce(function(t,e){return e===V.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map(function(t){return Gt(t)}).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(U,""),e.innerHTML=i}};function $t(t){t()}function te(n,t){var a="function"==typeof t?t:Jt;if(0===n.length)a();else{var e=$t;V.mutateApproach===z&&(e=h.requestAnimationFrame||$t),e(function(){var t=!0===V.autoReplaceSvg?Zt.replace:Zt[V.autoReplaceSvg]||Zt.replace,e=Rt.begin("mutate");n.map(t),e(),a()})}}var ee=!1;function ne(){ee=!1}var ae=null;function re(t){if(l&&V.observeMutations){var r=t.treeCallback,i=t.nodeCallback,o=t.pseudoElementsCallback,e=t.observeMutationsRoot,n=void 0===e?p:e;ae=new l(function(t){ee||kt(t).forEach(function(t){if("childList"===t.type&&0<t.addedNodes.length&&!Qt(t.addedNodes[0])&&(V.searchPseudoElements&&o(t.target),r(t.target)),"attributes"===t.type&&t.target.parentNode&&V.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&Qt(t.target)&&~H.indexOf(t.attributeName))if("class"===t.attributeName){var e=Vt(At(t.target)),n=e.prefix,a=e.iconName;n&&t.target.setAttribute("data-prefix",n),a&&t.target.setAttribute("data-icon",a)}else i(t.target)})}),g&&ae.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ie(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}function oe(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Vt(At(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&1<i.length?o.iconName=(e=o.prefix,n=t.innerText,Dt[e][n]):o.prefix&&1===i.length&&(o.iconName=Xt(o.prefix,ie(t.innerText))),o}var ce=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t},e):e};function se(t){var e,n,a,r,i,o,c,s=oe(t),l=s.iconName,f=s.prefix,u=s.rest,d=(e=t.getAttribute("style"),n=[],e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&0<r.length&&(t[a]=r.join(":").trim()),t},{})),n),m=ce(t.getAttribute("data-fa-transform")),h=null!==(a=t.getAttribute("data-fa-symbol"))&&(""===a||a),p=(i=kt((r=t).attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),o=r.getAttribute("title"),V.autoA11y&&(o?i["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(xt()):(i["aria-hidden"]="true",i.focusable="false")),i),g=(c=t.getAttribute("data-fa-mask"))?Vt(c.split(" ").map(function(t){return t.trim()})):Ut();return{iconName:l,title:t.getAttribute("title"),prefix:f,transform:m,symbol:h,mask:g,extra:{classes:u,styles:d,attributes:p}}}function le(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(le.prototype=Object.create(Error.prototype)).constructor=le;var fe={fill:"currentColor"},ue={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},de={tag:"path",attributes:B({},fe,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},me=B({},ue,{attributeName:"opacity"}),he={tag:"g",children:[de,{tag:"circle",attributes:B({},fe,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:B({},ue,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B({},me,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:B({},fe,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:B({},me,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:B({},fe,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B({},me,{values:"0;0;1;1;0;0;"})}]}]},pe=q.styles;function ge(r,i){return new gt(function(t,e){var n={found:!1,width:512,height:512,icon:he};if(r&&i&&pe[i]&&pe[i][r]){var a=pe[i][r];return t(n={found:!0,width:a[0],height:a[1],icon:{tag:"path",attributes:{fill:"currentColor",d:a.slice(4)[0]}}})}r&&i&&!V.showMissingIcons?e(new le("Icon is missing for prefix ".concat(i," with icon name ").concat(r))):t(n)})}var ve=q.styles;function be(t){var i,e,o,c,s,l,f,n,u,a=se(t);return~a.extra.classes.indexOf(P)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(k){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return V.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),gt.resolve([t,jt({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,a):(i=t,o=(e=a).iconName,c=e.title,s=e.prefix,l=e.transform,f=e.symbol,n=e.mask,u=e.extra,new gt(function(r,t){gt.all([ge(o,s),ge(n.iconName,n.prefix)]).then(function(t){var e=d(t,2),n=e[0],a=e[1];r([i,Et({icons:{main:n,mask:a},prefix:s,iconName:o,transform:l,symbol:f,mask:a,title:c,extra:u,watchable:!0})])})}))}function ye(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(g){var e=p.documentElement.classList,a=function(t){return e.add("".concat(S,"-").concat(t))},r=function(t){return e.remove("".concat(S,"-").concat(t))},i=V.autoFetchSvg?Object.keys(E):Object.keys(ve),o=[".".concat(P,":not([").concat(U,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(U,"])")})).join(", ");if(0!==o.length){var c=kt(t.querySelectorAll(o));if(0<c.length){a("pending"),r("complete");var s=Rt.begin("onTree"),l=c.reduce(function(t,e){try{var n=be(e);n&&t.push(n)}catch(t){O||t instanceof le&&console.error(t)}return t},[]);return new gt(function(e,t){gt.all(l).then(function(t){te(t,function(){a("active"),a("complete"),r("pending"),"function"==typeof n&&n(),s(),e()})}).catch(function(){s(),t()})})}}}}function we(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;be(t).then(function(t){t&&te([t],e)})}function xe(u,d){var m="".concat(x).concat(d.replace(":","-"));return new gt(function(a,t){if(null!==u.getAttribute(m))return a();var e=kt(u.children).filter(function(t){return t.getAttribute(w)===d})[0],n=h.getComputedStyle(u,d),r=n.getPropertyValue("font-family").match(L),i=n.getPropertyValue("font-weight");if(e&&!r)return u.removeChild(e),a();if(r){var o=n.getPropertyValue("content"),c=~["Light","Regular","Solid","Brands"].indexOf(r[1])?j[r[1].toLowerCase()]:_[i],s=Xt(c,ie(3===o.length?o.substr(1,1):o));if(e&&e.getAttribute(C)===c&&e.getAttribute(N)===s)a();else{u.setAttribute(m,s),e&&u.removeChild(e);var l={iconName:null,title:null,prefix:null,transform:bt,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}},f=l.extra;f.attributes[w]=d,ge(s,c).then(function(t){var e=Et(B({},l,{icons:{main:t,mask:Ut()},prefix:c,iconName:s,extra:f,watchable:!0})),n=p.createElement("svg");":before"===d?u.insertBefore(n,u.firstChild):u.appendChild(n),n.outerHTML=e.map(function(t){return Gt(t)}).join("\n"),u.removeAttribute(m),a()}).catch(t)}}else a()})}function ke(t){return gt.all([xe(t,":before"),xe(t,":after")])}function Ae(t){return!(t.parentNode===document.head||~M.indexOf(t.tagName.toUpperCase())||t.getAttribute(w)||t.parentNode&&"svg"===t.parentNode.tagName)}function Ce(r){if(g)return new gt(function(t,e){var n=kt(r.querySelectorAll("*")).filter(Ae).map(ke),a=Rt.begin("searchPseudoElements");ee=!0,gt.all(n).then(function(){a(),ne(),t()}).catch(function(){a(),ne(),e()})})}var Ne="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";function Se(){var t=b,e=y,n=V.familyPrefix,a=V.replacementClass,r=Ne;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,".".concat(a))}return r}function ze(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}function Me(){V.autoAddCss&&!Le&&(yt(Se()),Le=!0)}function Oe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return Gt(t)})}}),Object.defineProperty(e,"node",{get:function(){if(g){var t=p.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ee(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Kt(Pe.definitions,n,a)||Kt(q.styles,n,a)}var je,Pe=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,a;return e=t,(n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(t){e.definitions[t]=B({},e.definitions[t]||{},r[t]),function t(e,a){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,i=Object.keys(a).reduce(function(t,e){var n=a[e];return n.icon?t[n.iconName]=n.icon:t[e]=n,t},{});"function"!=typeof q.hooks.addPack||r?q.styles[e]=B({},q.styles[e]||{},i):q.hooks.addPack(e,i),"fas"===e&&t("fa",a)}(t,r[t]),Wt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,t){var o=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(o).map(function(t){var e=o[t],n=e.prefix,a=e.iconName,r=e.icon;i[n]||(i[n]={}),i[n][a]=r}),i}}])&&i(e.prototype,n),a&&i(e,a),t}()),Le=!1,_e={i2svg:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(g){Me();var e=t.node,n=void 0===e?p:e,a=t.callback,r=void 0===a?function(){}:a;return V.searchPseudoElements&&Ce(n),ye(n,r)}return gt.reject("Operation requires a DOM of some kind.")},css:Se,insertCss:function(){Le||(yt(Se()),Le=!0)},watch:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===V.autoReplaceSvg&&(V.autoReplaceSvg=!0),V.observeMutations=!0,K(function(){He({autoReplaceSvgRoot:e}),re({treeCallback:ye,nodeCallback:we,pseudoElementsCallback:Ce,observeMutationsRoot:n})})}},Te=(je=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?bt:n,r=e.symbol,i=void 0!==r&&r,o=e.mask,c=void 0===o?null:o,s=e.title,l=void 0===s?null:s,f=e.classes,u=void 0===f?[]:f,d=e.attributes,m=void 0===d?{}:d,h=e.styles,p=void 0===h?{}:h;if(t){var g=t.prefix,v=t.iconName,b=t.icon;return Oe(B({type:"icon"},t),function(){return Me(),V.autoA11y&&(l?m["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(xt()):(m["aria-hidden"]="true",m.focusable="false")),Et({icons:{main:ze(b),mask:c?ze(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:B({},bt,a),symbol:i,title:l,extra:{attributes:m,styles:p,classes:u}})})}},function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Ee(t||{}),a=e.mask;return a&&(a=(a||{}).icon?a:Ee(a||{})),je(n,B({},e,{mask:a}))}),Re={noAuto:function(){V.autoReplaceSvg=!1,V.observeMutations=!1,ae&&ae.disconnect()},config:V,dom:_e,library:Pe,parse:{transform:function(t){return ce(t)}},findIconDefinition:Ee,icon:Te,text:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?bt:n,r=e.title,i=void 0===r?null:r,o=e.classes,c=void 0===o?[]:o,s=e.attributes,l=void 0===s?{}:s,f=e.styles,u=void 0===f?{}:f;return Oe({type:"text",content:t},function(){return Me(),jt({content:t,transform:B({},bt,a),title:i,extra:{attributes:l,styles:u,classes:["".concat(V.familyPrefix,"-layers-text")].concat(m(c))}})})},counter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,c=void 0===o?{}:o,s=e.styles,l=void 0===s?{}:s;return Oe({type:"counter",content:t},function(){return Me(),function(t){var e=t.content,n=t.title,a=t.extra,r=B({},a.attributes,n?{title:n}:{},{class:a.classes.join(" ")}),i=St(a.styles);0<i.length&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:t.toString(),title:a,extra:{attributes:c,styles:l,classes:["".concat(V.familyPrefix,"-layers-counter")].concat(m(i))}})})},layer:function(t){return Oe({type:"layer"},function(){Me();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:"".concat(V.familyPrefix,"-layers")},children:e}]})},toHtml:Gt},He=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?p:t;(0<Object.keys(q.styles).length||V.autoFetchSvg)&&g&&V.autoReplaceSvg&&Re.dom.i2svg({node:e})};!function(t){try{t()}catch(t){if(!O)throw t}}(function(){u&&(h.FontAwesome||(h.FontAwesome=Re),K(function(){He(),re({treeCallback:ye,nodeCallback:we,pseudoElementsCallback:Ce})})),q.hooks=B({},q.hooks,{addPack:function(t,e){q.styles[t]=B({},q.styles[t]||{},e),Wt(),He()},addShims:function(t){var e;(e=q.shims).push.apply(e,m(t)),Wt(),He()}})})}();
