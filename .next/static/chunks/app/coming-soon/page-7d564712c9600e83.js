(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6810],{60113:function(e,t,n){Promise.resolve().then(n.bind(n,94713))},88666:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(57437),r=n(74275),s=n.n(r),l=n(2265),a=n(39830),i=n(79245);let c=(0,l.forwardRef)((e,t)=>{let{icon:n,width:r=20,sx:s,...l}=e;return(0,o.jsx)(i.Z,{ref:t,component:a.JO,className:"component-iconify",icon:n,sx:{width:r,height:r,...s},...l})});c.propTypes={icon:s().oneOfType([s().string,s().element]),sx:s().object,width:s().number};var d=c},43617:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(57437),r=n(74275),s=n.n(r),l=n(2265),a=n(58553),i=n(79245),c=n(41101),d=n(89975);let u=(0,l.forwardRef)((e,t)=>{let{ratio:n,overlay:r,disabledEffect:s=!1,alt:l,src:u,afterLoad:p,delayTime:h,threshold:f,beforeLoad:m,delayMethod:x,placeholder:b,wrapperProps:g,scrollPosition:v,effect:y="blur",visibleByDefault:j,wrapperClassName:w,useIntersectionObserver:Z,sx:O,...k}=e,I=(0,c.Z)(),N=!!r&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:r||(0,d.Fq)(I.palette.grey[900],.48)}},_=(0,o.jsx)(i.Z,{component:a.LazyLoadImage,alt:l,src:u,afterLoad:p,delayTime:h,threshold:f,beforeLoad:m,delayMethod:x,placeholder:b,wrapperProps:g,scrollPosition:v,visibleByDefault:j,effect:s?void 0:y,useIntersectionObserver:Z,wrapperClassName:w||"component-image-wrapper",placeholderSrc:s?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!n&&{top:0,left:0,position:"absolute"}}});return(0,o.jsx)(i.Z,{ref:t,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!n&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!n&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(n)}},...N,...O},...k,children:_})});u.propTypes={afterLoad:s().func,alt:s().string,beforeLoad:s().func,delayMethod:s().string,delayTime:s().number,disabledEffect:s().bool,effect:s().string,overlay:s().string,placeholder:s().element,ratio:s().oneOf(["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"]),scrollPosition:s().object,src:s().string,sx:s().object,threshold:s().number,useIntersectionObserver:s().bool,visibleByDefault:s().bool,wrapperClassName:s().string,wrapperProps:s().object};var p=u},94713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(57437),r=n(74275),s=n.n(r),l=n(79245),a=n(13457),i=n(76623),c=n(55594),d=n(46776),u=n(85269),p=n(81679),h=n(2265),f=n(24165),m=n(43617),x=n(88666);function b(){let{days:e,hours:t,minutes:n,seconds:r}=function(e){let[t,n]=(0,h.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"});(0,h.useEffect)(()=>{let e=setInterval(()=>o(),1e3);return()=>clearInterval(e)},[]);let o=()=>{let t=new Date,o=e.valueOf()-t.valueOf(),r="0".concat(Math.floor(o%864e5/36e5)).slice(-2),s="0".concat(Math.floor(o%36e5/6e4)).slice(-2),l="0".concat(Math.floor(o%6e4/1e3)).slice(-2);n({days:Math.floor(o/864e5).toString()||"000",hours:r||"000",minutes:s||"000",seconds:l||"000"})};return{days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds}}(new Date("07/07/2024 21:30"));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{variant:"h3",paragraph:!0,children:"Coming Soon!"}),(0,o.jsx)(u.Z,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),(0,o.jsx)(m.Z,{alt:"comingsoon",src:"/assets/illustrations/illustration_comingsoon.svg",sx:{my:3,mx:"auto",maxWidth:320}}),(0,o.jsxs)(a.Z,{direction:"row",justifyContent:"center",divider:(0,o.jsx)(l.Z,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[(0,o.jsx)(g,{label:"Days",value:e}),(0,o.jsx)(g,{label:"Hours",value:t}),(0,o.jsx)(g,{label:"Minutes",value:n}),(0,o.jsx)(g,{label:"Seconds",value:r})]}),(0,o.jsx)(c.Z,{fullWidth:!0,hiddenLabel:!0,placeholder:"Enter your email",InputProps:{endAdornment:(0,o.jsx)(p.Z,{position:"end",children:(0,o.jsx)(i.Z,{variant:"contained",size:"large",color:"inherit",sx:{mr:-1.25},children:"Notify"})})},sx:{my:5}}),(0,o.jsx)(a.Z,{direction:"row",justifyContent:"center",children:f._I.map(e=>(0,o.jsx)(d.Z,{children:(0,o.jsx)(x.Z,{icon:e.icon,sx:{color:e.color}})},e.value))})]})}function g(e){let{label:t,value:n}=e;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(l.Z,{children:[" ",n," "]}),(0,o.jsx)(l.Z,{sx:{color:"text.secondary",typography:"body1"},children:t})]})}g.propTypes={label:s().string,value:s().string}}},function(e){e.O(0,[4331,9164,9445,4351,7842,8566,8553,4157,2528,5594,8695,9594,4165,7478,4938,1744],function(){return e(e.s=60113)}),_N_E=e.O()}]);