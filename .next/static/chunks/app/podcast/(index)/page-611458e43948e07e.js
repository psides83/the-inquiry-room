(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3301],{71460:function(e,t,o){"use strict";var r=o(20791),s=o(13428),n=o(2265),i=o(57042),a=o(95600),l=o(45295),c=o(28702),d=o(87927),x=o(73031),h=o(35843),p=o(57437);let m=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],u=e=>{let{color:t,variant:o,classes:r,size:n}=e,i={root:["root",o,`size${(0,c.Z)(n)}`,"inherit"===t?"colorInherit":t]},l=(0,a.Z)(i,x.N,r);return(0,s.Z)({},r,l)},g=(0,h.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`size${(0,c.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,t[(0,c.Z)(o.size)],t[o.color]]}})(({theme:e,ownerState:t})=>{var o,r;return(0,s.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${x.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,s.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${x.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),b=n.forwardRef(function(e,t){let o=(0,d.Z)({props:e,name:"MuiFab"}),{children:n,className:a,color:l="default",component:c="button",disabled:x=!1,disableFocusRipple:h=!1,focusVisibleClassName:b,size:j="large",variant:f="circular"}=o,Z=(0,r.Z)(o,m),v=(0,s.Z)({},o,{color:l,component:c,disabled:x,disableFocusRipple:h,size:j,variant:f}),y=u(v);return(0,p.jsx)(g,(0,s.Z)({className:(0,i.Z)(y.root,a),component:c,disabled:x,focusRipple:!h,focusVisibleClassName:(0,i.Z)(y.focusVisible,b),ownerState:v,ref:t},Z,{classes:y,children:n}))});t.Z=b},73031:function(e,t,o){"use strict";o.d(t,{N:function(){return n}});var r=o(26520),s=o(25702);function n(e){return(0,s.Z)("MuiFab",e)}let i=(0,r.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);t.Z=i},24479:function(e,t,o){Promise.resolve().then(o.bind(o,67993))},87121:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var r=o(57437),s=o(74275),n=o.n(s),i=o(2265),a=o(79245),l=o(41101),c=o(35843),d=o(89975);let x=(0,c.ZP)(a.Z)(e=>{let{theme:t,ownerState:o}=e,r="light"===t.palette.mode,s="filled"===o.variant,n="outlined"===o.variant,i="soft"===o.variant,a={..."default"===o.color&&{...s&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...n&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...i&&{color:t.palette.text.secondary,backgroundColor:(0,d.Fq)(t.palette.grey[500],.16)}}},l={..."default"!==o.color&&{...s&&{color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main},...n&&{backgroundColor:"transparent",color:t.palette[o.color].main,border:"2px solid ".concat(t.palette[o.color].main)},...i&&{color:t.palette[o.color][r?"dark":"light"],backgroundColor:(0,d.Fq)(t.palette[o.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...a,...l}}),h=(0,i.forwardRef)((e,t)=>{let{children:o,color:s="default",variant:n="soft",startIcon:i,endIcon:c,sx:d,...h}=e,p=(0,l.Z)(),m={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,r.jsxs)(x,{ref:t,component:"span",ownerState:{color:s,variant:n},sx:{...i&&{pl:.75},...c&&{pr:.75},...d},theme:p,...h,children:[i&&(0,r.jsxs)(a.Z,{sx:{mr:.75,...m},children:[" ",i," "]}),o,c&&(0,r.jsxs)(a.Z,{sx:{ml:.75,...m},children:[" ",c," "]})]})});h.propTypes={children:n().node,color:n().oneOf(["default","primary","secondary","info","success","warning","error"]),endIcon:n().object,startIcon:n().object,sx:n().object,variant:n().oneOf(["filled","outlined","ghost","soft"])};var p=h},66643:function(e,t,o){"use strict";o.d(t,{Z:function(){return Z}});var r=o(57437),s=o(74275),n=o.n(s),i=o(79245),a=o(25210),l=o(15133),c=o(13457),d=o(3283),x=o(54986),h=o(85269),p=o(13495),m=o(40410),u=o(36964),g=o(43617),b=o(87121),j=o(88666),f=o(97720);function Z(e){var t,o;let{course:s,vertical:n}=e,{slug:Z,level:v,price:y,teachers:w,coverUrl:C,category:k,priceSale:I,bestSeller:z,totalHours:S,description:F,ratingNumber:L,totalReviews:R,totalStudents:W}=s;return(0,r.jsxs)(l.Z,{sx:{display:{sm:"flex"},"&:hover":{boxShadow:e=>e.customShadows.z24},...n&&{flexDirection:"column"}},children:[(0,r.jsx)(i.Z,{sx:{flexShrink:{sm:0}},children:(0,r.jsx)(g.Z,{alt:Z,src:C,sx:{height:1,objectFit:"cover",width:{sm:240},...n&&{width:{sm:1}}}})}),z&&(0,r.jsx)(b.Z,{color:"warning",variant:"filled",sx:{top:12,left:12,position:"absolute",textTransform:"uppercase"},children:"Best Seller"}),(0,r.jsxs)(c.Z,{spacing:3,sx:{p:3},children:[(0,r.jsxs)(c.Z,{spacing:{xs:3,sm:n?3:1},children:[(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(h.Z,{variant:"overline",sx:{color:"primary.main"},children:k}),(0,r.jsxs)(h.Z,{variant:"h4",children:[I>0&&(0,r.jsx)(i.Z,{component:"span",sx:{mr:.5,color:"text.disabled",textDecoration:"line-through"},children:(0,u.e_)(I)}),(0,u.e_)(y)]})]}),(0,r.jsxs)(c.Z,{spacing:1,children:[(0,r.jsx)(a.Z,{component:m.r,href:p.H.eLearning.course,color:"inherit",children:(0,r.jsx)(f.Z,{variant:"h6",line:1,children:Z})}),(0,r.jsx)(f.Z,{variant:"body2",color:"text.secondary",sx:{...n&&{display:{sm:"none"}}},children:F})]})]}),(0,r.jsxs)(c.Z,{spacing:1.5,direction:"row",alignItems:"center",flexWrap:"wrap",divider:(0,r.jsx)(x.Z,{orientation:"vertical",sx:{height:20,my:"auto"}}),children:[(0,r.jsxs)(c.Z,{spacing:.5,direction:"row",alignItems:"center",children:[(0,r.jsx)(j.Z,{icon:"carbon:star-filled",sx:{color:"warning.main"}}),(0,r.jsx)(i.Z,{sx:{typography:"h6"},children:Number.isInteger(L)?"".concat(L,".0"):L}),R&&(0,r.jsxs)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,u.v1)(R)," reviews)"]})]}),(0,r.jsxs)(c.Z,{direction:"row",sx:{typography:"subtitle2"},children:[(0,u.v1)(W),(0,r.jsx)(i.Z,{component:"span",typography:"body2",sx:{ml:.5},children:"students"})]})]}),(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(d.Z,{src:null===(t=w[0])||void 0===t?void 0:t.avatarUrl}),(0,r.jsx)(h.Z,{variant:"body2",sx:{ml:1,mr:.5},children:null===(o=w[0])||void 0===o?void 0:o.name}),(null==w?void 0:w.length)>0&&(0,r.jsxs)(a.Z,{underline:"always",color:"text.secondary",variant:"body2",children:["+ ",null==w?void 0:w.length," teachers"]})]}),(0,r.jsx)(x.Z,{sx:{borderStyle:"dashed",display:{sm:"none"},...n&&{display:"block"}}}),(0,r.jsxs)(c.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",sx:{color:"text.disabled","& > *:not(:last-child)":{mr:2.5}},children:[(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{typography:"body2"},children:[(0,r.jsx)(j.Z,{icon:"carbon:time",sx:{mr:1}})," ","".concat(S," hours")]}),(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{typography:"body2"},children:[(0,r.jsx)(j.Z,{icon:"Beginner"===v&&"carbon:skill-level-basic"||"Intermediate"===v&&"carbon:skill-level-intermediate"||"carbon:skill-level-advanced",sx:{mr:1}}),v]})]})]})]})}Z.propTypes={course:n().shape({slug:n().string,level:n().string,price:n().number,teachers:n().array,bestSeller:n().bool,category:n().string,coverUrl:n().string,priceSale:n().number,totalHours:n().number,description:n().string,ratingNumber:n().number,totalReviews:n().number,totalStudents:n().number}),vertical:n().bool}},67993:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ed}});var r=o(57437),s=o(24165),n=o(74275),i=o.n(n),a=o(79245),l=o(13457),c=o(76623),d=o(88938),x=o(85269);o(96556),i().array;var h=o(9467);o(41399);var p=o(54986),m=o(85884),u=o(35843),g=o(89975),b=o(39816),j=o(43617),f=o(88666),Z=o(68357);let v=(0,u.ZP)(c.Z)(e=>{let{theme:t}=e;return{flexShrink:0,padding:"5px 12px",color:t.palette.common.white,border:"solid 1px ".concat((0,g.Fq)(t.palette.common.black,.24)),background:"linear-gradient(180deg, ".concat(t.palette.grey[900]," 0%, ").concat(t.palette.common.black," 100%)"),["& .".concat(b.Z.startIcon)]:{marginLeft:0}}});function y(){return(0,r.jsx)(d.Z,{sx:{py:{xs:8,md:15}},children:(0,r.jsxs)(m.Z,{container:!0,spacing:3,justifyContent:{lg:"space-between"},children:[(0,r.jsxs)(m.Z,{xs:12,md:6,lg:5,children:[(0,r.jsxs)(l.Z,{sx:{textAlign:{xs:"center",md:"unset"}},children:[(0,r.jsx)(x.Z,{variant:"h2",children:" Download App "}),(0,r.jsx)(x.Z,{sx:{color:"text.secondary",mt:3,mb:8},children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi."})]}),(0,r.jsxs)(l.Z,{alignItems:"center",sx:{py:5,borderRadius:2,mb:{xs:8,md:0},px:{xs:3,md:5},border:e=>"solid 1px ".concat(e.palette.divider)},children:[(0,r.jsxs)(l.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,r.jsx)(Z.Z,{src:"/assets/icons/ic_qrcode.svg",sx:{width:120,height:120,color:"grey.900"}}),(0,r.jsxs)(x.Z,{variant:"h6",children:["Scan QR code to",(0,r.jsx)("br",{})," install on your device"]})]}),(0,r.jsx)(p.Z,{sx:{my:5,width:1,borderStyle:"dashed"}}),(0,r.jsx)(w,{direction:{xs:"column",sm:"row"}})]})]}),(0,r.jsx)(m.Z,{xs:12,md:6,lg:6,children:(0,r.jsx)(j.Z,{alt:"mobile app",src:"/assets/images/course/course_download_app.png",sx:{maxWidth:564,filter:e=>"drop-shadow(0 48px 80px ".concat((0,g.Fq)(e.palette.common.black,.24),")")}})})]})})}function w(e){let{...t}=e;return(0,r.jsxs)(l.Z,{direction:"row",flexWrap:"wrap",spacing:2,...t,children:[(0,r.jsx)(v,{startIcon:(0,r.jsx)(f.Z,{icon:"ri:apple-fill",width:28}),children:(0,r.jsxs)(l.Z,{alignItems:"flex-start",children:[(0,r.jsx)(x.Z,{variant:"caption",sx:{opacity:.72},children:"Download on the"}),(0,r.jsx)(x.Z,{variant:"h6",sx:{mt:-.5},children:"Apple Store"})]})}),(0,r.jsx)(v,{startIcon:(0,r.jsx)(f.Z,{icon:"logos:google-play-icon",width:28}),children:(0,r.jsxs)(l.Z,{alignItems:"flex-start",children:[(0,r.jsx)(x.Z,{variant:"caption",sx:{opacity:.72},children:"Download from"}),(0,r.jsx)(x.Z,{variant:"h6",sx:{mt:-.5},children:"Google Play"})]})})]})}var C=o(71460),k=o(41101),I=o(92302),z=o(96676),S=o(36964),F=o(49126),L=o(2265),R=o(22301);let W=(0,u.ZP)("div")(e=>{let{theme:t}=e;return{width:56,height:56,borderRadius:1.5*t.shape.borderRadius,position:"relative",display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",clipPath:"polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)",boxShadow:"inset 0px -4px 6px rgba(0, 0, 0, 0.48)"}}),q=(0,u.ZP)("div")(()=>({top:-2,left:-2,width:16,zIndex:9,height:16,borderRadius:"5px",position:"absolute","&:before":{top:0,left:0,width:16,height:16,content:'" "',borderRadius:"5px",position:"absolute",backgroundColor:"rgba(255,255,255,0.4)"}})),_=(0,u.ZP)("div")(e=>{let{theme:t}=e;return{top:2,left:-10,width:18,zIndex:8,height:18,opacity:.24,position:"absolute",transform:"rotate(45deg)",backgroundColor:t.palette.common.black}});function P(e){let{content:t,color:o,sx:s,...n}=e;return(0,r.jsx)(a.Z,{sx:{p:1.5,borderRadius:2.5,background:"linear-gradient(to bottom, ".concat((0,g.Fq)(o,.24)," -8%, ").concat((0,g.Fq)(o,0)," 120%)"),...s},...n,children:(0,r.jsx)(a.Z,{sx:{bgcolor:o,borderRadius:3,boxShadow:e=>"0px 24px 48px ".concat((0,g.Fq)(e.palette.common.black,.4))},children:(0,r.jsxs)(W,{sx:{bgcolor:o},children:[(0,r.jsx)(q,{sx:{bgcolor:o}}),(0,r.jsx)(_,{}),t]})})})}P.propTypes={color:i().string,content:i().node,sx:i().object};var T=(0,L.memo)(P);function B(e){let{icon:t,text:o,sx:s,...n}=e;return(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{px:2,py:1.25,fontSize:15,borderRadius:2,letterSpacing:-.5,color:"common.black",bgcolor:"common.white",fontWeight:"fontWeightBold",boxShadow:e=>"0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ".concat(e.palette.grey[600]),"& > div":{lineHeight:0},"& svg":{width:44,height:44},...s},...n,children:[t,(0,r.jsx)(a.Z,{sx:{ml:1},children:o})]})}B.propTypes={icon:i().node,sx:i().object,text:i().string};var M=(0,L.memo)(B),D=(0,L.memo)(function(e){let{...t}=e,o=(0,k.Z)(),s=o.palette.primary.light,n=o.palette.primary.main,i=o.palette.secondary.light,l=o.palette.secondary.main;return(0,r.jsx)(a.Z,{...t,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"505",height:"454",viewBox:"0 0 505 454",children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"linearGradient-1",x1:"-9.342%",x2:"107.911%",y1:"42.109%",y2:"42.109%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:i}),(0,r.jsx)("stop",{offset:"100%",stopColor:l})]}),(0,r.jsxs)("linearGradient",{id:"linearGradient-2",x1:"-6.944%",x2:"107.092%",y1:"23.878%",y2:"62.216%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:s}),(0,r.jsx)("stop",{offset:"100%",stopColor:n})]})]}),(0,r.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,r.jsxs)("g",{fillRule:"nonzero",transform:"translate(.17 .105)",children:[(0,r.jsx)("path",{fill:"url(#linearGradient-1)",d:"M23.436 261.525c-36.2-36.2-29.554-96.617 13.651-124.082L233.654 12.487c28.81-18.314 66.067-16.33 92.768 4.944l147.772 117.732c37.342 29.75 40.48 85.378 6.718 119.138l-175.78 175.782c-31.243 31.242-81.896 31.242-113.138 0L23.436 261.525z",opacity:"0.2"}),(0,r.jsx)("path",{fill:"url(#linearGradient-2)",d:"M13.105 176.16C-7.718 129.39 20.14 75.37 70.316 65.214l228.291-46.214c33.46-6.773 67.531 8.432 84.835 37.86l95.765 162.87c24.201 41.157 7.195 94.213-36.423 113.632l-227.1 101.112c-40.363 17.97-87.652-.182-105.623-40.545L13.105 176.16z",opacity:"0.48"})]})})]})})});let E={animate:{y:[-12,12,-12]},transition:{duration:8,repeat:1/0}},N={animate:{y:[12,-12,12]},transition:{duration:8,repeat:1/0}},A={animate:{x:[10,-10,10]},transition:{duration:7,repeat:1/0}},G={animate:{x:[10,-10,10]},transition:{duration:7,repeat:1/0}};function V(e){let{sx:t,...o}=e,s=(0,k.Z)(),n="#DC8CFF",i=s.palette.info.light,l=s.palette.error.light,c=s.palette.info.lighter,d=s.palette.success.light,x=s.palette.warning.light;return(0,r.jsx)(a.Z,{sx:{width:1,height:1,position:"absolute",opacity:.32,...t},...o,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 640 640",children:[(0,r.jsx)(R.m.polygon,{...A,fill:d,points:"79.6660954 466.5012 83.4706954 470.3062 87.2873954 466.4912 88.9182954 468.1212 85.1008954 471.9362 88.9077954 475.7412 87.2723954 477.3762 83.4651954 473.5712 79.6510954 477.3862 78.0202954 475.7562 81.8348954 471.9422 78.0306954 468.1362"}),(0,r.jsx)(R.m.polygon,{...E,fill:d,points:"469.906195 75.0105 473.711195 78.8154 477.527195 75 479.158195 76.6304 475.341195 80.4452 479.148195 84.2498 477.512195 85.8847 473.705195 82.0805 469.891195 85.8952 468.260195 84.2648 472.075195 80.4507 468.271195 76.6454"}),(0,r.jsx)(R.m.polygon,{...G,fill:n,points:"400.526195 241.7992 404.331195 245.6042 408.148195 241.7882 409.778195 243.4192 405.961195 247.2342 409.768195 251.0382 408.133195 252.6732 404.325195 248.8692 400.511195 252.6842 398.880195 251.0532 402.695195 247.2392 398.891195 243.4342"}),(0,r.jsx)(R.m.path,{...A,d:"M204.688195,460.0412 L215.909195,471.2692 C216.698195,472.0482 217.486195,471.7982 217.686195,470.7102 L220.172195,457.3862 C220.242195,457.1642 220.250195,456.9272 220.195195,456.7002 C220.140195,456.4742 220.023195,456.2672 219.858195,456.1022 C219.694195,455.9382 219.487195,455.8212 219.260195,455.7662 C219.034195,455.7112 218.797195,455.7192 218.575195,455.7892 L205.237195,458.2642 C204.149195,458.4642 203.909195,459.2622 204.688195,460.0412 Z",stroke:n,strokeWidth:"2",strokeLinecap:"round"}),(0,r.jsx)(R.m.path,{...E,d:"M316.964195,555.3242 L320.830195,551.4592 C321.416195,550.8752 322.209195,550.5472 323.036195,550.5472 C323.863195,550.5472 324.657195,550.8752 325.243195,551.4592 L329.108195,555.3242 C329.400195,555.6142 329.631195,555.9582 329.789195,556.3372 C329.947195,556.7172 330.028195,557.1232 330.028195,557.5342 C330.028195,557.9452 329.947195,558.3512 329.789195,558.7302 C329.631195,559.1102 329.400195,559.4542 329.108195,559.7442 L325.243195,563.6082 C324.657195,564.1922 323.863195,564.5202 323.036195,564.5202 C322.209195,564.5202 321.416195,564.1922 320.830195,563.6082 L316.964195,559.7442 C316.673195,559.4542 316.442195,559.1102 316.284195,558.7302 C316.126195,558.3512 316.045195,557.9452 316.045195,557.5342 C316.045195,557.1232 316.126195,556.7172 316.284195,556.3372 C316.442195,555.9582 316.673195,555.6142 316.964195,555.3242 L316.964195,555.3242 Z",stroke:c,strokeWidth:"2"}),(0,r.jsx)(R.m.path,{...N,d:"M488.678195,226.9562 L492.544195,223.0912 C493.130195,222.5072 493.923195,222.1792 494.750195,222.1792 C495.577195,222.1792 496.371195,222.5072 496.956195,223.0912 L500.822195,226.9562 C501.114195,227.2452 501.345195,227.5902 501.503195,227.9692 C501.660195,228.3482 501.742195,228.7552 501.742195,229.1652 C501.742195,229.5762 501.660195,229.9832 501.503195,230.3622 C501.345195,230.7412 501.114195,231.0862 500.822195,231.3752 L496.956195,235.2402 C496.371195,235.8242 495.577195,236.1522 494.750195,236.1522 C493.923195,236.1522 493.130195,235.8242 492.544195,235.2402 L488.678195,231.3752 C488.387195,231.0862 488.155195,230.7412 487.998195,230.3622 C487.840195,229.9832 487.759195,229.5762 487.759195,229.1652 C487.759195,228.7552 487.840195,228.3482 487.998195,227.9692 C488.155195,227.5902 488.387195,227.2452 488.678195,226.9562 L488.678195,226.9562 Z",stroke:c,strokeWidth:"2"}),(0,r.jsx)(R.m.path,{...A,d:"M605.025195,349.0122 L615.168195,359.1522 C615.947195,359.9312 616.736195,359.6912 616.945195,358.6032 L619.182195,346.5962 C619.250195,346.3742 619.257195,346.1382 619.201195,345.9132 C619.145195,345.6872 619.028195,345.4812 618.864195,345.3172 C618.700195,345.1532 618.494195,345.0362 618.268195,344.9802 C618.043195,344.9242 617.806195,344.9312 617.584195,344.9992 L605.574195,347.2352 C604.486195,347.4352 604.237195,348.2332 605.025195,349.0122 Z",stroke:l,strokeWidth:"2"}),(0,r.jsx)(R.m.path,{...N,d:"M559.564195,533.7552 L569.707195,543.8952 C570.486195,544.6742 571.275195,544.4352 571.484195,543.3472 L573.721195,531.3402 C573.789195,531.1182 573.796195,530.8812 573.740195,530.6562 C573.684195,530.4312 573.567195,530.2252 573.403195,530.0602 C573.239195,529.8962 573.033195,529.7802 572.807195,529.7242 C572.582195,529.6682 572.345195,529.6742 572.123195,529.7432 L560.113195,531.9782 C559.025195,532.1782 558.776195,532.9772 559.564195,533.7552 Z",stroke:x,strokeWidth:"2",strokeLinecap:"round"}),(0,r.jsx)(R.m.path,{...E,d:"M30.9833954,422.9532 C30.9833954,423.9402 30.6905954,424.9052 30.1420954,425.7252 C29.5935954,426.5462 28.8139954,427.1862 27.9018954,427.5642 C26.9897954,427.9412 25.9861454,428.0402 25.0178554,427.8472 C24.0495654,427.6552 23.1601254,427.1802 22.4620254,426.4822 C21.7639254,425.7842 21.2885254,424.8952 21.0959154,423.9272 C20.9033154,422.9592 21.0021554,421.9552 21.3799654,421.0432 C21.7577754,420.1312 22.3975754,419.3522 23.2184454,418.8042 C24.0393254,418.2552 25.0044154,417.9622 25.9916854,417.9622 C27.3155954,417.9622 28.5851954,418.4882 29.5212954,419.4242 C30.4574954,420.3602 30.9833954,421.6292 30.9833954,422.9532 Z",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),(0,r.jsx)(R.m.path,{...N,d:"M321.193195,87.598 C321.193195,88.585 320.900195,89.5498 320.352195,90.3705 C319.803195,91.1911 319.024195,91.831 318.112195,92.2087 C317.200195,92.5864 316.196195,92.6849 315.228195,92.4924 C314.259195,92.2998 313.370195,91.8247 312.672195,91.1268 C311.974195,90.4289 311.498195,89.5397 311.306195,88.5717 C311.113195,87.6036 311.212195,86.5999 311.590195,85.6881 C311.968195,84.7762 312.607195,83.9971 313.428195,83.4487 C314.249195,82.9004 315.214195,82.6076 316.201195,82.6076 C317.525195,82.6076 318.795195,83.1332 319.731195,84.0691 C320.667195,85.005 321.193195,86.2744 321.193195,87.598 Z",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),(0,r.jsx)(R.m.path,{...E,d:"M296.550195,430.7782 C299.583195,430.7782 302.041195,428.3202 302.041195,425.2882 C302.041195,422.2562 299.583195,419.7992 296.550195,419.7992 C293.518195,419.7992 291.059195,422.2562 291.059195,425.2882 C291.059195,428.3202 293.518195,430.7782 296.550195,430.7782 Z",stroke:l,strokeWidth:"2"})]})})}V.propTypes={sx:i().object};var H=(0,L.memo)(V);function O(e){let{size:t=24,color:o="primary",sx:s}=e;return(0,r.jsx)(a.Z,{sx:{width:t,height:t,zIndex:10,position:"absolute",borderRadius:"50%",background:e=>"linear-gradient(to bottom, ".concat(e.palette[o].light,", ").concat(e.palette[o].main,")"),boxShadow:e=>"inset 0px -2px 4px ".concat(e.palette[o].darker),...s}})}O.propTypes={color:i().string,size:i().number,sx:i().object};var $=(0,L.memo)(O);function U(e){let{children:t,hide:o=!1,sx:s,...n}=e;return(0,r.jsxs)(a.Z,{sx:{width:460,height:460,position:"absolute",...s},...n,children:[!o&&(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 520 520",children:(0,r.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeDasharray:"3",strokeWidth:"1",opacity:"0.24",children:(0,r.jsx)("g",{stroke:"#919EAB",strokeWidth:"2",transform:"translate(-757 1.852)",children:(0,r.jsx)("path",{d:"M1017 518c143.042 0 259-115.958 259-259S1160.042 0 1017 0 758 115.958 758 259s115.958 259 259 259z"})})})}),t]})}U.propTypes={children:i().node,hide:i().bool,sx:i().object};var Q=(0,L.memo)(U);let J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60;return{animate:{rotate:[360,0]},transition:{duration:e,repeat:1/0,ease:"linear"}}},X=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60;return{animate:{rotate:[0,360]},transition:{duration:e,repeat:1/0,ease:"linear"}}};function Y(e){let{sx:t,...o}=e;return(0,r.jsxs)(a.Z,{sx:{width:1,height:1,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",...t},...o,children:[(0,r.jsx)(Q,{hide:!0,component:R.m.div,...J(),children:(0,r.jsx)($,{sx:{left:-12,top:"50%",mt:-1.5}})}),(0,r.jsx)(Q,{hide:!0,component:R.m.div,...X(80),children:(0,r.jsx)($,{size:16,color:"secondary",sx:{top:80,left:42}})}),(0,r.jsx)(Q,{hide:!0,component:R.m.div,...X(100),children:(0,r.jsx)($,{size:14,color:"success",sx:{top:22,left:112}})}),(0,r.jsx)(Q,{component:R.m.div,...J(120),children:(0,r.jsx)($,{size:12,color:"warning",sx:{top:54,right:70}})})]})}Y.propTypes={sx:i().object};var K=(0,L.memo)(Y);let ee={animate:{y:[-8,8,-8],x:[-4,4,-4]},transition:{duration:8,repeat:1/0}},et={animate:{y:[8,-8,8],x:[4,-4,4]},transition:{duration:8,repeat:1/0}},eo={animate:{x:[8,-8,8],y:[4,-4,4]},transition:{duration:7,repeat:1/0}},er={animate:{x:[8,-8,8],y:[4,-4,4]},transition:{duration:7,repeat:1/0}};function es(e){let{sx:t,...o}=e,s=(0,k.Z)(),n=s.palette.success.main,i=s.palette.warning.main,l={fontSize:22,color:"common.black",fontWeight:"fontWeightBold"};return(0,r.jsxs)(a.Z,{sx:{width:670,height:670,display:"flex",alignItems:"center",position:"relative",justifyContent:"center",...t},...o,children:[(0,r.jsx)(a.Z,{sx:{position:"absolute",right:18,bottom:28,zIndex:8},children:(0,r.jsx)(j.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"teacher",src:"/assets/images/course/course_teacher_hero.png",sx:{width:546,height:650}})}),(0,r.jsx)(a.Z,{...et,component:R.m.div,sx:{position:"absolute",left:115,bottom:115,zIndex:8},children:(0,r.jsx)(j.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"book icon",src:"/assets/icons/ic_book.png",sx:{width:52,height:62}})}),(0,r.jsx)(a.Z,{...er,component:R.m.div,sx:{position:"absolute",left:18,top:220,zIndex:8},children:(0,r.jsx)(j.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"pencil icon",src:"/assets/icons/ic_pencil.png",sx:{width:60,height:77}})}),(0,r.jsx)(a.Z,{...ee,component:R.m.div,sx:{zIndex:9,left:120,bottom:168,position:"absolute"},children:(0,r.jsx)(M,{text:"Python",icon:(0,r.jsx)(j.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"python",src:"/assets/icons/platforms/ic_python.svg",sx:{width:56,height:56}}),sx:{py:1.75,typography:"h3",color:"#2994FF",boxShadow:"0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ".concat((0,g.Fq)(s.palette.grey[600],.48))}})}),(0,r.jsx)(a.Z,{...eo,component:R.m.div,sx:{top:88,right:72,zIndex:8,position:"absolute"},children:(0,r.jsx)(T,{color:n,content:(0,r.jsx)(x.Z,{sx:{...l},children:"Dw"}),sx:{transform:"scale(1.2) rotate(15deg)"}})}),(0,r.jsx)(a.Z,{...er,component:R.m.div,sx:{zIndex:8,bottom:160,position:"absolute"},children:(0,r.jsx)(T,{color:i,content:(0,r.jsx)(x.Z,{sx:{...l},children:"Ai"}),sx:{transform:"translateX(40px) scale(1.2) rotate(-15deg)"}})}),(0,r.jsx)(a.Z,{...ee,component:R.m.div,sx:{zIndex:8,right:90,position:"absolute"},children:(0,r.jsx)(T,{color:"#9B3AB1",content:(0,r.jsx)(x.Z,{sx:{...l,color:"common.white"},children:"Ae"}),sx:{transform:"scale(1.2) translateY(20px) rotate(15deg)"}})}),(0,r.jsx)(a.Z,{...et,component:R.m.div,sx:{zIndex:8,position:"absolute"},children:(0,r.jsx)(T,{color:"#355EC9",content:(0,r.jsx)(x.Z,{sx:{...l,color:"common.white"},children:"Ps"}),sx:{transform:"scale(1.2) translate(-135px, -75px) rotate(15deg)"}})}),(0,r.jsx)(H,{sx:{left:0,top:0}}),(0,r.jsx)(K,{sx:{top:0,left:0,opacity:.24,transform:"scale(1.2)"}}),(0,r.jsx)(D,{sx:{position:"absolute",right:32,bottom:32}})]})}es.propTypes={sx:i().object};var en=(0,L.memo)(es),ei=o(3261);let ea=[{value:14e3,label:"Learners",color:"warning"},{value:1050,label:"Courses",color:"error"},{value:59e3,label:"Graduates",color:"success"}];function el(){let e=(0,k.Z)(),t=(0,z.F)("up","md"),o=(0,I.k)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{sx:{...(0,F.v3)({color:(0,g.Fq)(e.palette.background.default,.9),imgUrl:"/assets/background/overlay_1.jpg"}),overflow:"hidden"},children:(0,r.jsx)(d.Z,{sx:{py:15,display:{md:"flex"},alignItems:{md:"center"},height:{md:"100vh"}},children:(0,r.jsxs)(m.Z,{container:!0,spacing:3,children:[(0,r.jsx)(m.Z,{xs:12,md:6,lg:5,children:(0,r.jsxs)(l.Z,{sx:{textAlign:{xs:"center",md:"unset"}},children:[(0,r.jsxs)(x.Z,{variant:"h1",children:["Free",(0,r.jsx)(a.Z,{component:"span",sx:{color:"text.disabled"},children:" Online "}),(0,r.jsx)(a.Z,{component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:" Courses "}),"From The Experts"]}),(0,r.jsx)(x.Z,{sx:{color:"text.secondary",mt:3,mb:5},children:"Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros."}),(0,r.jsxs)(l.Z,{spacing:3,alignItems:"center",direction:{xs:"column",md:"row"},children:[(0,r.jsx)(c.Z,{color:"inherit",size:"large",variant:"contained",children:"Ready Start"}),(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{typography:"h6"},children:[(0,r.jsx)(C.Z,{size:"medium",color:"info",onClick:o.onTrue,sx:{mr:1},children:(0,r.jsx)(f.Z,{width:24,icon:"carbon:play"})}),"Watch Video"]})]}),(0,r.jsx)(p.Z,{sx:{borderStyle:"dashed",mt:8,mb:6}}),(0,r.jsx)(l.Z,{direction:"row",spacing:{xs:3,sm:10},justifyContent:{xs:"center",md:"unset"},children:ea.map(e=>(0,r.jsxs)(l.Z,{spacing:.5,sx:{position:"relative"},children:[(0,r.jsx)(a.Z,{sx:{top:8,left:-4,width:24,height:24,opacity:.24,borderRadius:"50%",position:"absolute",bgcolor:"".concat(e.color,".main")}}),(0,r.jsxs)(x.Z,{variant:"h3",children:[(0,S.v1)(e.value),"+"]}),(0,r.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.label})]},e.value))})]})}),t&&(0,r.jsx)(m.Z,{xs:12,md:6,lg:7,children:(0,r.jsx)(en,{})})]})})}),(0,r.jsx)(ei.x,{open:o.value,onClose:o.onFalse,videoPath:s.QJ.video(0)})]})}function ec(){let e=(0,z.F)("up","md");return(0,r.jsxs)(d.Z,{sx:{py:{xs:8,md:15}},children:[(0,r.jsx)(x.Z,{variant:"overline",sx:{display:"block",color:"primary.main",mb:{xs:2,md:10}},children:"Nullam accumsan lorem in dui."}),(0,r.jsxs)(m.Z,{container:!0,spacing:3,alignItems:{md:"center"},justifyContent:{md:"space-between"},children:[e&&(0,r.jsx)(m.Z,{xs:12,md:6,lg:5,children:(0,r.jsx)(j.Z,{alt:"about",src:"/assets/images/course/course_6.jpg",ratio:"4/6",sx:{borderRadius:2}})}),(0,r.jsxs)(m.Z,{xs:12,md:6,lg:6,children:[(0,r.jsx)(x.Z,{variant:"h3",sx:{mb:3},children:"Phasellus gravida semper nisi. Vestibulum rutrum"}),(0,r.jsx)(x.Z,{sx:{color:"text.secondary"},children:"Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos."}),(0,r.jsxs)(l.Z,{direction:{xs:"column",md:"row"},spacing:{xs:5,md:10},sx:{mt:{xs:8,md:10}},children:[(0,r.jsxs)(l.Z,{spacing:3,children:[(0,r.jsx)(a.Z,{sx:{width:24,height:3,bgcolor:"primary.main"}}),(0,r.jsx)(x.Z,{sx:{color:"text.secondary"},children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"})]}),(0,r.jsxs)(l.Z,{spacing:3,children:[(0,r.jsx)(a.Z,{sx:{width:24,height:3,bgcolor:"primary.main"}}),(0,r.jsx)(x.Z,{sx:{color:"text.secondary"},children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"})]})]})]})]})]})}function ed(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(el,{}),(0,r.jsx)(ec,{}),(0,r.jsx)(y,{}),(0,r.jsx)(h.Z,{})]})}o(20238),o(59253),o(18687),o(97720),i().array,i().shape({name:i().string,totalStudents:i().number}),o(15475),o(66643),i().array}},function(e){e.O(0,[4331,9164,9445,1396,4351,7842,8566,8553,2301,4157,6640,7981,4719,5590,1349,4816,9594,4165,6668,256,29,7478,4938,1744],function(){return e(e.s=24479)}),_N_E=e.O()}]);