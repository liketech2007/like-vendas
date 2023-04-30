"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{1824:function(e,t,o){o.d(t,{PB:function(){return m}});var r=o(6006),a=o(1005),n=o.n(a);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}var l=["keyOverride"],h=["crossOrigin"],c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,o){void 0===t&&(t=[]);var a=void 0===o?{}:o,n=a.defaultWidth,p=a.defaultHeight;return t.reduce(function(t,o,a){return t.push(r.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:o.url})),o.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:o.height.toString()})):p&&t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:p.toString()})),t},[])},s=function(e){var t,o,a,n,s,u=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,c.templateTitle&&(m=c.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(r.createElement("title",{key:"title"},m));var f=void 0===e.noindex?c.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,g=void 0===e.nofollow?c.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,y="";if(e.robotsProps){var G=e.robotsProps,k=G.nosnippet,v=G.maxSnippet,E=G.maxImagePreview,b=G.maxVideoPreview,w=G.noarchive,_=G.noimageindex,O=G.notranslate,T=G.unavailableAfter;y=(k?",nosnippet":"")+(v?",max-snippet:"+v:"")+(E?",max-image-preview:"+E:"")+(w?",noarchive":"")+(T?",unavailable_after:"+T:"")+(_?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(O?",notranslate":"")}if(f||g?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),u.push(r.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(g?"nofollow":"follow")+y}))):u.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+y})),e.description&&u.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(o=e.openGraph)&&o.description||e.description)&&u.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var x=e.openGraph.type.toLowerCase();u.push(r.createElement("meta",{key:"og:type",property:"og:type",content:x})),"profile"===x&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===x&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===x&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===x||"video.episode"===x||"video.tv_show"===x||"video.other"===x)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,d("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,d("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,d("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,a=e.keyOverride,n=i(e,l);u.push(r.createElement("meta",p({key:"meta:"+(null!=(t=null!=(o=null!=a?a:n.name)?o:n.property)?t:n.httpEquiv)},n)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t,o=e.crossOrigin,a=i(e,h);u.push(r.createElement("link",p({key:"link"+(null!=(t=a.keyOverride)?t:a.href)+a.rel},a,{crossOrigin:"anonymous"===o||"use-credentials"===o||""===o?o:void 0})))}),u},u=function(e){return r.createElement(n(),null,s(e))},m=function(e){var t=e.title,o=e.themeColor,a=e.noindex,n=e.nofollow,p=e.robotsProps,i=e.description,l=e.canonical,h=e.openGraph,c=e.facebook,d=e.twitter,s=e.additionalMetaTags,m=e.titleTemplate,f=e.defaultTitle,g=e.mobileAlternate,y=e.languageAlternates,G=e.additionalLinkTags;return r.createElement(r.Fragment,null,r.createElement(u,{title:t,themeColor:o,noindex:a,nofollow:n,robotsProps:p,description:i,canonical:l,facebook:c,openGraph:h,additionalMetaTags:s,twitter:d,titleTemplate:m,defaultTitle:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:G}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},1005:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return null},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3177:function(e,t,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=o(6006),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,o){var r,n={},h=null,c=null;for(r in void 0!==o&&(h=""+o),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)p.call(t,r)&&!l.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:a,type:e,key:h,ref:c,props:n,_owner:i.current}}t.Fragment=n,t.jsx=h,t.jsxs=h},9268:function(e,t,o){e.exports=o(3177)}}]);