"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2528],{77820:function(e,t,o){let r=o(2265).createContext({});t.Z=r},59500:function(e,t,o){o.d(t,{XS:function(){return O},ZP:function(){return S}});var r=o(13428),n=o(20791),i=o(2265),l=o(57042),a=o(95600),s=o(94269),u=o(43655),p=o(35843),c=o(87927),f=o(80494),h=o(53931),d=o(26649),v=o(37663),m=o(56176),Z=o(26931),P=o(18687),g=o(26520),y=o(25702);function b(e){return(0,y.Z)("MuiPopover",e)}(0,g.Z)("MuiPopover",["root","paper"]);var x=o(57437);let w=["onEntering"],E=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],z=["slotProps"];function k(e,t){let o=0;return"number"==typeof t?o=t:"center"===t?o=e.height/2:"bottom"===t&&(o=e.height),o}function C(e,t){let o=0;return"number"==typeof t?o=t:"center"===t?o=e.width/2:"right"===t&&(o=e.width),o}function T(e){return[e.horizontal,e.vertical].map(e=>"number"==typeof e?`${e}px`:e).join(" ")}function M(e){return"function"==typeof e?e():e}let R=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"]},b,t)},N=(0,p.ZP)(Z.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),O=(0,p.ZP)(P.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var S=i.forwardRef(function(e,t){var o,a,p;let Z=(0,c.Z)({props:e,name:"MuiPopover"}),{action:P,anchorEl:g,anchorOrigin:y={vertical:"top",horizontal:"left"},anchorPosition:b,anchorReference:S="anchorEl",children:H,className:L,container:j,elevation:W=8,marginThreshold:_=16,open:D,PaperProps:X={},slots:$,slotProps:A,transformOrigin:B={vertical:"top",horizontal:"left"},TransitionComponent:F=m.Z,transitionDuration:I="auto",TransitionProps:{onEntering:Y}={},disableScrollLock:q=!1}=Z,G=(0,n.Z)(Z.TransitionProps,w),J=(0,n.Z)(Z,E),K=null!=(o=null==A?void 0:A.paper)?o:X,Q=i.useRef(),U=(0,v.Z)(Q,K.ref),V=(0,r.Z)({},Z,{anchorOrigin:y,anchorReference:S,elevation:W,marginThreshold:_,externalPaperSlotProps:K,transformOrigin:B,TransitionComponent:F,transitionDuration:I,TransitionProps:G}),ee=R(V),et=i.useCallback(()=>{if("anchorPosition"===S)return b;let e=M(g),t=(e&&1===e.nodeType?e:(0,h.Z)(Q.current).body).getBoundingClientRect();return{top:t.top+k(t,y.vertical),left:t.left+C(t,y.horizontal)}},[g,y.horizontal,y.vertical,b,S]),eo=i.useCallback(e=>({vertical:k(e,B.vertical),horizontal:C(e,B.horizontal)}),[B.horizontal,B.vertical]),er=i.useCallback(e=>{let t={width:e.offsetWidth,height:e.offsetHeight},o=eo(t);if("none"===S)return{top:null,left:null,transformOrigin:T(o)};let r=et(),n=r.top-o.vertical,i=r.left-o.horizontal,l=n+t.height,a=i+t.width,s=(0,d.Z)(M(g)),u=s.innerHeight-_,p=s.innerWidth-_;if(null!==_&&n<_){let e=n-_;n-=e,o.vertical+=e}else if(null!==_&&l>u){let e=l-u;n-=e,o.vertical+=e}if(null!==_&&i<_){let e=i-_;i-=e,o.horizontal+=e}else if(a>p){let e=a-p;i-=e,o.horizontal+=e}return{top:`${Math.round(n)}px`,left:`${Math.round(i)}px`,transformOrigin:T(o)}},[g,S,et,eo,_]),[en,ei]=i.useState(D),el=i.useCallback(()=>{let e=Q.current;if(!e)return;let t=er(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,ei(!0)},[er]);i.useEffect(()=>(q&&window.addEventListener("scroll",el),()=>window.removeEventListener("scroll",el)),[g,q,el]),i.useEffect(()=>{D&&el()}),i.useImperativeHandle(P,()=>D?{updatePosition:()=>{el()}}:null,[D,el]),i.useEffect(()=>{if(!D)return;let e=(0,f.Z)(()=>{el()}),t=(0,d.Z)(g);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[g,D,el]);let ea=I;"auto"!==I||F.muiSupportAuto||(ea=void 0);let es=j||(g?(0,h.Z)(M(g)).body:void 0),eu=null!=(a=null==$?void 0:$.root)?a:N,ep=null!=(p=null==$?void 0:$.paper)?p:O,ec=(0,s.y)({elementType:ep,externalSlotProps:(0,r.Z)({},K,{style:en?K.style:(0,r.Z)({},K.style,{opacity:0})}),additionalProps:{elevation:W,ref:U},ownerState:V,className:(0,l.Z)(ee.paper,null==K?void 0:K.className)}),ef=(0,s.y)({elementType:eu,externalSlotProps:(null==A?void 0:A.root)||{},externalForwardedProps:J,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:es,open:D},ownerState:V,className:(0,l.Z)(ee.root,L)}),{slotProps:eh}=ef,ed=(0,n.Z)(ef,z);return(0,x.jsx)(eu,(0,r.Z)({},ed,!(0,u.X)(eu)&&{slotProps:eh,disableScrollLock:q},{children:(0,x.jsx)(F,(0,r.Z)({appear:!0,in:D,onEntering:(e,t)=>{Y&&Y(e,t),el()},onExited:()=>{ei(!1)},timeout:ea},G,{children:(0,x.jsx)(ep,(0,r.Z)({},ec,{children:H}))}))}))})},53931:function(e,t,o){var r=o(96278);t.Z=r.Z}}]);