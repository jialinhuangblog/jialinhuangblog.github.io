(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{4697:function(e,n,t){Promise.resolve().then(t.bind(t,1145))},1145:function(e,n,t){"use strict";t.d(n,{default:function(){return R}});var i=t(5008),r=t(1595),o=t(3146),l=t(2265),c=t(6915),s=t(8826),a=t(3253),f=t(5168),u=t(2234),d=t(5708);let p=["#fafafa","#ffea80","#ffab5b","#ff7139"],x=["#222222","#bd93f9","#50fa7b","#ff5555"],h=(0,d.sj)({windows:p.slice().reverse(),selectedTabIndex:1,tabs:["buying\uD83D\uDC99\uD83D\uDC99","WHY","faceprivacy","working"],selectTabName:"WHY",contextMenu:{visible:!1,x:0,y:0,index:-1},isDarkMode:!1}),v=()=>{let e=(0,u.R)(h),n=(0,l.useCallback)(()=>{{let e=window.matchMedia("(prefers-color-scheme: dark)");h.isDarkMode=e.matches,h.windows=(h.isDarkMode?x:p).slice().reverse();let n=e=>{h.isDarkMode=e.matches,h.windows=(e.matches?x:p).slice().reverse()};return e.addEventListener("change",n),()=>e.removeEventListener("change",n)}},[]);return{...e,toggleTheme:()=>{console.log("toggle"),h.isDarkMode=!h.isDarkMode,h.windows=(h.isDarkMode?x:p).slice().reverse()},initializeTheme:n}},w={removeWindow:e=>{h.windows.splice(e,1)}};var m=t(2744);function g(){let e=(0,i._)(["\n          :root {\n            --foreground: #ffffff;\n          }\n        "]);return g=function(){return e},e}function b(){let e=(0,i._)(["\n              width: 100%;\n              left: ","px;\n              top: ","px;\n            "]);return b=function(){return e},e}function y(){let e=(0,i._)(["\n          width: 560px;\n          position: ",";\n          border: 2px solid ",";\n          background-color: ",";\n          border-radius: 8px;\n          left: ","px;\n          top: ","px;\n          ","\n        "]);return y=function(){return e},e}function C(){let e=(0,i._)(["\n                    display: ",";\n                  "]);return C=function(){return e},e}function k(){let e=(0,i._)(["\n                    background-color: ",";\n                    box-shadow: ",";\n                  "]);return k=function(){return e},e}function Z(){let e=(0,i._)(["\n                  ",";\n                  ","\n\n                  user-select: none;\n                  background-color: ",";\n                  box-shadow: ",";\n                  ","\n                "]);return Z=function(){return e},e}function _(){let e=(0,i._)(["\n            display: flow-root;\n            height: 320px;\n            overflow: auto;\n            line-height: 1.6;\n            font-size: 18px;\n          "]);return _=function(){return e},e}function D(){let e=(0,i._)(["\n                padding: 24px 32px;\n              "]);return D=function(){return e},e}function j(){let e=(0,i._)(["\n                  margin: 24px 0;\n                "]);return j=function(){return e},e}function z(){let e=(0,i._)(["\n                    ",";\n                    height: 100%;\n                    overflow: hidden;\n                  "]);return z=function(){return e},e}function B(){let e=(0,i._)(["\n                      svg:first-of-type {\n                        position: absolute;\n                        width: 120px;\n                        height: 120px;\n                        z-index: 1;\n                        left: 30px;\n                        fill: var(--foreground);\n\n                        top: 30px;\n                      }\n                      svg:last-of-type {\n                        color: ",";\n                        width: 180px;\n                        height: 180px;\n                      }\n                    "]);return B=function(){return e},e}function M(){let e=(0,i._)(["\n                        ",";\n                        z-index: 6;\n                        left: ","%;\n                      "]);return M=function(){return e},e}function S(){let e=(0,i._)(["\n            position: fixed;\n            background-color: var(--background);\n            border: 2px solid var(--foreground);\n            border-radius: 4px;\n            padding: 5px 10px;\n            cursor: pointer;\n            opacity: 0.7;\n            &:hover {\n              opacity: 1;\n            }\n          "]);return S=function(){return e},e}function E(){let e=(0,i._)(["\n    font-size: 12px;\n  "]);return E=function(){return e},e}let I=(0,l.memo)(function(e){let{color:n,theIndex:t}=e,{contextMenu:i,windows:d,tabs:p,selectedTabIndex:x,selectTabName:v}=(0,u.R)(h),E=(0,l.useRef)(null),I=t===d.length-1,Y=(e,n,t)=>{var i,r;if(!I)return;let o=null!==(r=null==e?void 0:null===(i=e.getAttribute("style"))||void 0===i?void 0:i.split(";transform")[0])&&void 0!==r?r:"",l="transform: translate3d(".concat(15*n,"px, ").concat(15*t,"px, 0) scale(2);");null==e||e.setAttribute("style",o+";z-index: 5; cursor: pointer; ".concat(l," transition: all ease-out 1200ms;"))},N=e=>{var n,t;if(!I)return;let i=null!==(t=null==e?void 0:null===(n=e.getAttribute("style"))||void 0===n?void 0:n.split(";z-index")[0])&&void 0!==t?t:"";null==e||e.setAttribute("style",i+";transform:none; transition: all ease-out 200ms;")};return(0,l.useEffect)(()=>{h.selectTabName=p[x]},[x,p.length]),(0,r.BX)(r.HY,{children:[(0,r.tZ)(o.xB,{styles:(0,o.iv)(g())}),(0,r.BX)("div",{css:(0,o.iv)(y(),I?"relative":"absolute",I?"var(--foreground)":"#222222",n,(d.length-1-t)*15,(d.length-1-t)*15,s.BC.mobile((0,o.iv)(b(),(d.length-1-t)*10,(d.length-1-t)*10))),children:[(0,r.BX)("div",{css:X,children:[[,,,].fill(0).map((e,n)=>(0,r.tZ)("div",{onClick:()=>{0===n&&(console.log("close",t),w.removeWindow(t))},css:A,children:0===n?"x":1===n?"-":(0,r.tZ)(m.tby,{})},n)),(0,r.tZ)("div",{style:{margin:"0 8px"}}),I&&p.map((e,n)=>(0,r.tZ)("div",{onClick:()=>{h.selectedTabIndex=n},onContextMenu:e=>{1!==p.length&&(e.preventDefault(),h.contextMenu={visible:!0,x:e.clientX,y:e.clientY+20,index:n})},css:(0,o.iv)(Z(),T,s.BC.mobile((0,o.iv)(C(),n<2?"none":"inherit")),x===n?"#ddd":"transparent",x===n?"0 4px 6px 0px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)":"none",(0,s.GA)((0,o.iv)(k(),x===n?"#333":"transparent",x===n?"0 4px 6px 0px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)":"none"))),children:e},e))]}),(0,r.tZ)("div",{css:(0,o.iv)(_()),children:!I||v.includes("face")||v.includes("buy")?(0,r.tZ)(r.HY,{children:I&&(0,r.BX)("div",{css:(0,o.iv)(z(),c.f.h.allCenter),children:[(0,r.BX)("div",{onMouseLeave:e=>{N(E.current)},onMouseMove:e=>{Y(E.current,e.movementX,e.movementY)},ref:E,css:(0,o.iv)(B(),v.includes("buy")?"#f7bac5":"#ff7139"),children:[(0,r.tZ)(a.mkc,{}),v.includes("buy")?(0,r.tZ)(f.Bcr,{}):(0,r.tZ)(f.v3O,{})]}),Array(10).fill(0).map((e,n)=>(0,r.tZ)("div",{css:(0,o.iv)(M(),U,(n+1)*10)},e))]})}):(0,r.BX)("div",{css:(0,o.iv)(D()),children:[(0,r.tZ)("p",{children:"Every time I see Firefox's 'What's New' update, I can't help but pause and take a look. The design is just so beautiful! It's not just a cold, dry list of what's been updated."}),(0,r.BX)("p",{css:(0,o.iv)(j()),children:[(0,r.tZ)("b",{children:"I just adore you, Firefox! \uD83D\uDC96✨"})," That's why I want to create this CSS - to capture a bit of that Firefox magic! \uD83E\uDD8A\uD83D\uDD25"]}),(0,r.tZ)("p",{children:(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/125.0/whatsnew/",children:"https://www.mozilla.org/en-US/firefox/125.0/whatsnew/"})}),(0,r.tZ)("p",{children:(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/126.0/whatsnew/",children:"https://www.mozilla.org/en-US/firefox/126.0/whatsnew/"})}),(0,r.tZ)("p",{children:(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/128.0/whatsnew/",children:"https://www.mozilla.org/en-US/firefox/128.0/whatsnew/"})}),(0,r.tZ)("p",{children:(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/130.0/whatsnew/",children:"https://www.mozilla.org/en-US/firefox/130.0/whatsnew/"})}),(0,r.tZ)("p",{children:(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/131.0/whatsnew/",children:"https://www.mozilla.org/en-US/firefox/131.0/whatsnew/"})})]})})]},n),i.visible&&(0,r.tZ)("div",{"data-context-menu":!0,css:(0,o.iv)(S()),style:{left:i.x,top:i.y},onClick:()=>{null!==i.index&&(i.index===x&&(h.selectedTabIndex=0),h.tabs=p.filter((e,n)=>n!==i.index)),h.contextMenu={visible:!1,x:0,y:0,index:-1}},children:"remove tab"})]})}),U=(0,o.iv)("position:absolute;height:100%;width:2px;border:2px solid var(--foreground);top:0;"),X=(0,o.iv)(c.f.h.crossCenter,";border-bottom:2px solid var(--foreground);padding-left:12px;height:48px;"),A=(0,o.iv)(c.f.h.allCenter,";color:transparent;user-select:none;font-size:7px;min-width:12px;height:12px;margin:12px 2px;border:2px solid var(--foreground);border-radius:50%;&:hover{cursor:pointer;color:var(--background);background:var(--foreground);transition:background-color 200ms;}"),T=(0,o.iv)("cursor:pointer;",c.f.h.crossCenter,";border-left:2px solid var(--foreground);margin:-1 0;padding:0 12px;height:100%;",s.BC.mobile((0,o.iv)(E())),"  &:last-of-type{border-right:2px solid var(--foreground);}");function Y(){let e=(0,i._)(["\n        ","\n        height: 100vh;\n      "]);return Y=function(){return e},e}function N(){let e=(0,i._)(["\n          ",";\n        "]);return N=function(){return e},e}function W(){let e=(0,i._)(["\n            margin: 0 16px 16px;\n          "]);return W=function(){return e},e}function F(){let e=(0,i._)(["\n                min-height: 420px;\n                width: 100%;\n                overflow-x: hidden;\n              "]);return F=function(){return e},e}function H(){let e=(0,i._)(["\n            width: 560px;\n            height: fit-content;\n            position: relative;\n            ","\n          "]);return H=function(){return e},e}function L(){let e=(0,i._)(["\n              margin-top: 24px;\n            "]);return L=function(){return e},e}function O(){let e=(0,i._)(["\n            margin-top: 80px;\n            ","\n          "]);return O=function(){return e},e}var R=(0,l.memo)(function(){let{windows:e,initializeTheme:n}=v();return(0,l.useEffect)(()=>n(),[n]),(0,r.tZ)("div",{onClick:e=>{e.target.closest("[data-context-menu]")||(h.contextMenu={visible:!1,x:0,y:0,index:-1})},css:(0,o.iv)(Y(),c.f.v.allCenter),children:(0,r.BX)("div",{css:(0,o.iv)(N(),c.f.v.allCenter),children:[(0,r.tZ)("h1",{css:(0,o.iv)(W()),children:"I Adore You, Firefox!"}),(0,r.tZ)("div",{css:(0,o.iv)(H(),s.BC.mobile((0,o.iv)(F()))),children:e.map((e,n)=>(0,r.tZ)(I,{color:e,theIndex:n},e))}),(0,r.BX)("h3",{css:(0,o.iv)(O(),s.BC.mobile((0,o.iv)(L()))),children:["Inspired by"," ",(0,r.tZ)("a",{href:"https://www.mozilla.org/en-US/firefox/131.0/whatsnew/",children:"Firefox v131"})]})]})})})},8826:function(e,n,t){"use strict";t.d(n,{BC:function(){return r},GA:function(){return o}});var i=t(3146);let r={mobile:e=>(0,i.iv)("@media (max-width:",600,"px){",e,"}"),tablet:e=>(0,i.iv)("@media (max-width:",900,"px){",e,"}"),desktop:e=>(0,i.iv)("@media (max-width:",1024,"px){",e,"}")},o=e=>(0,i.iv)("@media (prefers-color-scheme:dark){",e,"}")},6915:function(e,n,t){"use strict";t.d(n,{f:function(){return M},jc:function(){return f}});var i=t(3146);let r=(0,i.iv)("justify-content:space-between;"),o=(0,i.iv)("justify-content:space-around;"),l=(0,i.iv)("justify-content:space-evenly;"),c=(0,i.iv)("justify-content:flex-start;"),s=(0,i.iv)("justify-content:flex-end;"),a=(0,i.iv)("justify-content:stretch;"),f={spaceBetween:r,spaceAround:o,spaceEvenly:l,flexStart:c,flexEnd:s,center:(0,i.iv)("justify-content:center;"),stretch:a},u=(0,i.iv)("display:flex;flex-direction:row;"),d=(0,i.iv)("display:flex;flex-direction:column;"),p=(0,i.iv)("display:inline-flex;"),x=(0,i.iv)("display:inline-flex;flex-direction:row;align-items:center;justify-content:center;"),h=(0,i.iv)("display:inline-flex;flex-direction:row;justify-content:center;"),v=(0,i.iv)("display:inline-flex;flex-direction:row;align-items:center;"),w=(0,i.iv)("display:flex;flex-direction:row;align-items:center;justify-content:center;"),m=(0,i.iv)("display:flex;flex-direction:row;justify-content:center;"),g=(0,i.iv)("display:flex;flex-direction:row;align-items:center;"),b=(0,i.iv)("display:flex;flex-direction:column;align-items:center;justify-content:center;"),y=(0,i.iv)("display:flex;flex-direction:column;align-items:center;"),C=(0,i.iv)("display:flex;flex-direction:column;justify-content:center;"),k=(0,i.iv)("display:flex;flex-direction:row;flex-wrap:wrap;"),Z=(0,i.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;"),_=(0,i.iv)("display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"),D=(0,i.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;"),j=(0,i.iv)("display:flex;flex-wrap:wrap;flex-direction:column;"),z=(0,i.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;"),B=(0,i.iv)("display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"),M={h:{default:u,allCenter:w,mainCenter:m,crossCenter:g},v:{default:d,allCenter:b,mainCenter:C,crossCenter:y},inline:{default:p,allCenter:x,mainCenter:h,crossCenter:v},wrap:{default:k,allCenter:Z,mainCenter:D,crossCenter:_},verticalWrap:{default:j,allCenter:z,mainCenter:(0,i.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;"),crossCenter:B}}}},function(e){e.O(0,[950,614,51,394,708,971,117,744],function(){return e(e.s=4697)}),_N_E=e.O()}]);