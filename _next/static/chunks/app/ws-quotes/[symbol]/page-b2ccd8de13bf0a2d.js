(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{2614:function(e,t,n){Promise.resolve().then(n.bind(n,521))},521:function(e,t,n){"use strict";n.d(t,{WebsocketChart:function(){return h}});var r=n(5008),o=n(1595),i=n(2265),l=n(391),c=n(3146),a=n(8989),s=n(5206);function u(){let e=(0,r._)(["\n        height: 100vh;\n        margin: auto;\n      "]);return u=function(){return e},e}function d(){let e=(0,r._)(["\n          top: 20px;\n          left: 20px;\n          position: absolute;\n          z-index: 2;\n          font-size: 4rem;\n        "]);return d=function(){return e},e}let h=(0,i.memo)(function(e){let{symbol:t}=e,n=(0,i.useRef)(null),r=(0,i.useRef)(null),h=(0,i.useRef)(null),f=(0,i.useRef)(null),[m,k]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{{let e=window.matchMedia("(prefers-color-scheme: dark)");k(e.matches);let t=e=>{window.location.reload()};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}},[]),(0,i.useEffect)(()=>(console.log("initializeChartData"),(async()=>{try{let e=await fetch("https://api.binance.com/api/v3/klines?symbol=".concat(t,"&interval=1s&limit=1000")),n=await e.json();if(r.current){let e=n.map(e=>({time:Math.floor(e[0]/1e3),open:Number(e[1]),high:Number(e[2]),low:Number(e[3]),close:Number(e[4])}));r.current.setData(e)}f.current=new WebSocket("wss://stream.binance.com:9443/ws"),f.current.onopen=()=>{var e;let n=(0,a.randomBytes)(16).toString("hex"),r={method:"SUBSCRIBE",params:["".concat(t.toLowerCase(),"@kline_1s")],id:n};null===(e=f.current)||void 0===e||e.send(JSON.stringify(r))},f.current.onmessage=e=>{let t=JSON.parse(e.data);if("kline"===t.e){var n;let{t:e,o:o,h:i,l:l,c:c}=t.k,a={time:Math.floor(e/1e3),open:Number(o),high:Number(i),low:Number(l),close:Number(c)};null===(n=r.current)||void 0===n||n.update(a)}},f.current.onerror=e=>{console.error("WebSocket Error:",e)},f.current.onclose=()=>{console.log("WebSocket connection closed")}}catch(e){console.error("Error initializing chart data:",e)}})(),()=>{f.current&&f.current.close()}),[]),(0,i.useEffect)(()=>{if(console.log("init chart"),h.current){let{width:e,height:t}=h.current.getBoundingClientRect();return n.current=(0,l.C2)(h.current,{width:e,height:t,grid:{horzLines:{color:m?"#666":"#888"},vertLines:{color:m?"#666":"#888"}},layout:{background:{color:m?"#222":"#fafafa"},textColor:m?"#fafafa":"#222"}}),r.current=n.current.addCandlestickSeries({upColor:m?"#81c784":"#26a69a",downColor:m?"#e57373":"#ef5350",borderVisible:!1,wickUpColor:m?"#81c784":"#26a69a",wickDownColor:m?"#e57373":"#ef5350"}),n.current.applyOptions({timeScale:{timeVisible:!0,secondsVisible:!0,tickMarkFormatter:(e,t,n)=>new Date(1e3*e).toLocaleTimeString(n,{hour12:!1})}}),console.log("chart and series initialized",n.current,r.current),()=>{n.current&&n.current.remove()}}},[m]),(0,o.tZ)("div",{css:(0,c.iv)(u()),ref:h,children:(0,o.tZ)("h1",{css:(0,c.iv)(d()),className:s.g5.vt323.className,children:t})})})},5206:function(e,t,n){"use strict";n.d(t,{a9:function(){return d},g5:function(){return m},kG:function(){return h},rY:function(){return f}});var r=n(1595),o=n(9654),i=n.n(o),l=n(6479),c=n.n(l),a=n(1273),s=n(2909),u=n(2768);let d=[{link:"./ws-quotes",title:"Realtime Quotes via webSocket (powered by ReactJs)"},{link:"https://jialin00.com/ng-chunks-chunks-chunks/",title:"My Tech skills (powered by Angular)"},{link:"https://aws.jialin00.com",title:"Serving your pages using S3, CloudFront and Route 53",hard:!0},{link:"/css-decode/firefox",title:"I Adore You, Firefox."},{link:"/css-decode/stacked-cards",title:"Progressive Card Stack Scroll "},{link:"/html/z/frontend/angular-upgrade",title:"Rewriting Angular 10 Directly with Version 18"},{link:"/html/z/frontend/nextjs-cors",title:"Frontend Server-Side Calls and CORS"},{link:"/html/z/cloud/fargate-ecs-go-server",title:"Implementing a Go HTTP Server and Websocket with Fargate and ECR"},{link:"/html/z/network/loopback-localhost-anywhere",title:"loopback(127.0.0.1, ::1), localhost, and 0.0.0.0 in Local Development"}],h=[{link:"https://www.linkedin.com/in/jlhuangprogramming/",title:"Linkedin",hard:!0,icon:(0,r.tZ)(a.ltd,{})},{link:"https://github.com/jialinhuang00",title:"Github",hard:!0,icon:(0,r.tZ)(a.hJX,{})},{link:"/cv",title:"CV",icon:(0,r.tZ)(s.xxC,{})},{link:"https://www.credly.com/badges/a8f99d0f-58e1-4d16-b3d9-36822f482153/",title:"AWS Practitioner",hard:!0,icon:"/aws-badge.png"},{link:"mailto:linao264590000@gmail.com",title:"Mail: linao264590000@gmail.com",hard:!0,icon:(0,r.tZ)(u.GYo,{})}],f=["#9f58e0","#17b3fb","#f48f27","#fc44b2","#dcdc24","#1aea9d","#222222"],m={vt323:i(),merriweather:c()}}},function(e){e.O(0,[267,957,240,706,218,394,609,123,879,971,117,744],function(){return e(e.s=2614)}),_N_E=e.O()}]);