"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[3156],{98393:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(36314),i=t(20890),s=t(50533),a=t(80184);const o=()=>(0,a.jsx)(n.Z,{direction:"row",justifyContent:"space-between",children:(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"#",target:"_blank",underline:"hover",children:"version 1.0.6"})})},45290:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(697),i=t(23735),s=t(80184);const a=e=>{let{children:r,...t}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,children:(0,s.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:r})})}},33914:(e,r,t)=>{t.d(r,{Z:()=>n});const n=(0,t(66934).ZP)("div")((e=>{let{theme:r}=e;return{backgroundColor:"dark"===r.palette.mode?r.palette.background.default:r.palette.grey[100],minHeight:"100vh"}}))},19825:(e,r,t)=>{t.d(r,{Z:()=>Z});var n=t(72791),i=t(36517),s=t(57689),a=t(13967),o=t(43706),l=t(61889),c=t(48550),d=t(24518),m=t(20890),x=t(81502),u=t(697),h=t(8007),p=t(92506),g=t(80184);const Z=e=>{let{...r}=e;const t=(0,a.Z)(),Z=((0,s.s0)(),(0,i.I0)(),(0,o.Z)(t.breakpoints.down("md"))),[j,b]=(0,n.useState)(!1),f=()=>b(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,g.jsx)(l.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center"})}),(0,g.jsx)(p.J9,{initialValues:{email:"",password:"",firstName:"",lastName:"",submit:null},validationSchema:h.Ry().shape({email:h.Z_().email("Debe ser un correo v\xe1lido").max(255).required("El correo es obligatorio"),password:h.Z_().max(255).required("La contrase\xf1a es obligatoria"),firstName:h.Z_().max(255).required("El nombre es obligatorio"),lastName:h.Z_().max(255).required("El apellido es obligatorio")}),onSubmit:async(e,r)=>{let{setErrors:t,setStatus:n,setSubmitting:i}=r;try{const r=await fetch("https://gestion-smart-front-production.up.railway.app/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password})});if(!r.ok)throw new Error("Error en la respuesta del servidor");(await r.json()).success?(n({success:!0}),i(!1),b(!0)):(t({submit:"Error al registrar el usuario"}),i(!1))}catch(s){console.error("Error al registrar el usuario:",s),t({submit:"Error al registrar el usuario"}),i(!1)}},children:e=>{let{errors:n,handleBlur:i,handleChange:s,handleSubmit:a,isSubmitting:o,touched:x,values:u}=e;return(0,g.jsxs)("form",{noValidate:!0,onSubmit:a,...r,children:[(0,g.jsxs)(l.ZP,{container:!0,spacing:Z?0:2,children:[(0,g.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(c.Z,{fullWidth:!0,label:"Nombre",margin:"normal",name:"firstName",type:"text",value:u.firstName,onBlur:i,onChange:s,sx:{...t.typography.customInput}})}),(0,g.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(c.Z,{fullWidth:!0,label:"Apellido",margin:"normal",name:"lastName",type:"text",value:u.lastName,onBlur:i,onChange:s,sx:{...t.typography.customInput}})})]}),(0,g.jsx)(c.Z,{fullWidth:!0,label:"Correo electr\xf3nico",margin:"normal",name:"email",type:"email",value:u.email,onBlur:i,onChange:s,error:Boolean(x.email&&n.email),helperText:x.email&&n.email}),(0,g.jsx)(c.Z,{fullWidth:!0,label:"Contrase\xf1a",margin:"normal",name:"password",type:"password",value:u.password,onBlur:i,onChange:s,error:Boolean(x.password&&n.password),helperText:x.password&&n.password}),(0,g.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:o,children:"Registrarme"}),n.submit&&(0,g.jsx)(m.Z,{color:"error",variant:"body2",children:n.submit})]})}}),(0,g.jsx)(x.Z,{open:j,onClose:f,"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:(0,g.jsxs)(u.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},children:[(0,g.jsx)(m.Z,{id:"modal-title",variant:"h6",component:"h2",children:"Registro exitoso"}),(0,g.jsx)(m.Z,{id:"modal-description",sx:{mt:2},children:"Tu cuenta ha sido creada, te enviamos un mail para confirmar tu registro"}),(0,g.jsx)(d.Z,{onClick:f,color:"primary",sx:{mt:2},children:"Close"})]})})]})}},3156:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Z});var n=t(11087),i=t(13967),s=t(43706),a=t(61889),o=t(36314),l=t(20890),c=t(94721),d=t(33914),m=t(45290),x=t(24904),u=t(19825),h=t(98393),p=t(17834),g=t(80184);const Z=()=>{const e=(0,i.Z)(),{isLoggedIn:r}=(0,p.Z)(),t=(0,s.Z)(e.breakpoints.down("md"));return(0,g.jsx)(d.Z,{children:(0,g.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,g.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,g.jsx)(m.Z,{children:(0,g.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,g.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,g.jsx)(n.rU,{to:"#","aria-label":"theme-logo",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,g.jsx)(a.ZP,{item:!0,children:(0,g.jsxs)(o.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,g.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,g.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,g.jsx)(l.Z,{component:n.rU,to:r?"/pages/login/login3":"/",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,g.jsx)(h.Z,{})})]})})}}}]);
//# sourceMappingURL=3156.2527e56a.chunk.js.map