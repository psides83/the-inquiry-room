(()=>{var e={};e.id=6810,e.ids=[6810],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55132:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u});var n=t(50482),r=t(69108),o=t(62563),i=t.n(o),a=t(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(s,l);let u=["",{children:["coming-soon",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,92786)),"/Users/Payton/web-development/The-Inquiry-Room/src/app/coming-soon/page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,99089)),"/Users/Payton/web-development/The-Inquiry-Room/src/app/coming-soon/layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,40562)),"/Users/Payton/web-development/The-Inquiry-Room/src/app/layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,55593)),"/Users/Payton/web-development/The-Inquiry-Room/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,93243)),"/Users/Payton/web-development/The-Inquiry-Room/src/app/not-found.js"]}],c=["/Users/Payton/web-development/The-Inquiry-Room/src/app/coming-soon/page.js"],d="/coming-soon/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/coming-soon/page",pathname:"/coming-soon",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},73945:(e,s,t)=>{Promise.resolve().then(t.bind(t,20349))},44877:(e,s,t)=>{Promise.resolve().then(t.bind(t,15456))},70686:(e,s,t)=>{"use strict";t.d(s,{Z:()=>u});var n=t(82841),r=t(13138),o=t(32544),i=t(4518),a=t(67235),l=t(20641);function u(e,s){if((0,a.Z)(2,arguments),!s||"object"!==(0,n.Z)(s))return new Date(NaN);var t=s.years?(0,l.Z)(s.years):0,u=s.months?(0,l.Z)(s.months):0,c=s.weeks?(0,l.Z)(s.weeks):0,d=s.days?(0,l.Z)(s.days):0,m=s.hours?(0,l.Z)(s.hours):0,p=s.minutes?(0,l.Z)(s.minutes):0,h=s.seconds?(0,l.Z)(s.seconds):0,x=(0,i.Z)(e),y=u||t?(0,o.Z)(x,u+12*t):x;return new Date((d||c?(0,r.Z)(y,d+7*c):y).getTime()+1e3*(h+60*(p+60*m)))}},42934:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var n=t(82841),r=t(13138),o=t(67235),i=t(20641),a=t(32544);function l(e,s){if((0,o.Z)(2,arguments),!s||"object"!==(0,n.Z)(s))return new Date(NaN);var t=s.years?(0,i.Z)(s.years):0,l=s.months?(0,i.Z)(s.months):0,u=s.weeks?(0,i.Z)(s.weeks):0,c=s.days?(0,i.Z)(s.days):0,d=s.hours?(0,i.Z)(s.hours):0,m=s.minutes?(0,i.Z)(s.minutes):0,p=s.seconds?(0,i.Z)(s.seconds):0;return new Date((function(e,s){(0,o.Z)(2,arguments);var t=(0,i.Z)(s);return(0,r.Z)(e,-t)})(function(e,s){(0,o.Z)(2,arguments);var t=(0,i.Z)(s);return(0,a.Z)(e,-t)}(e,l+12*t),c+7*u).getTime()-1e3*(p+60*(m+60*d)))}},20349:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var n=t(95344),r=t(7470),o=t.n(r),i=t(47959);function a({children:e}){return n.jsx(i.Z,{children:e})}a.propTypes={children:o().node}},15456:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g});var n=t(95344),r=t(7470),o=t.n(r),i=t(56739),a=t(9666),l=t(72833),u=t(32435),c=t(3941),d=t(84047),m=t(55015),p=t(3729),h=t(98919),x=t(62579),y=t(48280);function g(){let{days:e,hours:s,minutes:t,seconds:r}=function(e){let[s,t]=(0,p.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"});(0,p.useEffect)(()=>{let e=setInterval(()=>n(),1e3);return()=>clearInterval(e)},[]);let n=()=>{let s=new Date,n=e.valueOf()-s.valueOf(),r=`0${Math.floor(n%864e5/36e5)}`.slice(-2),o=`0${Math.floor(n%36e5/6e4)}`.slice(-2),i=`0${Math.floor(n%6e4/1e3)}`.slice(-2);t({days:Math.floor(n/864e5).toString()||"000",hours:r||"000",minutes:o||"000",seconds:i||"000"})};return{days:s.days,hours:s.hours,minutes:s.minutes,seconds:s.seconds}}(new Date("07/07/2024 21:30"));return(0,n.jsxs)(n.Fragment,{children:[n.jsx(d.Z,{variant:"h3",paragraph:!0,children:"Coming Soon!"}),n.jsx(d.Z,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),n.jsx(x.Z,{alt:"comingsoon",src:"/assets/illustrations/illustration_comingsoon.svg",sx:{my:3,mx:"auto",maxWidth:320}}),(0,n.jsxs)(a.Z,{direction:"row",justifyContent:"center",divider:n.jsx(i.Z,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[n.jsx(v,{label:"Days",value:e}),n.jsx(v,{label:"Hours",value:s}),n.jsx(v,{label:"Minutes",value:t}),n.jsx(v,{label:"Seconds",value:r})]}),n.jsx(u.Z,{fullWidth:!0,hiddenLabel:!0,placeholder:"Enter your email",InputProps:{endAdornment:n.jsx(m.Z,{position:"end",children:n.jsx(l.Z,{variant:"contained",size:"large",color:"inherit",sx:{mr:-1.25},children:"Notify"})})},sx:{my:5}}),n.jsx(a.Z,{direction:"row",justifyContent:"center",children:h._I.map(e=>n.jsx(c.Z,{children:n.jsx(y.Z,{icon:e.icon,sx:{color:e.color}})},e.value))})]})}function v({label:e,value:s}){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{children:[" ",s," "]}),n.jsx(i.Z,{sx:{color:"text.secondary",typography:"body1"},children:e})]})}v.propTypes={label:o().string,value:o().string}},99089:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>o,__esModule:()=>r,default:()=>i});let n=(0,t(86843).createProxy)(String.raw`/Users/Payton/web-development/The-Inquiry-Room/src/app/coming-soon/layout.js`),{__esModule:r,$$typeof:o}=n,i=n.default},92786:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u,metadata:()=>l});var n=t(25036);let r=(0,t(86843).createProxy)(String.raw`/Users/Payton/web-development/The-Inquiry-Room/src/sections/status/view/coming-soon-view.js`),{__esModule:o,$$typeof:i}=r,a=r.default,l={title:"Coming Soon"};function u(){return n.jsx(a,{})}}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),n=s.X(0,[2787,9064,2082,2435,6230,3255,8919],()=>t(55132));module.exports=n})();