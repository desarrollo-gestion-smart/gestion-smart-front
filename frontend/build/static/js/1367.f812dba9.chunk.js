"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[1367],{91367:(e,i,n)=>{n.r(i),n.d(i,{default:()=>je});var r=n(72791),s=n(13967),t=n(39281),l=n(79836),a=n(56890),o=n(35855),d=n(68745),c=n(97639),h=n(24518),x=n(53382),m=n(86631),p=n(73974),u=n(697),j=n(61889),Z=n(20890),g=n(48550),v=n(84648),b=n(68096),y=n(38289),f=n(85523),w=n(61419),P=n(58406),I=n(23786),S=n(60579),C=n(71652),D=n(21193),z=n(8007),k=n(33545),M=n(92506),W=n(81846),T=n(15542),A=n(87204),O=n(36517),H=n(33608),R=n(80184);const V=new k.Chance,E=n(5242),F=z.Ry({title:z.Z_().required("User story title is required"),dueDate:z.hT()}),_=e=>{let{open:i,handleDrawerOpen:n}=e;const r=(0,O.I0)(),s=(0,O.v9)((e=>e.kanban)),{profiles:t,columns:l,userStory:a,userStoryOrder:o}=s,d=(0,M.TA)({initialValues:{id:`${V.integer({min:1e3,max:9999})}`,title:"",assign:null,columnId:"",priority:"low",dueDate:new Date,acceptance:"",description:"",commentIds:"",image:!1,itemIds:[]},validationSchema:F,onSubmit:e=>{r((0,H.kh)(e,a,o)),r((0,A.ss)({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})),n()}});return(0,R.jsx)(p.ZP,{sx:{ml:i?3:0,flexShrink:0,zIndex:1200,overflowX:"hidden",width:{xs:320,md:450},"& .MuiDrawer-paper":{height:"100vh",width:{xs:320,md:450},position:"fixed",border:"none",borderRadius:"0px"}},variant:"temporary",anchor:"right",open:i,ModalProps:{keepMounted:!0},onClose:n,children:i&&(0,R.jsx)(u.Z,{sx:{p:3},children:(0,R.jsx)("form",{onSubmit:d.handleSubmit,children:(0,R.jsx)(C._,{dateAdapter:S.H,children:(0,R.jsxs)(j.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(Z.Z,{variant:"h4",children:"Add Story"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(g.Z,{fullWidth:!0,id:"title",name:"title",label:"Title",value:d.values.title,onChange:d.handleChange,error:d.touched.title&&Boolean(d.errors.title),helperText:d.touched.title&&d.errors.title})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Assign to:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(j.ZP,{container:!0,justifyContent:"flex-start",children:(0,R.jsx)(v.Z,{id:"assign",value:t.find((e=>e.id===d.values.assign))||null,onChange:(e,i)=>d.setFieldValue("assign",null===i||void 0===i?void 0:i.id),options:t,fullWidth:!0,autoHighlight:!0,getOptionLabel:e=>e.name,isOptionEqualToValue:e=>e.id===d.values.assign,renderOption:(e,i)=>(0,R.jsxs)(u.Z,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...e,children:[(0,R.jsx)("img",{loading:"lazy",width:"20",src:E(`./${i.avatar}`),alt:""}),i.name]}),renderInput:e=>(0,R.jsx)(g.Z,{...e,label:"Choose a assignee",inputProps:{...e.inputProps,autoComplete:"new-password"}})})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Prioritize:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(b.Z,{children:(0,R.jsxs)(y.Z,{row:!0,"aria-label":"color",value:d.values.priority,onChange:d.handleChange,name:"priority",id:"priority",children:[(0,R.jsx)(f.Z,{value:"low",control:(0,R.jsx)(w.Z,{color:"primary",sx:{color:"primary.main"}}),label:"Low"}),(0,R.jsx)(f.Z,{value:"medium",control:(0,R.jsx)(w.Z,{color:"warning",sx:{color:"warning.main"}}),label:"Medium"}),(0,R.jsx)(f.Z,{value:"high",control:(0,R.jsx)(w.Z,{color:"error",sx:{color:"error.main"}}),label:"High"})]})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Due date:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(D.$,{label:"Due Date",value:d.values.dueDate,format:"dd/MM/yyyy",onChange:e=>{d.setFieldValue("dueDate",e)},slotProps:{textField:{fullWidth:!0}}})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Acceptance:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(g.Z,{fullWidth:!0,id:"acceptance",name:"acceptance",multiline:!0,rows:3,value:d.values.acceptance,onChange:d.handleChange,error:d.touched.acceptance&&Boolean(d.errors.acceptance),helperText:d.touched.acceptance&&d.errors.acceptance})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Description:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(g.Z,{fullWidth:!0,id:"description",name:"description",multiline:!0,rows:3,value:d.values.description,onChange:d.handleChange,error:d.touched.description&&Boolean(d.errors.description),helperText:d.touched.description&&d.errors.description})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"State:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(b.Z,{fullWidth:!0,children:(0,R.jsx)(P.Z,{id:"columnId",name:"columnId",displayEmpty:!0,value:d.values.columnId,onChange:d.handleChange,inputProps:{"aria-label":"Without label"},children:l.map(((e,i)=>(0,R.jsx)(I.Z,{value:e.id,children:e.title},i)))})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(W.Z,{attachments:[]})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(T.Z,{children:(0,R.jsx)(h.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Save"})})})]})})})})})};var q=n(36314),B=n(13400),L=n(50533),N=n(95080),$=n(65117),K=n(56125),X=n(16386);const G=new k.Chance,U=n(5242),J=z.Ry({title:z.Z_().required("Task title is required"),dueDate:z.hT()}),Q=e=>{let{open:i,handleDrawerOpen:n,storyId:r}=e;const s=(0,O.I0)(),{profiles:t,columns:l,userStory:a,items:o}=(0,O.v9)((e=>e.kanban)),d=(0,M.TA)({initialValues:{id:`${G.integer({min:1e3,max:9999})}`,title:"",assign:null,priority:"low",dueDate:new Date,description:"",commentIds:"",image:!1,storyId:"",columnId:l[0].id},validationSchema:J,onSubmit:e=>{const i={id:e.id,title:e.title,assign:e.assign,priority:e.priority,dueDate:e.dueDate?new Date(e.dueDate):new Date,description:e.description,commentIds:e.commentIds,image:e.image};s((0,H.jX)(e.columnId,l,i,o,r,a)),s((0,A.ss)({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})),n()}});return(0,R.jsx)(p.ZP,{sx:{ml:i?3:0,flexShrink:0,zIndex:1200,overflowX:"hidden",width:{xs:320,md:450},"& .MuiDrawer-paper":{height:"100vh",width:{xs:320,md:450},position:"fixed",border:"none",borderRadius:"0px"}},variant:"temporary",anchor:"right",open:i,ModalProps:{keepMounted:!0},onClose:n,children:i&&(0,R.jsx)(u.Z,{sx:{p:3},children:(0,R.jsx)("form",{onSubmit:d.handleSubmit,children:(0,R.jsx)(C._,{dateAdapter:S.H,children:(0,R.jsxs)(j.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(Z.Z,{variant:"h4",children:"Add Task"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(g.Z,{fullWidth:!0,id:"title",name:"title",label:"Title",value:d.values.title,onChange:d.handleChange,error:d.touched.title&&Boolean(d.errors.title),helperText:d.touched.title&&d.errors.title})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Assign to:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(j.ZP,{container:!0,justifyContent:"flex-start",children:(0,R.jsx)(v.Z,{id:"assign",value:t.find((e=>e.id===d.values.assign))||null,onChange:(e,i)=>{d.setFieldValue("assign",null===i||void 0===i?void 0:i.id)},options:t,fullWidth:!0,autoHighlight:!0,getOptionLabel:e=>e.name,isOptionEqualToValue:e=>e.id===d.values.assign,renderOption:(e,i)=>(0,R.jsxs)(u.Z,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...e,children:[(0,R.jsx)("img",{loading:"lazy",width:"20",src:U(`./${i.avatar}`),alt:""}),i.name]}),renderInput:e=>(0,R.jsx)(g.Z,{...e,label:"Choose a assignee",inputProps:{...e.inputProps,autoComplete:"new-password"}})})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Prioritize:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(b.Z,{children:(0,R.jsxs)(y.Z,{row:!0,"aria-label":"color",value:d.values.priority,onChange:d.handleChange,name:"priority",id:"priority",children:[(0,R.jsx)(f.Z,{value:"low",control:(0,R.jsx)(w.Z,{color:"primary",sx:{color:"primary.main"}}),label:"Low"}),(0,R.jsx)(f.Z,{value:"medium",control:(0,R.jsx)(w.Z,{color:"warning",sx:{color:"warning.main"}}),label:"Medium"}),(0,R.jsx)(f.Z,{value:"high",control:(0,R.jsx)(w.Z,{color:"error",sx:{color:"error.main"}}),label:"High"})]})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Due date:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(D.$,{label:"Due Date",value:d.values.dueDate,format:"dd/MM/yyyy",onChange:e=>{d.setFieldValue("dueDate",e)},slotProps:{textField:{fullWidth:!0}}})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Description:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(g.Z,{fullWidth:!0,id:"description",name:"description",multiline:!0,rows:3,value:d.values.description,onChange:d.handleChange,error:d.touched.description&&Boolean(d.errors.description),helperText:d.touched.description&&d.errors.description})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"State:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(b.Z,{fullWidth:!0,children:(0,R.jsx)(P.Z,{id:"columnId",name:"columnId",displayEmpty:!0,value:d.values.columnId,onChange:d.handleChange,inputProps:{"aria-label":"Without label"},children:l.map(((e,i)=>(0,R.jsx)(I.Z,{value:e.id,children:e.title},i)))})})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:4,children:(0,R.jsx)(Z.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,sm:8,children:(0,R.jsx)(W.Z,{attachments:[]})})]})}),(0,R.jsx)(j.ZP,{item:!0,xs:12,children:(0,R.jsx)(T.Z,{children:(0,R.jsx)(h.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Save"})})})]})})})})})};var Y=n(66789),ee=n(28891),ie=n(79984),ne=n(74934),re=n(91705);const se=(e,i)=>{const n="dark"===i.palette.mode?i.palette.background.paper+90:i.palette.primary.light;return{backgroundColor:e?n:"transparent",userSelect:"none"}},te=e=>{let{itemId:i,index:n}=e;const t=(0,s.Z)(),l=(0,O.I0)(),{columns:a,items:c,profiles:h,userStory:x}=(0,O.v9)((e=>e.kanban)),p=c.filter((e=>e.id===i))[0],u=a.filter((e=>e.itemIds.filter((e=>e===p.id))[0]))[0],j=h.filter((e=>e.id===p.assign))[0],g=()=>{l((0,H.Gh)(i))},[v,b]=(0,r.useState)(null),y=e=>{b(null===e||void 0===e?void 0:e.currentTarget)},f=()=>{b(null)},[w,P]=(0,r.useState)(!1),S=e=>{P(!1),e&&(l((0,H.wz)(p.id,c,a,x)),l((0,A.ss)({open:!0,message:"Task Deleted successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})))};return(0,R.jsx)(m._l,{draggableId:p.id,index:n,children:(e,i)=>(0,R.jsxs)(o.Z,{hover:!0,...e.draggableProps,...e.dragHandleProps,ref:e.innerRef,sx:{"& th,& td":{whiteSpace:"nowrap"},"& .more-button":{opacity:0},":hover":{"& .more-button":{opacity:1}},...se(i.isDragging,t)},children:[(0,R.jsx)(d.Z,{sx:{pl:3,minWidth:120,width:120,height:46}}),(0,R.jsx)(d.Z,{sx:{width:110,minWidth:110},children:(0,R.jsxs)(q.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,R.jsx)(re.Z,{color:"primary",sx:{fontSize:"0.875rem"}}),(0,R.jsx)(Z.Z,{variant:"body2",children:p.id})]})}),(0,R.jsx)(d.Z,{sx:{maxWidth:"calc(100vw - 850px)",minWidth:140},component:"th",scope:"row",children:(0,R.jsx)(L.Z,{underline:"hover",color:"default",onClick:g,sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:p.title})}),(0,R.jsxs)(d.Z,{sx:{width:60,minWidth:60},children:[(0,R.jsx)(N.Z,{className:"more-button",sx:{borderRadius:"12px"},onClick:y,"aria-controls":"menu-comment","aria-haspopup":"true",children:(0,R.jsx)(B.Z,{component:"span",size:"small",disableRipple:!0,children:(0,R.jsx)(ne.Z,{fontSize:"inherit"})})}),(0,R.jsxs)($.Z,{id:"menu-comment",anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:f,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,R.jsx)(I.Z,{onClick:()=>{f(),g()},children:"Edit"}),(0,R.jsx)(I.Z,{onClick:()=>{f(),P(!0)},children:"Delete"})]}),(0,R.jsx)(ie.Z,{title:p.title,open:w,handleClose:S})]}),(0,R.jsx)(d.Z,{sx:{width:90,minWidth:90},children:u?u.title:"New"}),(0,R.jsx)(d.Z,{sx:{width:140,minWidth:140},children:j?j.name:""}),(0,R.jsx)(d.Z,{sx:{width:85,minWidth:85,textTransform:"capitalize"},children:p.priority}),(0,R.jsx)(d.Z,{sx:{width:120,minWidth:120},children:p.dueDate?(0,X.Z)(new Date(p.dueDate),"d MMM yyyy"):""})]},p.id)})};var le=n(95064),ae=n(85172),oe=n(5397),de=n(36442);const ce=(e,i,n)=>{const r="dark"===i.palette.mode?i.palette.background.default:i.palette.primary.light;return{backgroundColor:e||n?r:"transparent",userSelect:"none"}},he=(e,i)=>{const n="dark"===i.palette.mode?i.palette.background.default:i.palette.grey[100]+80;return{background:e?n:"transparent"}},xe=e=>{let{story:i,index:n}=e;const a=(0,s.Z)(),h=(0,O.I0)(),p=(0,O.v9)((e=>e.kanban)),{columns:j,profiles:g,userStory:v,userStoryOrder:b}=p,[y,f]=r.useState(!1),w=j.filter((e=>e.id===i.columnId))[0],P=g.filter((e=>e.id===i.assign))[0],[S,C]=(0,r.useState)(!1),D=()=>{C((e=>!e))},[z,k]=(0,r.useState)(!1),M=()=>{k((e=>!e))},[W,T]=(0,r.useState)(null),V=e=>{T(null===e||void 0===e?void 0:e.currentTarget)},E=()=>{T(null)},[F,_]=(0,r.useState)(!1),G=e=>{_(!1),e&&(h((0,H.LA)(i.id,v,b)),h((0,A.ss)({open:!0,message:"Task Deleted successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1})))};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m._l,{draggableId:i.id,index:n,children:(e,n)=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(o.Z,{hover:!0,...e.draggableProps,...e.dragHandleProps,ref:e.innerRef,sx:ce(n.isDragging,a,y),children:[(0,R.jsx)(d.Z,{sx:{pl:3,minWidth:120,width:120,height:46},children:(0,R.jsxs)(q.Z,{direction:"row",spacing:.25,alignItems:"center",children:[(0,R.jsx)(c.Z,{title:"Add Task",children:(0,R.jsx)(B.Z,{"aria-label":"expand row",size:"small",onClick:D,children:(0,R.jsx)(le.Z,{fontSize:"small",color:"primary"})})}),(0,R.jsx)(B.Z,{"aria-label":"expand row",size:"small",onClick:()=>f(!y),children:y?(0,R.jsx)(ae.Z,{fontSize:"small"}):(0,R.jsx)(oe.Z,{fontSize:"small"})})]})}),(0,R.jsx)(d.Z,{sx:{width:110,minWidth:110},children:(0,R.jsxs)(q.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,R.jsx)(de.Z,{color:"secondary",sx:{fontSize:"0.875rem"}}),(0,R.jsx)(Z.Z,{variant:"body2",children:i.id})]})}),(0,R.jsx)(d.Z,{sx:{maxWidth:"calc(100vw - 850px)",minWidth:140},component:"th",scope:"row",children:(0,R.jsx)(L.Z,{underline:"hover",color:"default",onClick:M,sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:i.title})}),(0,R.jsxs)(d.Z,{sx:{width:60,minWidth:60},children:[(0,R.jsx)(N.Z,{className:"more-button",sx:{borderRadius:"12px"},onClick:V,"aria-controls":"menu-comment","aria-haspopup":"true",children:(0,R.jsx)(B.Z,{component:"span",size:"small",disableRipple:!0,"aria-label":"more options",children:(0,R.jsx)(ne.Z,{fontSize:"inherit"})})}),(0,R.jsxs)($.Z,{id:"menu-comment",anchorEl:W,keepMounted:!0,open:Boolean(W),onClose:E,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,R.jsx)(I.Z,{onClick:()=>{E(),M()},children:"Edit"}),(0,R.jsx)(I.Z,{onClick:()=>{E(),_(!0)},children:"Delete"})]}),F&&(0,R.jsx)(ee.Z,{title:i.title,open:F,handleClose:G})]}),(0,R.jsx)(d.Z,{sx:{width:90,minWidth:90},children:w?w.title:""}),(0,R.jsx)(d.Z,{sx:{width:140,minWidth:140},children:P?P.name:""}),(0,R.jsx)(d.Z,{sx:{width:85,minWidth:85,textTransform:"capitalize"},children:i.priority}),(0,R.jsx)(d.Z,{sx:{width:120,minWidth:120},children:i.dueDate?(0,X.Z)(new Date(i.dueDate),"d MMM yyyy"):""})]}),(0,R.jsx)(m.bK,{droppableId:i.id,type:"item",children:(e,n)=>{var r;return(0,R.jsx)(o.Z,{ref:e.innerRef,...e.droppableProps,sx:he(n.isDraggingOver,a),children:(0,R.jsx)(d.Z,{style:{padding:0},colSpan:8,children:(0,R.jsx)(K.Z,{in:y,timeout:"auto",unmountOnExit:!0,children:y&&(0,R.jsx)(u.Z,{sx:{margin:0},children:(0,R.jsx)(t.Z,{children:(0,R.jsx)(l.Z,{size:"small","aria-label":"purchases",children:(0,R.jsxs)(x.Z,{children:[null===(r=i.itemIds)||void 0===r?void 0:r.map(((e,i)=>(0,R.jsx)(te,{itemId:e,index:i},e))),e.placeholder]})})})})})})})}})]})}),(0,R.jsx)(Y.Z,{story:i,open:z,handleDrawerOpen:()=>{k((e=>!e))}}),(0,R.jsx)(Q,{open:S,handleDrawerOpen:()=>{C((e=>!e))},storyId:i.id})]})};var me=n(84784),pe=n(42419);const ue=(e,i)=>({background:e?i.palette.secondary.light+50:"transparent"}),je=()=>{const e=(0,s.Z)(),i=(0,O.I0)(),n=(0,O.v9)((e=>e.kanban)),{userStory:p,userStoryOrder:u}=n,[j,Z]=(0,r.useState)(!1),g=()=>{Z((e=>!e))};return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(t.Z,{children:[(0,R.jsx)(m.Z5,{onDragEnd:e=>{let n;const{source:r,destination:s,draggableId:t,type:l}=e;if(!s)return;if(s.droppableId===r.droppableId&&s.index===r.index)return;if("user-story"===l){const e=Array.from(u);return e.splice(r.index,1),e.splice(null===s||void 0===s?void 0:s.index,0,t),void i((0,H.qG)(e))}const a=p.filter((e=>e.id===r.droppableId))[0],o=p.filter((e=>e.id===s.droppableId))[0];if(a===o){const e=Array.from(a.itemIds);e.splice(r.index,1),e.splice(s.index,0,t);const i={...a,itemIds:e};n=p.map((e=>e.id===i.id?i:e))}else{const e=Array.from(a.itemIds);e.splice(r.index,1);const i={...a,itemIds:e},l=Array.from(o.itemIds);l.splice(s.index,0,t);const d={...o,itemIds:l};n=p.map((e=>e.id===i.id?i:e.id===d.id?d:e))}i((0,H.CA)(n))},children:(0,R.jsx)(m.bK,{droppableId:"user-story",type:"user-story",children:(i,n)=>(0,R.jsxs)(l.Z,{size:"small","aria-label":"collapsible table",...i.droppableProps,ref:i.innerRef,sx:ue(n.isDraggingOver,e),children:[(0,R.jsx)(a.Z,{sx:{"& th,& td":{whiteSpace:"nowrap"}},children:(0,R.jsxs)(o.Z,{children:[(0,R.jsx)(d.Z,{sx:{pl:3},children:(0,R.jsx)(c.Z,{title:"Add User Story",children:(0,R.jsx)(h.Z,{variant:"contained",size:"small",color:"secondary",onClick:g,endIcon:(0,R.jsx)(pe.Z,{}),children:"ADD"})})}),(0,R.jsx)(d.Z,{children:"Id"}),(0,R.jsx)(d.Z,{children:"Title"}),(0,R.jsx)(d.Z,{}),(0,R.jsx)(d.Z,{children:"State"}),(0,R.jsx)(d.Z,{children:"Assigned To"}),(0,R.jsx)(d.Z,{children:"Priority"}),(0,R.jsx)(d.Z,{children:"Due Date"})]})}),(0,R.jsxs)(x.Z,{sx:{"& th,& td":{whiteSpace:"nowrap"}},children:[u.map(((e,i)=>{const n=p.filter((i=>i.id===e))[0];return(0,R.jsx)(xe,{story:n,index:i},n.id)})),i.placeholder]})]})})}),(0,R.jsx)(_,{open:j,handleDrawerOpen:()=>{Z((e=>!e))}}),(0,R.jsx)(me.Z,{})]})})}},42419:(e,i,n)=>{var r=n(64836);i.Z=void 0;var s=r(n(45649)),t=n(80184),l=(0,s.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");i.Z=l},95064:(e,i,n)=>{var r=n(64836);i.Z=void 0;var s=r(n(45649)),t=n(80184),l=(0,s.default)([(0,t.jsx)("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",opacity:".3"},"0"),(0,t.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"AddCircleTwoTone");i.Z=l},91705:(e,i,n)=>{var r=n(64836);i.Z=void 0;var s=r(n(45649)),t=n(80184),l=(0,s.default)([(0,t.jsx)("path",{d:"M5 5v14h14V5H5zm9 12H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",opacity:".3"},"0"),(0,t.jsx)("path",{d:"M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64S3 4.72 3 5v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"},"1")],"AssignmentTwoTone");i.Z=l},85172:(e,i,n)=>{var r=n(64836);i.Z=void 0;var s=r(n(45649)),t=n(80184),l=(0,s.default)((0,t.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");i.Z=l},5397:(e,i,n)=>{var r=n(64836);i.Z=void 0;var s=r(n(45649)),t=n(80184),l=(0,s.default)((0,t.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");i.Z=l},56890:(e,i,n)=>{n.d(i,{Z:()=>v});var r=n(87462),s=n(63366),t=n(72791),l=n(59278),a=n(94419),o=n(829),d=n(61020),c=n(66934),h=n(75878),x=n(21217);function m(e){return(0,x.ZP)("MuiTableHead",e)}(0,h.Z)("MuiTableHead",["root"]);var p=n(80184);const u=["className","component"],j=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,i)=>i.root})({display:"table-header-group"}),Z={variant:"head"},g="thead",v=t.forwardRef((function(e,i){const n=(0,d.i)({props:e,name:"MuiTableHead"}),{className:t,component:c=g}=n,h=(0,s.Z)(n,u),x=(0,r.Z)({},n,{component:c}),v=(e=>{const{classes:i}=e;return(0,a.Z)({root:["root"]},m,i)})(x);return(0,p.jsx)(o.Z.Provider,{value:Z,children:(0,p.jsx)(j,(0,r.Z)({as:c,className:(0,l.Z)(v.root,t),ref:i,role:c===g?null:"rowgroup",ownerState:x},h))})}))}}]);
//# sourceMappingURL=1367.f812dba9.chunk.js.map