(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{9704:function(e,n,t){Promise.resolve().then(t.bind(t,5628))},4792:function(e,n,t){"use strict";t.r(n),n.default={src:"/_next/static/media/logoDoSite.7a386358.png",height:250,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAM0lEQVR42mN49ebf9dv/Pnz69+UrCH38/O/zl39fv/1j+PDx35Nn/77/AHIgJAh9+/4PAHc9LgrIltwxAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5628:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(9268),o=t(7060),i=t(4952);function s(){return(0,r.jsxs)("header",{className:"w-full p-3 flex items-center justify-between md:w-[80%] md:py-4",children:[(0,r.jsx)(o.T,{}),(0,r.jsx)("div",{className:"flex flex-col items-end gap-3",children:(0,r.jsx)(i.i,{text:"Sobre n\xf3s",url:"/sobre-nos"})})]})}var l=t(7214);async function a(e){let n=new Date;n.setDate(n.getDate()+30);let t=JSON.stringify({query:'            \n            mutation MyMutation {\n                updateLoja(data: {dataDeIncerramentoDoServico:"'.concat(n,'"}, where: {id:"').concat(e,'"}){\n                    id\n                    emailDaLoja\n                  }\n            }\n        ')}),r=await fetch("".concat("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"),{method:"POST",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE")},body:t});await r.json()}var c=t(6524),d=t(6006);function u(e){let[n,t]=(0,d.useState)(!1);async function o(e){t(!0),await a(e),t(!1)}return(0,r.jsxs)("main",{className:"mt-12 flex flex-col p-6 md:w-[80%] md:py-4",children:[(0,r.jsxs)("div",{className:"mb-12 self-end",children:["Total de lojas: ",e.data.length+1]}),(0,r.jsx)("ul",{children:e&&e.data.map(e=>(0,r.jsxs)("li",{className:"min-w=full flex justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("p",{className:"py-3",children:e.nomeDaLoja}),(0,r.jsx)("p",{className:"py-3",children:e.emailDaLoja})]}),(0,r.jsxs)("div",{className:"flex items-center py-6",children:[(0,r.jsx)("button",{className:"py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all",onClick:()=>{o(e.id)},children:"Actualizar o servi\xe7o"}),n&&(0,r.jsx)(c.Z,{size:32,className:"animate-spin"})]})]},e.id))})]})}async function k(){let e=JSON.stringify({query:"\n            query MyQuery {\n                lojas(first: 2000) {\n                    id\n                    emailDaLoja\n                    nomeDaLoja\n              }\n            }\n          "}),n=await fetch("".concat("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"),{method:"POST",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE")},body:e}),t=await n.json();return t.data.lojas}function m(){let[e,n]=(0,d.useState)();return((0,d.useEffect)(()=>{k().then(e=>{n(e)})},[]),void 0===e)?(0,r.jsx)(l.q,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(u,{data:e})]})}},4952:function(e,n,t){"use strict";t.d(n,{i:function(){return s}});var r=t(9268),o=t(5846),i=t.n(o);function s(e){let{text:n,url:t,sizeText:o}=e;return(0,r.jsx)(i(),{href:t,className:"py-2 px-6 border border-t-0 border-l-0 border-r-0 border-b-1 rounded-lg boder-blue-500 hover:bg-blue-500 hover:text-white transition-all "+o,children:n})}},7214:function(e,n,t){"use strict";t.d(n,{q:function(){return i}});var r=t(9268),o=t(6524);function i(){return(0,r.jsxs)("div",{className:"min-h-[90vh] min-w-full flex items-center justify-center gap-2",children:[(0,r.jsx)(o.Z,{size:32,className:"animate-spin"}),(0,r.jsx)("div",{children:"Carregando..."})]})}},7060:function(e,n,t){"use strict";t.d(n,{T:function(){return i}});var r=t(9268),o=t(4792);function i(){return(0,r.jsx)("img",{src:o.default.src,width:"150px",height:"50px"})}},3177:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(6006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},9268:function(e,n,t){"use strict";e.exports=t(3177)},5846:function(e,n,t){e.exports=t(3920)},6524:function(e,n,t){"use strict";var r=t(6006),o=t(938),i=t(4624),s=new Map;s.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),s.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),s.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.3,58.7a7.8,7.8,0,0,0,5.6-2.3l22.6-22.6a8,8,0,1,0-11.3-11.3L167.6,77.1a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,173.3,90.7ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))}),s.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),s.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),s.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l=function(e,n){return(0,o._)(e,n,s)},a=(0,r.forwardRef)(function(e,n){return r.createElement(i.Z,Object.assign({ref:n},e,{renderPath:l}))});a.displayName="Spinner",n.Z=a},4624:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(6006),o=t(938);function i(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var s=(0,r.forwardRef)(function(e,n){var t=e.alt,s=e.color,l=e.size,a=e.weight,c=e.mirrored,d=e.children,u=e.renderPath,k=i(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=(0,r.useContext)(o.P),h=m.color,f=void 0===h?"currentColor":h,x=m.size,y=m.weight,L=m.mirrored,j=i(m,["color","size","weight","mirrored"]);return r.createElement("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:null!=l?l:x,height:null!=l?l:x,fill:null!=s?s:f,viewBox:"0 0 256 256",transform:c||void 0!==L&&L?"scale(-1, 1)":void 0},j,k),!!t&&r.createElement("title",null,t),d,r.createElement("rect",{width:"256",height:"256",fill:"none"}),u(null!=a?a:void 0===y?"regular":y,null!=s?s:f))});s.displayName="IconBase";var l=s},938:function(e,n,t){"use strict";t.d(n,{P:function(){return r},_:function(){return o}});var r=(0,t(6006).createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),o=function(e,n,t){var r=t.get(e);return r?r(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)}}},function(e){e.O(0,[920,455,744],function(){return e(e.s=9704)}),_N_E=e.O()}]);