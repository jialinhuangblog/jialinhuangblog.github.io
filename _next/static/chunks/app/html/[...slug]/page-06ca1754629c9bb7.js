(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{2868:function(){},6349:function(){},9830:function(){},209:function(){},259:function(n,t,e){Promise.resolve().then(e.bind(e,8188)),Promise.resolve().then(e.bind(e,7395)),Promise.resolve().then(e.bind(e,4237)),Promise.resolve().then(e.bind(e,9780)),Promise.resolve().then(e.bind(e,7577))},8188:function(n,t,e){"use strict";e.d(t,{HtmlDoc:function(){return S}});var r=e(5008),i=e(1595),o=e(3146),u=e(2265),l=e(9298);function c(){let n=(0,r._)(["\n        position: fixed;\n        bottom: 24px;\n        right: 24px;\n        border-radius: 2px;\n        border: 0.5px solid var(--foreground);\n        padding: 8px 12px;\n        color: var(--foreground);\n        background-color: var(--background);\n        display: ",";\n      "]);return c=function(){return n},n}let a=(0,u.memo)(function(){let[n,t]=(0,u.useState)(!1),e=(0,l.Z)();return(0,u.useEffect)(()=>{t(e>20)},[e]),(0,i.tZ)("button",{css:(0,o.iv)(c(),n?"inherit":"none"),onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"TOP"})});var s=e(5206),d=e(498),f=e.n(d);e(3247);var p=e(2768),v=e(7648),h=e(6915),m=e(1273);function g(){let n=(0,r._)(["\n        ",";\n        gap: 16px;\n        margin-top: 120px;\n      "]);return g=function(){return n},n}function x(){let n=(0,r._)(["\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            border: 1px solid var(--foreground);\n            opacity: 0;\n            animation: "," 0.2s ease-in-out;\n            opacity: ",";\n          "]);return x=function(){return n},n}let b=(0,o.F4)("from{opacity:0;}to{opacity:0.8;}"),w=(0,u.memo)(function(){let[n,t]=(0,u.useState)(0);return(0,u.useEffect)(()=>{let n=setInterval(()=>{t(n=>(n+1)%4)},200);return()=>clearInterval(n)},[]),(0,i.tZ)("div",{css:(0,o.iv)(g(),h.f.h.crossCenter),children:[void 0,void 0,void 0].map((t,e)=>(0,i.tZ)("div",{css:(0,o.iv)(x(),b,e<n?1:0)},e))})});var _=e(8826);function k(){let n=(0,r._)(["\n          max-width: 100vw;\n          margin: 24px 20px;\n        "]);return k=function(){return n},n}function Z(){let n=(0,r._)(["\n        max-width: 640px;\n        margin: 60px auto;\n        ","\n      "]);return Z=function(){return n},n}function y(){let n=(0,r._)(["\n            margin-left: auto;\n            ","\n            &:hover {\n              color: #f77e00;\n            }\n          "]);return y=function(){return n},n}function C(){let n=(0,r._)(["\n              article {\n                ",";\n              }\n              table {\n                display: block;\n                overflow: auto;\n                border: none;\n              }\n              td {\n                padding: 8px;\n              }\n              h1 {\n                margin-top: 120px;\n                margin-bottom: 0.5em;\n              }\n              h1.page-title {\n                margin-top: 60px;\n                margin-bottom: 0.5em;\n                word-wrap: break-word;\n              }\n              h2 {\n                margin-top: 60px;\n                margin-bottom: 0.5em;\n              }\n              h3 {\n                margin-top: 48px;\n                margin-bottom: 16px;\n              }\n\n              p,\n              ul,\n              ol {\n                border-radius: 4px;\n                user-select: all;\n                font-size: 16px;\n                line-height: 1.6;\n              }\n              ul:hover,\n              ol:hover,\n              p:hover {\n                background: #ffcb0511;\n              }\n              blockquote {\n                font-size: 16px;\n                line-height: 1.4;\n              }\n              *::selection {\n                background: #ffcb0544;\n              }\n              & pre {\n                /** can't be pre, production mode doesn't owrk */\n                overflow-x: auto;\n                background-color: transparent;\n                border: 1px solid var(--foreground);\n              }\n              & .bookmark-info {\n                // dev mode is fine, but production will overflow.\n                overflow-x: auto;\n              }\n              & .bookmark-description {\n                max-height: unset;\n              }\n\n              & code[class*='language-'],\n              & pre[class*='language-'] {\n                color: var(--foreground) !important;\n              }\n              pre {\n                margin-top: 16px;\n              }\n              & code {\n                word-break: break-all;\n              }\n\n              & .column-list {\n                justify-content: flex-start;\n              }\n              & .column {\n                padding: 0;\n                width: auto !important;\n              }\n              & a {\n                word-wrap: break-word;\n              }\n              & br {\n                display: none;\n              }\n            "]);return C=function(){return n},n}function B(){let n=(0,r._)(["\n                text-align: left;\n              "]);return B=function(){return n},n}function E(){let n=(0,r._)(["\n              text-align: right;\n              opacity: 0.5;\n              margin: 120px 0 0;\n              ","\n            "]);return E=function(){return n},n}let S=(0,u.memo)(function(n){let{page:t}=n,[e,r]=(0,u.useState)(""),[l,c]=(0,u.useState)(""),d=(0,u.useCallback)(async()=>{var n;let e=await (await fetch("/".concat(t,".html"))).text(),i=f()(e,{allowedTags:!1,allowedAttributes:!1,exclusiveFilter:function(n){var t,e;let r="meta"===n.tag,i="title"===n.tag,o=null===(t=n.attribs.class)||void 0===t?void 0:t.includes("page-header-icon"),u="span"===n.tag&&"user"===n.attribs.class,l="properties"===n.attribs.class,c=null===(e=n.attribs.class)||void 0===e?void 0:e.includes("table_of_contents-item"),a="bookmark-href"===n.attribs.class,s="page-description"===n.attribs.class;return o||s||l||u||r||i||a||c}}),o=new DOMParser().parseFromString(e,"text/html").querySelector("title");o?c((null!==(n=null==o?void 0:o.textContent)&&void 0!==n?n:"")+" | jialinhuang"):c("?? | jialinhuang"),r(i)},[t]);return(0,u.useEffect)(()=>{0===e.length&&d()},[d,e.length]),(0,u.useEffect)(()=>{document.title=l},[l]),(0,i.BX)("div",{css:(0,o.iv)(Z(),_.BC.mobile((0,o.iv)(k()))),children:[(0,i.BX)("div",{css:h.f.h.crossCenter,children:[(0,i.BX)(v.default,{href:"/",css:X,children:[(0,i.tZ)(p.gYP,{})," exit()"]}),(0,i.BX)(v.default,{css:(0,o.iv)(y(),X),href:"/rss.xml",children:[(0,i.tZ)(m.ZaI,{})," RSS"]})]}),e.length>0?(0,i.BX)(i.HY,{children:[(0,i.tZ)("div",{css:(0,o.iv)(C(),s.g5.merriweather.style),dangerouslySetInnerHTML:{__html:e}}),(0,i.tZ)("p",{css:(0,o.iv)(E(),_.BC.mobile((0,o.iv)(B()))),children:"EOF"})]}):(0,i.tZ)(w,{}),(0,i.tZ)(a,{})]})}),X=(0,o.iv)("svg{width:24px;height:24px;}",h.f.h.crossCenter,";gap:8px;text-decoration:none;")},9780:function(n,t,e){"use strict";e.d(t,{default:function(){return k}});var r=e(5008),i=e(1595),o=e(2265),u=e(3146),l=e(6915),c=e(7648),a=e(5168),s=e(3253),d=e(7780),f=e(8826);function p(){let n=(0,r._)(["\n          grid-template-columns: 24px 1fr;\n        "]);return p=function(){return n},n}function v(){let n=(0,r._)(["\n        display: grid;\n        grid-template-columns: 32px 1fr;\n        ","\n      "]);return v=function(){return n},n}function h(){let n=(0,r._)(["\n              width: 20px;\n              height: 20px;\n            "]);return h=function(){return n},n}function m(){let n=(0,r._)(["\n          svg {\n            width: 24px;\n            height: 24px;\n            ","\n          }\n        "]);return m=function(){return n},n}function g(){let n=(0,r._)(["\n            font-size: 14px;\n            margin-bottom: 8px;\n          "]);return g=function(){return n},n}function x(){let n=(0,r._)(["\n          font-size: 16px;\n          text-decoration: underline;\n          margin-bottom: 8px;\n          ","\n        "]);return x=function(){return n},n}let b=(0,o.memo)(function(n){let{link:t}=n;return(0,i.BX)("div",{css:(0,u.iv)(v(),f.BC.mobile((0,u.iv)(p()))),children:[(0,i.BX)("div",{css:(0,u.iv)(m(),f.BC.mobile((0,u.iv)(h()))),children:[t.title.includes("Diff")?(0,i.tZ)(d.Von,{}):t.title.includes("Glossary")?(0,i.tZ)(a.CkY,{}):(0,i.tZ)(s.rCJ,{})," "]}),(0,i.tZ)(c.default,{css:(0,u.iv)(x(),f.BC.mobile((0,u.iv)(g()))),href:t.link,children:t.title})]},t.link)});var w=e(3451);function _(){let n=(0,r._)(["\n            ",";\n            pointer-events: initial;\n          "]);return _=function(){return n},n}var k=(0,o.memo)(function(n){let{links:t,title:e}=n;(0,o.useEffect)(()=>{document.title=e+" | jialinhuang"},[e]);let r=e.split(" ");return(0,i.tZ)("div",{children:(0,i.tZ)(w.default,{speed:50,command:"tar ".concat(1===r.length?"all":r[0],".tar -xvf"),children:(0,i.tZ)("div",{css:(0,u.iv)(_(),l.f.v.default),children:t.map(n=>(0,i.tZ)(b,{link:n},n.title))})})})})},7577:function(n,t,e){"use strict";e.d(t,{default:function(){return C}});var r=e(5008),i=e(1595),o=e(2265),u=e(3146),l=e(6915),c=e(7648),a=e(1096),s=e.n(a),d=e(8826);function f(){let n=(0,r._)(["\n          background-color: ",";\n          margin: 0 -20px;\n          padding: 12px 16px;\n        "]);return f=function(){return n},n}function p(){let n=(0,r._)(["\n            background-color: ",";\n          "]);return p=function(){return n},n}function v(){let n=(0,r._)(["\n          border-bottom: #444444 solid 0.5px;\n          ","\n        "]);return v=function(){return n},n}function h(){let n=(0,r._)(["\n        padding: 24px 0;\n        ","\n        border-bottom: rgba(0,0,0,0.2) solid 0.5px;\n        ","\n        ","\n\n        &:first-of-type {\n          padding-top: 0;\n        }\n      "]);return h=function(){return n},n}function m(){let n=(0,r._)(["\n            font-size: 24px;\n          "]);return m=function(){return n},n}function g(){let n=(0,r._)(["\n          font-size: 24px;\n          font-weight: 700;\n          text-decoration: none;\n          word-wrap: anywhere;\n          ","\n        "]);return g=function(){return n},n}function x(){let n=(0,r._)(["\n          text-decoration: none;\n          opacity: 0.8;\n          font-size: 14px;\n          line-height: 2;\n          letter-spacing: -0.5px;\n          margin: 16px 0 8px;\n          &:hover {\n            color: var(--foreground);\n          }\n        "]);return x=function(){return n},n}function b(){let n=(0,r._)(["\n          ",";\n          font-size: 12px;\n          gap: 4px;\n          &:hover > * {\n            display: inherit;\n            opacity: 1;\n          }\n        "]);return b=function(){return n},n}function w(){let n=(0,r._)(["\n            opacity: 0.5;\n            min-width: fit-content;\n          "]);return w=function(){return n},n}function _(){let n=(0,r._)(["\n              color: var(--hover);\n              display: ",";\n            "]);return _=function(){return n},n}let k=(0,o.memo)(function(n){var t,e;let{link:r,index:o}=n;return(0,i.BX)("div",{css:(0,u.iv)(h(),l.f.v.default,d.BC.mobile((0,u.iv)(f(),o%2!=0?"#f5f5f5":"var(--background)")),(0,d.GA)((0,u.iv)(v(),d.BC.mobile((0,u.iv)(p(),o%2!=0?"#232323":"var(--background)"))))),children:[(0,i.tZ)(c.default,{css:(0,u.iv)(g(),d.BC.mobile((0,u.iv)(m()))),href:r.link,children:r.title}),(0,i.tZ)(c.default,{href:r.link,css:(0,u.iv)(x()),children:r.description}),(0,i.BX)("div",{css:(0,u.iv)(b(),l.f.wrap.crossCenter),children:[(0,i.BX)("div",{css:(0,u.iv)(w()),children:[s()(r.date).format("YYYY"),(null===(t=r.tags)||void 0===t?void 0:t.length)?" |":""]}),null===(e=r.tags)||void 0===e?void 0:e.map((n,t)=>(0,i.tZ)("div",{css:(0,u.iv)(_(),0===t?"inherit":"none"),children:n},n))]})]},r.link)});function Z(){let n=(0,r._)(["\n          border-radius: 4px;\n          scrollbar-width: none; /* Firefox */\n        "]);return Z=function(){return n},n}function y(){let n=(0,r._)(["\n            ",";\n          "]);return y=function(){return n},n}var C=(0,o.memo)(function(n){let{links:t,title:e}=n;return(0,o.useEffect)(()=>{document.title=e+" | jialinhuang"},[e]),(0,i.tZ)("div",{css:(0,u.iv)(Z()),children:(0,i.tZ)("div",{css:(0,u.iv)(y(),l.f.v.default),children:t.map((n,t)=>(0,i.tZ)(k,{index:t,link:n},n.title))})})})},9298:function(n,t,e){"use strict";var r=e(2265);t.Z=()=>{let[n,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let n=()=>{let n=window.scrollY,e=window.innerHeight;t(n/(document.documentElement.scrollHeight-e)*100)};return window.addEventListener("scroll",n),n(),()=>{window.removeEventListener("scroll",n)}},[]),n}},3247:function(){}},function(n){n.O(0,[267,525,957,240,706,699,950,614,516,394,648,554,609,886,862,971,117,744],function(){return n(n.s=259)}),_N_E=n.O()}]);