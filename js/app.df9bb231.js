(function(e){function t(t){for(var r,o,u=t[0],i=t[1],f=t[2],l=0,s=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({home:"home",layout:"layout"}[e]||e)+"."+{"chunk-059f0fc0":"bbc2daa6",home:"bad7583e",layout:"c1d78e6d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-059f0fc0":1,home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home",layout:"layout"}[e]||e)+"."+{"chunk-059f0fc0":"46850a6c",home:"56e6e6db",layout:"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){f=s[u],l=f.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-ts-h5.github.io/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3a10":function(e,t,n){},7022:function(e,t,n){},7588:function(e,t,n){"use strict";n("7022")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var u=Object(r["I"])("router-view");return Object(r["A"])(),Object(r["f"])(u,null,{default:Object(r["R"])((function(e){var t=e.Component;return[(Object(r["A"])(),Object(r["f"])(Object(r["K"])(t)))]})),_:1})}var a=n("bee2"),c=n("d4ec"),u=n("262e"),i=n("2caf"),f=n("9ab4"),l=n("ce1f"),s=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(a["a"])(n)}(l["b"]);s=Object(f["a"])([Object(l["a"])({components:{}})],s);var d=s,p=(n("7588"),n("d959")),h=n.n(p);const b=h()(d,[["render",o]]);var m=b,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),y=[{path:"/",name:"LAYOUT",redirect:"/home",component:function(){return n.e("layout").then(n.bind(null,"162e"))},children:[{path:"home",name:"HOME",component:function(){return n.e("home").then(n.bind(null,"7abe"))}},{path:"about",name:"ABOUT",component:function(){return n.e("home").then(n.bind(null,"613f"))}}]},{path:"/message",name:"MESSAGE",component:function(){return n.e("chunk-059f0fc0").then(n.bind(null,"1d11"))}}],g=Object(v["a"])({history:Object(v["b"])(),routes:y}),O=g,j=(n("159b"),n("b0c0"),n("d961")),w=(n("5852"),n("ac28")),E=(n("537a"),n("2ed4")),k=(n("a52c"),n("ad06")),A=(n("c3a6"),n("5596")),P=(n("7844"),n("2bb1")),S=(n("4b0a"),n("0b33")),_=(n("da3c"),n("5e46")),T=(n("bda7"),n("b650")),C=(n("66b9"),n("c36e")),x=(n("4467"),n("f0ca")),L=(n("91d5"),n("2bdd")),M=(n("2994"),[j["a"],w["a"],E["a"],k["b"],S["a"],_["a"],T["a"],L["a"]]),N=[A["b"],P["b"],C["a"],x["a"]],B={install:function(e){M.forEach((function(t){e.component(t.name,t)})),N.forEach((function(t){e.use(t)}))}},U=(n("499a"),n("d399")),q=(n("e7e5"),n("3a10"),Object(r["e"])(m));q.config.globalProperties.$toast=U["a"],q.use(O).use(B).use(U["a"]).mount("#app")}});
//# sourceMappingURL=app.df9bb231.js.map