"use strict";exports.id=8170,exports.ids=[8170],exports.modules={67497:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(95344),i=t(7470),s=t.n(i),o=t(3729),l=t(80773),a=t(84047),c=t(16854),d=t(59581);let x=(0,o.forwardRef)(({asLink:e,variant:r="body1",line:t=2,persistent:i=!1,children:s,sx:o,...x},h)=>{let{lineHeight:m}=function(e){let r=(0,c.Z)(),t=(0,d.z)(),n=r.breakpoints.up("xl"===t?"lg":t),i=Math.round(16*parseFloat((("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&r.typography[e][n]?r.typography[e][n]:r.typography[e]).fontSize)),s=Number(r.typography[e].lineHeight)*i,{fontWeight:o,letterSpacing:l}=r.typography[e];return{fontSize:i,lineHeight:s,fontWeight:o,letterSpacing:l}}(r),u={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",...i&&{height:m*t},...o};return e?n.jsx(l.Z,{color:"inherit",ref:h,variant:r,sx:{...u},...x,children:s}):n.jsx(a.Z,{ref:h,variant:r,sx:{...u},...x,children:s})});x.propTypes={asLink:s().bool,children:s().node,line:s().number,persistent:s().bool,sx:s().object,variant:s().oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"])};let h=x},94424:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(95344),i=t(56739),s=t(72833),o=t(47147),l=t(72663),a=t(84047),c=t(55015),d=t(43809),x=t(87236),h=t(62579);function m(){return n.jsx(i.Z,{sx:{py:{xs:10,md:15},overflow:"hidden",bgcolor:"primary.lighter"},children:n.jsx(l.Z,{children:(0,n.jsxs)(o.Z,{container:!0,spacing:{xs:5,md:3},alignItems:{md:"center"},justifyContent:{md:"space-between"},direction:{xs:"column-reverse",md:"row"},children:[(0,n.jsxs)(o.Z,{xs:12,md:5,sx:{textAlign:"center",color:"grey.800"},children:[n.jsx(a.Z,{variant:"h3",children:"Register Now Forget 20% Discount Every Courses"}),n.jsx(a.Z,{sx:{mt:2.5,mb:5},children:"Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu"}),n.jsx(d.ZP,{fullWidth:!0,placeholder:"Enter your email",endAdornment:n.jsx(c.Z,{position:"end",children:n.jsx(s.Z,{color:"primary",size:"large",variant:"contained",children:"Register"})}),sx:{pr:.5,pl:1.5,height:56,maxWidth:560,borderRadius:1,bgcolor:"common.white",transition:e=>e.transitions.create(["box-shadow"]),[`&.${x.Z.focused}`]:{boxShadow:e=>e.customShadows.z4}}})]}),n.jsx(o.Z,{xs:12,md:5,children:n.jsx(h.Z,{alt:"newsletter",src:"/assets/illustrations/illustration_newsletter.svg",sx:{maxWidth:366,mx:"auto"}})})]})})})}},93902:(e,r,t)=>{t.d(r,{Z:()=>j});var n=t(95344),i=t(7470),s=t.n(i),o=t(56739),l=t(80773),a=t(92742),c=t(9666),d=t(81997),x=t(86120),h=t(84047),m=t(6094),u=t(54001),p=t(38987),b=t(62579),g=t(80870),y=t(48280),Z=t(67497);function j({course:e,vertical:r}){let{slug:t,level:i,price:s,teachers:j,coverUrl:v,category:w,priceSale:f,bestSeller:S,totalHours:I,description:k,ratingNumber:N,totalReviews:F,totalStudents:D}=e;return(0,n.jsxs)(a.Z,{sx:{display:{sm:"flex"},"&:hover":{boxShadow:e=>e.customShadows.z24},...r&&{flexDirection:"column"}},children:[n.jsx(o.Z,{sx:{flexShrink:{sm:0}},children:n.jsx(b.Z,{alt:t,src:v,sx:{height:1,objectFit:"cover",width:{sm:240},...r&&{width:{sm:1}}}})}),S&&n.jsx(g.Z,{color:"warning",variant:"filled",sx:{top:12,left:12,position:"absolute",textTransform:"uppercase"},children:"Best Seller"}),(0,n.jsxs)(c.Z,{spacing:3,sx:{p:3},children:[(0,n.jsxs)(c.Z,{spacing:{xs:3,sm:r?3:1},children:[(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(h.Z,{variant:"overline",sx:{color:"primary.main"},children:w}),(0,n.jsxs)(h.Z,{variant:"h4",children:[f>0&&n.jsx(o.Z,{component:"span",sx:{mr:.5,color:"text.disabled",textDecoration:"line-through"},children:(0,p.e_)(f)}),(0,p.e_)(s)]})]}),(0,n.jsxs)(c.Z,{spacing:1,children:[n.jsx(l.Z,{component:u.r,href:m.H.eLearning.course,color:"inherit",children:n.jsx(Z.Z,{variant:"h6",line:1,children:t})}),n.jsx(Z.Z,{variant:"body2",color:"text.secondary",sx:{...r&&{display:{sm:"none"}}},children:k})]})]}),(0,n.jsxs)(c.Z,{spacing:1.5,direction:"row",alignItems:"center",flexWrap:"wrap",divider:n.jsx(x.Z,{orientation:"vertical",sx:{height:20,my:"auto"}}),children:[(0,n.jsxs)(c.Z,{spacing:.5,direction:"row",alignItems:"center",children:[n.jsx(y.Z,{icon:"carbon:star-filled",sx:{color:"warning.main"}}),n.jsx(o.Z,{sx:{typography:"h6"},children:Number.isInteger(N)?`${N}.0`:N}),F&&(0,n.jsxs)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,p.v1)(F)," reviews)"]})]}),(0,n.jsxs)(c.Z,{direction:"row",sx:{typography:"subtitle2"},children:[(0,p.v1)(D),n.jsx(o.Z,{component:"span",typography:"body2",sx:{ml:.5},children:"students"})]})]}),(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[n.jsx(d.Z,{src:j[0]?.avatarUrl}),n.jsx(h.Z,{variant:"body2",sx:{ml:1,mr:.5},children:j[0]?.name}),j?.length>0&&(0,n.jsxs)(l.Z,{underline:"always",color:"text.secondary",variant:"body2",children:["+ ",j?.length," teachers"]})]}),n.jsx(x.Z,{sx:{borderStyle:"dashed",display:{sm:"none"},...r&&{display:"block"}}}),(0,n.jsxs)(c.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",sx:{color:"text.disabled","& > *:not(:last-child)":{mr:2.5}},children:[(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{typography:"body2"},children:[n.jsx(y.Z,{icon:"carbon:time",sx:{mr:1}})," ",`${I} hours`]}),(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{typography:"body2"},children:[n.jsx(y.Z,{icon:"Beginner"===i&&"carbon:skill-level-basic"||"Intermediate"===i&&"carbon:skill-level-intermediate"||"carbon:skill-level-advanced",sx:{mr:1}}),i]})]})]})]})}j.propTypes={course:s().shape({slug:s().string,level:s().string,price:s().number,teachers:s().array,bestSeller:s().bool,category:s().string,coverUrl:s().string,priceSale:s().number,totalHours:s().number,description:s().string,ratingNumber:s().number,totalReviews:s().number,totalStudents:s().number}),vertical:s().bool}},38987:(e,r,t)=>{function n(){return{code:"en-US",currency:"USD"}}function i(e){let{code:r,currency:t}=n();if(!e)return"";let i=Number(e);return new Intl.NumberFormat(r,{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).format(i)}function s(e){let{code:r}=n();if(!e)return"";let t=Number(e);return new Intl.NumberFormat(r,{notation:"compact",maximumFractionDigits:2}).format(t).replace(/[A-Z]/g,e=>e.toLowerCase())}t.d(r,{e_:()=>i,v1:()=>s})}};