"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[7665],{7665:(e,r,o)=>{o.r(r),o.d(r,{default:()=>x});var a=o(72791),t=o(61979),n=o(44507),i=o(697),s=o(20890),l=o(48550),c=o(24518),d=o(13239),p=o(80184);const u=(0,t.Z)({palette:{primary:{main:"#25D366"},secondary:{main:"#34B7F1"}},typography:{fontFamily:"Roboto, sans-serif"}}),x=()=>{const[e,r]=(0,a.useState)(""),[o,t]=(0,a.useState)(""),[x,h]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),[m,v]=(0,a.useState)(""),[b,S]=(0,a.useState)(""),[k,y]=(0,a.useState)(!1),[Z,R]=(0,a.useState)(!1);return(0,p.jsx)(n.Z,{theme:u,children:(0,p.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{backgroundColor:"#f5f5f5",minHeight:"100vh",padding:"20px",fontFamily:"Roboto, sans-serif"},children:[(0,p.jsx)(s.Z,{variant:"h4",gutterBottom:!0,sx:{color:"#97C703",fontWeight:"bold",marginBottom:"30px"},children:"Verificar n\xfamero de WhatsApp"}),(0,p.jsxs)(i.Z,{sx:{width:"100%",maxWidth:400,padding:"30px",backgroundColor:"#ffffff",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",borderRadius:"8px"},children:[(0,p.jsxs)(i.Z,{display:"flex",alignItems:"center",sx:{border:"2px solid #ddd",borderRadius:"5px",padding:"10px",marginBottom:"20px",backgroundColor:"#fafafa"},children:[(0,p.jsx)(s.Z,{variant:"body1",sx:{marginRight:"8px",fontWeight:"bold",fontSize:"18px",color:"#555"},children:"+"}),(0,p.jsx)(l.Z,{placeholder:"ej: 5491123654789",variant:"standard",value:e,onChange:e=>r(e.target.value.replace(/[^0-9]/g,"")),fullWidth:!0,InputProps:{disableUnderline:!0,style:{fontSize:"16px",padding:"5px 0"}},sx:{"& input::placeholder":{fontStyle:"italic",color:"#aaa"}}})]}),(0,p.jsx)(c.Z,{variant:"contained",color:"primary",onClick:async()=>{if(e){const a=localStorage.getItem("userId");if(!a)return console.error("[ERROR] No se encontr\xf3 el ID del usuario en localStorage."),f(!0),void t("No se ha encontrado informaci\xf3n del usuario en el almacenamiento.");let n;try{n=JSON.parse(a)}catch(o){n=a}if(console.log("[DEBUG] ID extra\xeddo del localStorage:",n),!n)return console.error("[ERROR] ID del usuario no est\xe1 disponible."),f(!0),void t("El ID del usuario no est\xe1 disponible.");console.log("User ID extra\xeddo:",n),R(!0);try{const o={number:e,id:n};console.log("[DEBUG] Payload que se enviar\xe1 a la API:",o);const a="https://backend-api-whatsapp-production.up.railway.app/api/v1/instances/create";console.log("[INFO] Endpoint de la API:",a);const i=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),s=await i.json();if(console.log("[DEBUG] Respuesta recibida de la API:",s),console.log(i),i.ok&&s){var r;const o=(null===(r=s.message)||void 0===r?void 0:r.pairingCode)||s.pairingCode||"C\xf3digo no disponible";v(o),S(s.invitation||""),h(!0),t(`El c\xf3digo ha sido enviado a ${e}`),console.log("mesaje de vinculacion",x)}else console.error("[ERROR] La API respondi\xf3 con un error:",s),f(!0),t((null===s||void 0===s?void 0:s.error)||"Hubo un error al enviar el c\xf3digo.")}catch(g){console.error("[ERROR] Error de conexi\xf3n con la API:",g),f(!0),t("Hubo un error con la conexi\xf3n al servidor.")}finally{y(!1),R(!1)}}else console.error("[ERROR] N\xfamero de WhatsApp no v\xe1lido."),f(!0),t("Por favor, ingresa un n\xfamero de WhatsApp v\xe1lido.")},fullWidth:!0,sx:{padding:"10px 0",fontSize:"16px",fontWeight:"bold",textTransform:"none",borderRadius:"5px",position:"relative"},disabled:k||Z,children:k||Z?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{size:24,sx:{position:"absolute",left:"50%",top:"50%",marginLeft:"-12px",marginTop:"-12px"}}),(0,p.jsx)(s.Z,{variant:"button",sx:{marginLeft:"35px"},children:"Esperando respuesta..."})]}):"Enviar C\xf3digo"}),o&&(0,p.jsx)(i.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsx)(s.Z,{variant:"body1",children:o})}),m&&(0,p.jsx)(i.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsxs)(s.Z,{variant:"h6",children:["Ingrese este c\xf3digo en su WhatsApp: ",m]})}),b&&(0,p.jsx)(i.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsx)(s.Z,{variant:"h6",children:(0,p.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{color:"#000",textDecoration:"none"},children:"Haga clic aqu\xed para unirse a la invitaci\xf3n."})})})]})]})})}},13239:(e,r,o)=>{o.d(r,{Z:()=>P});var a=o(63366),t=o(87462),n=o(72791),i=o(59278),s=o(94419),l=o(52554),c=o(14036),d=o(61020),p=o(66934),u=o(75878),x=o(21217);function h(e){return(0,x.ZP)("MuiCircularProgress",e)}(0,u.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=o(80184);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let m,v,b,S,k=e=>e;const y=44,Z=(0,l.F4)(m||(m=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),R=(0,l.F4)(v||(v=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),j=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],r[`color${(0,c.Z)(o.color)}`]]}})((e=>{let{ownerState:r,theme:o}=e;return(0,t.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:o.transitions.create("transform")},"inherit"!==r.color&&{color:(o.vars||o).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.iv)(b||(b=k`
      animation: ${0} 1.4s linear infinite;
    `),Z)})),C=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),w=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.circle,r[`circle${(0,c.Z)(o.variant)}`],o.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:o}=e;return(0,t.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:o.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(S||(S=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),R)})),P=n.forwardRef((function(e,r){const o=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:p=!1,size:u=40,style:x,thickness:m=3.6,value:v=0,variant:b="indeterminate"}=o,S=(0,a.Z)(o,f),k=(0,t.Z)({},o,{color:l,disableShrink:p,size:u,thickness:m,value:v,variant:b}),Z=(e=>{const{classes:r,variant:o,color:a,disableShrink:t}=e,n={root:["root",o,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(o)}`,t&&"circleDisableShrink"]};return(0,s.Z)(n,h,r)})(k),R={},P={},D={};if("determinate"===b){const e=2*Math.PI*((y-m)/2);R.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(v),R.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,g.jsx)(j,(0,t.Z)({className:(0,i.Z)(Z.root,n),style:(0,t.Z)({width:u,height:u},P,x),ownerState:k,ref:r,role:"progressbar"},D,S,{children:(0,g.jsx)(C,{className:Z.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,g.jsx)(w,{className:Z.circle,style:R,ownerState:k,cx:y,cy:y,r:(y-m)/2,fill:"none",strokeWidth:m})})}))}))}}]);
//# sourceMappingURL=7665.c9573fc5.chunk.js.map