(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{3808:function(e,t,n){Promise.resolve().then(n.bind(n,4857))},4857:function(e,t,n){"use strict";n.d(t,{default:function(){return y}});var r=n(5008),i=n(3534),l=n(6915),a=n(3146),o=n(2265);let c=e=>{let t,n="!<>-_\\/[]{}—=+*^?#________",r=0,i=0,l=[],a=()=>{let n="",c=0;for(let e=0,t=l.length;e<t;e++){let{from:t,to:i,start:a,end:s,char:u}=l[e];r>=s?(c++,n+=i):r>=a?((!u||.28>Math.random())&&(u=o(),l[e].char=u),n+="".concat(u)):n+=t}e.innerHTML=n,c===l.length?t():(i=requestAnimationFrame(a),r++)},o=()=>n[Math.floor(Math.random()*n.length)];return{setText:n=>{let o=e.innerText,c=n.length,s=new Promise((e,n)=>t=e);l=[];for(let e=0;e<c;e++){let t=o[e]||"",r=n[e]||"",i=Math.floor(20*Math.random()),a=i+Math.floor(20*Math.random());l.push({from:t,to:r,start:i,end:a})}return cancelAnimationFrame(i),r=0,a(),s},frameRequest:i}};var s=(e,t)=>{let n=(0,o.useRef)(null),r=(0,o.useRef)(),i=(0,o.useRef)(0);return(0,o.useEffect)(()=>{n.current&&(r.current=c(null==n?void 0:n.current));let l=()=>{var n;null==r||null===(n=r.current)||void 0===n||n.setText(e[i.current]).then(()=>{setTimeout(l,t)}),r.current,i.current=(i.current+1)%e.length};return l(),()=>{r.current&&cancelAnimationFrame(r.current.frameRequest)}},[e,t]),n},u=n(5206),f=n(8826);function d(){let e=(0,r._)(["\n            padding: 16px;\n          "]);return d=function(){return e},e}function m(){let e=(0,r._)(["\n          ",";\n          font-size: 48px;\n          padding: 32px;\n          ","\n\n          height: 100vh;\n          width: 100vw;\n          top: 0;\n          left: 0;\n          background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2) 2px);\n          background-size: 8px 8px;\n          backdrop-filter: blur(1px);\n        "]);return m=function(){return e},e}function p(){let e=(0,r._)(["\n          position: fixed;\n          bottom: 8px;\n          left: 8px;\n          font-size: 0.8rem;\n          user-select: none;\n        "]);return p=function(){return e},e}let h=(0,o.memo)(function(){let e=s(v,3e3);return(0,i.BX)(i.HY,{children:[(0,i.tZ)("div",{className:u.g5.vt323.className,ref:e,css:(0,a.iv)(m(),l.f.h.allCenter,f.BC.mobile((0,a.iv)(d())))}),(0,i.tZ)("p",{css:(0,a.iv)(p()),children:"@from rick and morty"})]})}),v=["When I Don't Like Something About The World, I Change It.","Wubba Lubba Dub Dub.","To Live Is To Risk It All-Otherwise, you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.","You Still Have A Right To Take Anything You Want Seriously.","None Of Them Have To Be Responsible. They're All Victims Of Themselves.","Don't get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing.","You Act Like Prey, But You're A Predator"];var y=h},8826:function(e,t,n){"use strict";n.d(t,{BC:function(){return i},GA:function(){return l}});var r=n(3146);let i={mobile:e=>(0,r.iv)("@media (max-width:",600,"px){",e,"}"),tablet:e=>(0,r.iv)("@media (max-width:",900,"px){",e,"}"),desktop:e=>(0,r.iv)("@media (max-width:",1024,"px){",e,"}")},l=e=>(0,r.iv)("@media (prefers-color-scheme:dark){",e,"}")},5206:function(e,t,n){"use strict";n.d(t,{a9:function(){return f},g5:function(){return p},kG:function(){return d},rY:function(){return m}});var r=n(3534),i=n(9654),l=n.n(i),a=n(6479),o=n.n(a),c=n(1273),s=n(2909),u=n(2768);let f=[{link:"./ws-quotes",title:"Realtime Quotes via webSocket \uD83D\uDC48\uD83D\uDC48"},{link:"https://jialin00.com/ng-chunks-chunks-chunks/",title:"My Tech stack (Angular, firebase) \uD83D\uDC48\uD83D\uDC48"},{link:"http://mysubpage.jialin00.com",title:"Serving your subdomain on Github too",hard:!0},{link:"https://aws.jialin00.com",title:"Serving your pages using S3, CloudFront and Route 53",hard:!0},{link:"./html/z/network/nextjs-cors",title:"Frontend Server-Side Calls and CORS"},{link:"./html/z/cloud/fargate-ecs-go-server",title:"Implementing a Go HTTP Server and Websocket with Fargate and ECR"},{link:"./html/z/os/prevent-child-shell",title:"Preventing Unexpected Effects of Child Shells in Bash"},{link:"./html/z/network/loopback-localhost-anywhere",title:"loopback(127.0.0.1, ::1), localhost, and 0.0.0.0 in Local Development"},{link:"./html/z/cloud/0-vpc-common-components-traffic",title:"AWS VPC — How Network Traffic Travels Through Components"},{link:"./html/z/cloud/0-serverless-lambda-apigateway-dynamodb-together",title:"Serverless: Lambda, API Gateway, DynamoDB Together",subLinks:[{link:"https://aws.jialin00.com/lambda-dynamo-apigateway-display/",title:"AWS Integration Demo: Lambda, API Gateway, and DynamoDB Message Handling (Display)"}]}],d=[{link:"https://www.linkedin.com/in/jlhuangprogramming/",title:"Linkedin",hard:!0,icon:(0,r.tZ)(c.ltd,{})},{link:"https://github.com/jialinhuang00",title:"Github",hard:!0,icon:(0,r.tZ)(c.hJX,{})},{link:"/cv",title:"CV",icon:(0,r.tZ)(s.xxC,{})},{link:"https://www.credly.com/badges/a8f99d0f-58e1-4d16-b3d9-36822f482153/",title:"AWS Practitioner",hard:!0,icon:"/aws-badge.png"},{link:"mailto:linao264590000@gmail.com",title:"Mail: linao264590000@gmail.com",hard:!0,icon:(0,r.tZ)(u.GYo,{})}],m=["#9f58e0","#17b3fb","#f48f27","#fc44b2","#dcdc24","#1aea9d","#222222"],p={vt323:l(),merriweather:o()}},6915:function(e,t,n){"use strict";n.d(t,{f:function(){return T},jc:function(){return u}});var r=n(3146);let i=(0,r.iv)("justify-content:space-between;"),l=(0,r.iv)("justify-content:space-around;"),a=(0,r.iv)("justify-content:space-evenly;"),o=(0,r.iv)("justify-content:flex-start;"),c=(0,r.iv)("justify-content:flex-end;"),s=(0,r.iv)("justify-content:stretch;"),u={spaceBetween:i,spaceAround:l,spaceEvenly:a,flexStart:o,flexEnd:c,center:(0,r.iv)("justify-content:center;"),stretch:s},f=(0,r.iv)("display:flex;flex-direction:row;"),d=(0,r.iv)("display:flex;flex-direction:column;"),m=(0,r.iv)("display:inline-flex;"),p=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;justify-content:center;"),h=(0,r.iv)("display:inline-flex;flex-direction:row;justify-content:center;"),v=(0,r.iv)("display:inline-flex;flex-direction:row;align-items:center;"),y=(0,r.iv)("display:flex;flex-direction:row;align-items:center;justify-content:center;"),b=(0,r.iv)("display:flex;flex-direction:row;justify-content:center;"),g=(0,r.iv)("display:flex;flex-direction:row;align-items:center;"),w=(0,r.iv)("display:flex;flex-direction:column;align-items:center;justify-content:center;"),x=(0,r.iv)("display:flex;flex-direction:column;align-items:center;"),k=(0,r.iv)("display:flex;flex-direction:column;justify-content:center;"),j=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;"),C=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;"),_=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"),O=(0,r.iv)("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;"),D=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;"),S=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;"),P=(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"),T={h:{default:f,allCenter:y,mainCenter:b,crossCenter:g},v:{default:d,allCenter:w,mainCenter:k,crossCenter:x},inline:{default:m,allCenter:p,mainCenter:h,crossCenter:v},wrap:{default:j,allCenter:C,mainCenter:O,crossCenter:_},verticalWrap:{default:D,allCenter:S,mainCenter:(0,r.iv)("display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;"),crossCenter:P}}},6479:function(e){e.exports={style:{fontFamily:"'__Merriweather_6c37aa', '__Merriweather_Fallback_6c37aa'",fontStyle:"normal"},className:"__className_6c37aa"}},9654:function(e){e.exports={style:{fontFamily:"'__VT323_f6b3a3', '__VT323_Fallback_f6b3a3'",fontWeight:400,fontStyle:"normal"},className:"__className_f6b3a3"}},6231:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(i),a=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(f,o({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:i,size:l,title:c}=e,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,a),f=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[267,957,240,706,948,971,117,744],function(){return e(e.s=3808)}),_N_E=e.O()}]);