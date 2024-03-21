"use strict";exports.id=5755,exports.ids=[5755],exports.modules={65755:(e,a,t)=>{t.d(a,{Z:()=>k});var o=t(51848),l=t(65651),r=t(3729),i=t(56815),n=t(10581),c=t(65575),s=t(92476),p=t(95344);let d=(0,s.Z)((0,p.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var v=t(3722),g=t(85866),Z=t(68359),m=t(93139),$=t(39448),u=t(49149);let b=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],h=e=>{let{classes:a,disabled:t,size:o,color:l,iconColor:r,onDelete:i,clickable:c,variant:s}=e,p={root:["root",s,t&&"disabled",`size${(0,g.Z)(o)}`,`color${(0,g.Z)(l)}`,c&&"clickable",c&&`clickableColor${(0,g.Z)(l)}`,i&&"deletable",i&&`deletableColor${(0,g.Z)(l)}`,`${s}${(0,g.Z)(l)}`],label:["label",`label${(0,g.Z)(o)}`],avatar:["avatar",`avatar${(0,g.Z)(o)}`,`avatarColor${(0,g.Z)(l)}`],icon:["icon",`icon${(0,g.Z)(o)}`,`iconColor${(0,g.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,g.Z)(o)}`,`deleteIconColor${(0,g.Z)(l)}`,`deleteIcon${(0,g.Z)(s)}Color${(0,g.Z)(l)}`]};return(0,n.Z)(p,u.z,a)},f=(0,$.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e,{color:o,iconColor:l,clickable:r,onDelete:i,size:n,variant:c}=t;return[{[`& .${u.Z.avatar}`]:a.avatar},{[`& .${u.Z.avatar}`]:a[`avatar${(0,g.Z)(n)}`]},{[`& .${u.Z.avatar}`]:a[`avatarColor${(0,g.Z)(o)}`]},{[`& .${u.Z.icon}`]:a.icon},{[`& .${u.Z.icon}`]:a[`icon${(0,g.Z)(n)}`]},{[`& .${u.Z.icon}`]:a[`iconColor${(0,g.Z)(l)}`]},{[`& .${u.Z.deleteIcon}`]:a.deleteIcon},{[`& .${u.Z.deleteIcon}`]:a[`deleteIcon${(0,g.Z)(n)}`]},{[`& .${u.Z.deleteIcon}`]:a[`deleteIconColor${(0,g.Z)(o)}`]},{[`& .${u.Z.deleteIcon}`]:a[`deleteIcon${(0,g.Z)(c)}Color${(0,g.Z)(o)}`]},a.root,a[`size${(0,g.Z)(n)}`],a[`color${(0,g.Z)(o)}`],r&&a.clickable,r&&"default"!==o&&a[`clickableColor${(0,g.Z)(o)})`],i&&a.deletable,i&&"default"!==o&&a[`deletableColor${(0,g.Z)(o)}`],a[c],a[`${c}${(0,g.Z)(o)}`]]}})(({theme:e,ownerState:a})=>{let t="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,l.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${u.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${u.Z.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${u.Z.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${u.Z.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${u.Z.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${u.Z.icon}`]:(0,l.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,l.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:t},"default"!==a.color&&{color:"inherit"})),[`& .${u.Z.deleteIcon}`]:(0,l.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,c.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,c.Fq)(e.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${u.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{[`&.${u.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>(0,l.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${u.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&"default"!==a.color&&{[`&:hover, &.${u.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>(0,l.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${u.Z.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${u.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${u.Z.avatar}`]:{marginLeft:4},[`& .${u.Z.avatarSmall}`]:{marginLeft:2},[`& .${u.Z.icon}`]:{marginLeft:4},[`& .${u.Z.iconSmall}`]:{marginLeft:2},[`& .${u.Z.deleteIcon}`]:{marginRight:5},[`& .${u.Z.deleteIconSmall}`]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].main,.7)}`,[`&.${u.Z.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${u.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${u.Z.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),C=(0,$.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:t}=e,{size:o}=t;return[a.label,a[`label${(0,g.Z)(o)}`]]}})(({ownerState:e})=>(0,l.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===e.variant&&{paddingLeft:11,paddingRight:11},"small"===e.size&&{paddingLeft:8,paddingRight:8},"small"===e.size&&"outlined"===e.variant&&{paddingLeft:7,paddingRight:7}));function y(e){return"Backspace"===e.key||"Delete"===e.key}let k=r.forwardRef(function(e,a){let t=(0,m.Z)({props:e,name:"MuiChip"}),{avatar:n,className:c,clickable:s,color:g="default",component:$,deleteIcon:u,disabled:k=!1,icon:x,label:I,onClick:R,onDelete:S,onKeyDown:z,onKeyUp:O,size:w="medium",variant:L="filled",tabIndex:F,skipFocusWhenDisabled:T=!1}=t,V=(0,o.Z)(t,b),N=r.useRef(null),q=(0,v.Z)(N,a),D=e=>{e.stopPropagation(),S&&S(e)},E=!1!==s&&!!R||s,j=E||S?Z.Z:$||"div",K=(0,l.Z)({},t,{component:j,disabled:k,size:w,color:g,iconColor:r.isValidElement(x)&&x.props.color||g,onDelete:!!S,clickable:E,variant:L}),M=h(K),P=j===Z.Z?(0,l.Z)({component:$||"div",focusVisibleClassName:M.focusVisible},S&&{disableRipple:!0}):{},W=null;S&&(W=u&&r.isValidElement(u)?r.cloneElement(u,{className:(0,i.Z)(u.props.className,M.deleteIcon),onClick:D}):(0,p.jsx)(d,{className:(0,i.Z)(M.deleteIcon),onClick:D}));let A=null;n&&r.isValidElement(n)&&(A=r.cloneElement(n,{className:(0,i.Z)(M.avatar,n.props.className)}));let B=null;return x&&r.isValidElement(x)&&(B=r.cloneElement(x,{className:(0,i.Z)(M.icon,x.props.className)})),(0,p.jsxs)(f,(0,l.Z)({as:j,className:(0,i.Z)(M.root,c),disabled:!!E&&!!k||void 0,onClick:R,onKeyDown:e=>{e.currentTarget===e.target&&y(e)&&e.preventDefault(),z&&z(e)},onKeyUp:e=>{e.currentTarget===e.target&&(S&&y(e)?S(e):"Escape"===e.key&&N.current&&N.current.blur()),O&&O(e)},ref:q,tabIndex:T&&k?-1:F,ownerState:K},P,V,{children:[A||B,(0,p.jsx)(C,{className:(0,i.Z)(M.label),ownerState:K,children:I}),W]}))})}};