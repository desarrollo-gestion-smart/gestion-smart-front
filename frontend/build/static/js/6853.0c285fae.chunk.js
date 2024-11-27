"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[6853],{96853:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n=r(72791),o=r(13967),i=r(56890),a=r(35855),c=r(68745),s=r(94454),l=r(80720),d=r(697),h=r(20890),p=r(34663),m=r(97639),x=r(13400),u=r(39504),v=r(61889),Z=r(48550),j=r(63466),g=r(39281),f=r(79836),z=r(53382),S=r(5446),b=r(86603),y=r(79894),C=r(23735),k=r(36517),w=r(65373),M=r(27247),P=r(8331),H=r(93183),I=r(37403),L=r(5403),T=r(57436),V=r(31675),$=r(80184);function R(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0}const D=(e,t)=>"desc"===e?(e,r)=>R(e,r,t):(e,r)=>-R(e,r,t);function N(e,t){const r=e.map(((e,t)=>[e,t]));return r.sort(((e,r)=>{const n=t(e[0],r[0]);return 0!==n?n:e[1]-r[1]})),r.map((e=>e[0]))}const A=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Customer Name",align:"left"},{id:"company",numeric:!0,label:"Branch",align:"left"},{id:"type",numeric:!0,label:"Payment Type",align:"left"},{id:"qty",numeric:!0,label:"Quantity",align:"right"},{id:"date",numeric:!0,label:"Registered",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function O(e){let{onSelectAllClick:t,order:r,orderBy:n,numSelected:o,rowCount:p,onRequestSort:m,theme:x,selected:u}=e;return(0,$.jsx)(i.Z,{children:(0,$.jsxs)(a.Z,{children:[(0,$.jsx)(c.Z,{padding:"checkbox",sx:{pl:3},children:(0,$.jsx)(s.Z,{color:"primary",indeterminate:o>0&&o<p,checked:p>0&&o===p,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),o>0&&(0,$.jsx)(c.Z,{padding:"none",colSpan:8,children:(0,$.jsx)(B,{numSelected:u.length})}),o<=0&&A.map((e=>{return(0,$.jsx)(c.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:n===e.id&&r,children:(0,$.jsxs)(l.Z,{active:n===e.id,direction:n===e.id?r:"asc",onClick:(t=e.id,e=>{m(e,t)}),children:[e.label,n===e.id?(0,$.jsx)(d.Z,{component:"span",sx:b.Z,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),o<=0&&(0,$.jsx)(c.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,$.jsx)(h.Z,{variant:"subtitle1",sx:{color:"dark"===x.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}const B=e=>{let{numSelected:t}=e;return(0,$.jsxs)(p.Z,{sx:{p:0,pl:1,pr:1,...t>0&&{color:e=>e.palette.secondary.main}},children:[t>0?(0,$.jsxs)(h.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,$.jsx)(h.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,$.jsx)(d.Z,{sx:{flexGrow:1}}),t>0&&(0,$.jsx)(m.Z,{title:"Delete",children:(0,$.jsx)(x.Z,{size:"large",children:(0,$.jsx)(M.Z,{fontSize:"small"})})})]})},q=()=>{const e=(0,o.Z)(),t=(0,k.I0)(),[r,i]=n.useState("asc"),[l,d]=n.useState("calories"),[p,b]=n.useState([]),[M,R]=n.useState(0),[A,B]=n.useState(5),[q,E]=n.useState(""),[F,_]=n.useState([]),{orders:G}=(0,k.v9)((e=>e.customer));n.useEffect((()=>{t((0,w.AU)())}),[t]),n.useEffect((()=>{_(G)}),[G]);const Q=(e,t)=>{const r=p.indexOf(t);let n=[];-1===r?n=n.concat(p,t):0===r?n=n.concat(p.slice(1)):r===p.length-1?n=n.concat(p.slice(0,-1)):r>0&&(n=n.concat(p.slice(0,r),p.slice(r+1))),b(n)},U=M>0?Math.max(0,(1+M)*A-F.length):0;return(0,$.jsxs)(C.Z,{title:"Order List",content:!1,children:[(0,$.jsx)(u.Z,{children:(0,$.jsxs)(v.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,$.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,$.jsx)(Z.Z,{InputProps:{startAdornment:(0,$.jsx)(j.Z,{position:"start",children:(0,$.jsx)(L.Z,{fontSize:"small"})})},onChange:e=>{const t=null===e||void 0===e?void 0:e.target.value;if(E(t||""),t){const e=F.filter((e=>{let r=!0;let n=!1;return["name","company","type","qty","id"].forEach((r=>{e[r].toString().toLowerCase().includes(t.toString().toLowerCase())&&(n=!0)})),n||(r=!1),r}));_(e)}else _(G)},placeholder:"Search Order",value:q,size:"small"})}),(0,$.jsxs)(v.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,$.jsx)(m.Z,{title:"Copy",children:(0,$.jsx)(x.Z,{size:"large",children:(0,$.jsx)(I.Z,{})})}),(0,$.jsx)(m.Z,{title:"Print",children:(0,$.jsx)(x.Z,{size:"large",children:(0,$.jsx)(H.Z,{})})}),(0,$.jsx)(m.Z,{title:"Filter",children:(0,$.jsx)(x.Z,{size:"large",children:(0,$.jsx)(P.Z,{})})})]})]})}),(0,$.jsx)(g.Z,{children:(0,$.jsxs)(f.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,$.jsx)(O,{numSelected:p.length,order:r,orderBy:l,onSelectAllClick:e=>{if(e.target.checked)if(p.length>0)b([]);else{const e=F.map((e=>e.name));b(e)}else b([])},onRequestSort:(e,t)=>{i(l===t&&"asc"===r?"desc":"asc"),d(t)},rowCount:F.length,theme:e,selected:p}),(0,$.jsxs)(z.Z,{children:[N(F,D(r,l)).slice(M*A,M*A+A).map(((t,r)=>{if("number"===typeof t)return null;const n=(o=t.name,-1!==p.indexOf(o));var o;const i=`enhanced-table-checkbox-${r}`;return(0,$.jsxs)(a.Z,{hover:!0,role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[(0,$.jsx)(c.Z,{padding:"checkbox",sx:{pl:3},onClick:e=>Q(0,t.name),children:(0,$.jsx)(s.Z,{color:"primary",checked:n,inputProps:{"aria-labelledby":i}})}),(0,$.jsx)(c.Z,{component:"th",id:i,scope:"row",onClick:e=>Q(0,t.name),sx:{cursor:"pointer"},children:(0,$.jsxs)(h.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ","#",t.id," "]})}),(0,$.jsx)(c.Z,{component:"th",id:i,scope:"row",onClick:e=>Q(0,t.name),sx:{cursor:"pointer"},children:(0,$.jsxs)(h.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]})}),(0,$.jsx)(c.Z,{children:t.company}),(0,$.jsx)(c.Z,{children:t.type}),(0,$.jsx)(c.Z,{align:"right",children:t.qty}),(0,$.jsx)(c.Z,{align:"center",children:t.date}),(0,$.jsxs)(c.Z,{align:"center",children:[1===t.status&&(0,$.jsx)(y.Z,{label:"Complete",size:"small",chipcolor:"success"}),2===t.status&&(0,$.jsx)(y.Z,{label:"Pending",size:"small",chipcolor:"orange"}),3===t.status&&(0,$.jsx)(y.Z,{label:"Processing",size:"small",chipcolor:"primary"})]}),(0,$.jsxs)(c.Z,{align:"center",sx:{pr:3},children:[(0,$.jsx)(x.Z,{color:"primary",size:"large","aria-label":"view",children:(0,$.jsx)(T.Z,{sx:{fontSize:"1.3rem"}})}),(0,$.jsx)(x.Z,{color:"secondary",size:"large","aria-label":"edit",children:(0,$.jsx)(V.Z,{sx:{fontSize:"1.3rem"}})})]})]},r)})),U>0&&(0,$.jsx)(a.Z,{style:{height:53*U},children:(0,$.jsx)(c.Z,{colSpan:6})})]})]})}),(0,$.jsx)(S.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:F.length,rowsPerPage:A,page:M,onPageChange:(e,t)=>{R(t)},onRowsPerPageChange:e=>{B(parseInt(null===e||void 0===e?void 0:e.target.value,10)),R(0)}})]})}},27247:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},31675:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)([(0,i.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.Z=a},37403:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)([(0,i.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.Z=a},8331:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.Z=a},93183:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)([(0,i.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,i.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,i.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,i.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.Z=a},5403:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=a},57436:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),i=r(80184),a=(0,o.default)([(0,i.jsx)("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"},"1")],"VisibilityTwoTone");t.Z=a},94454:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(63366),o=r(87462),i=r(72791),a=r(59278),c=r(94419),s=r(54131),l=r(97278),d=r(74223),h=r(80184);const p=(0,d.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var u=r(14036),v=r(61020),Z=r(66934),j=r(15070),g=r(75878),f=r(21217);function z(e){return(0,f.ZP)("MuiCheckbox",e)}const S=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,Z.ZP)(l.Z,{shouldForwardProp:e=>(0,j.Z)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,t[`size${(0,u.Z)(r.size)}`],"default"!==r.color&&t[`color${(0,u.Z)(r.color)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${S.checked}, &.${S.indeterminate}`]:{color:(t.vars||t).palette[r.color].main},[`&.${S.disabled}`]:{color:(t.vars||t).palette.action.disabled}})})),C=(0,h.jsx)(m,{}),k=(0,h.jsx)(p,{}),w=(0,h.jsx)(x,{}),M=i.forwardRef((function(e,t){var r,s;const l=(0,v.i)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=C,color:p="primary",icon:m=k,indeterminate:x=!1,indeterminateIcon:Z=w,inputProps:j,size:g="medium",className:f}=l,S=(0,n.Z)(l,b),M=x?Z:m,P=x?Z:d,H=(0,o.Z)({},l,{color:p,indeterminate:x,size:g}),I=(e=>{const{classes:t,indeterminate:r,color:n,size:i}=e,a={root:["root",r&&"indeterminate",`color${(0,u.Z)(n)}`,`size${(0,u.Z)(i)}`]},s=(0,c.Z)(a,z,t);return(0,o.Z)({},t,s)})(H);return(0,h.jsx)(y,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":x},j),icon:i.cloneElement(M,{fontSize:null!=(r=M.props.fontSize)?r:g}),checkedIcon:i.cloneElement(P,{fontSize:null!=(s=P.props.fontSize)?s:g}),ownerState:H,ref:t,className:(0,a.Z)(I.root,f)},S,{classes:I}))}))},80720:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(63366),o=r(87462),i=r(94419),a=r(59278),c=r(72791),s=r(95080),l=r(74223),d=r(80184);const h=(0,l.Z)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");var p=r(66934),m=r(61020),x=r(14036),u=r(75878),v=r(21217);function Z(e){return(0,v.ZP)("MuiTableSortLabel",e)}const j=(0,u.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],f=(0,p.ZP)(s.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.active&&t.active]}})((e=>{let{theme:t}=e;return{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${j.icon}`]:{opacity:.5}},[`&.${j.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${j.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}}})),z=(0,p.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.icon,t[`iconDirection${(0,x.Z)(r.direction)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===r.direction&&{transform:"rotate(0deg)"},"asc"===r.direction&&{transform:"rotate(180deg)"})})),S=c.forwardRef((function(e,t){const r=(0,m.i)({props:e,name:"MuiTableSortLabel"}),{active:c=!1,children:s,className:l,direction:p="asc",hideSortIcon:u=!1,IconComponent:v=h}=r,j=(0,n.Z)(r,g),S=(0,o.Z)({},r,{active:c,direction:p,hideSortIcon:u,IconComponent:v}),b=(e=>{const{classes:t,direction:r,active:n}=e,o={root:["root",n&&"active"],icon:["icon",`iconDirection${(0,x.Z)(r)}`]};return(0,i.Z)(o,Z,t)})(S);return(0,d.jsxs)(f,(0,o.Z)({className:(0,a.Z)(b.root,l),component:"span",disableRipple:!0,ownerState:S,ref:t},j,{children:[s,u&&!c?null:(0,d.jsx)(z,{as:v,className:(0,a.Z)(b.icon),ownerState:S})]}))}))}}]);
//# sourceMappingURL=6853.0c285fae.chunk.js.map