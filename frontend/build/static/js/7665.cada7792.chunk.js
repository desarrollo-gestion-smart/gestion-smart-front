"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[7665],{7665:(e,o,a)=>{a.r(o),a.d(o,{default:()=>x});var n=a(72791),r=a(61979),i=a(44507),t=a(697),s=a(20890),d=a(48550),l=a(24518),p=a(80184);const c=(0,r.Z)({palette:{primary:{main:"#25D366"},secondary:{main:"#34B7F1"}},typography:{fontFamily:"Roboto, sans-serif"}}),x=()=>{const[e,o]=(0,n.useState)(""),[a,r]=(0,n.useState)(""),[x,g]=(0,n.useState)(!1),[h,u]=(0,n.useState)(!1),[f,m]=(0,n.useState)(""),[b,v]=(0,n.useState)("");return(0,p.jsx)(i.Z,{theme:c,children:(0,p.jsxs)(t.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{backgroundColor:"#f5f5f5",minHeight:"100vh",padding:"20px",fontFamily:"Roboto, sans-serif"},children:[(0,p.jsx)(s.Z,{variant:"h4",gutterBottom:!0,sx:{color:"#97C703",fontWeight:"bold",marginBottom:"30px"},children:"Verificar n\xfamero de WhatsApp"}),(0,p.jsxs)(t.Z,{sx:{width:"100%",maxWidth:400,padding:"30px",backgroundColor:"#ffffff",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",borderRadius:"8px"},children:[(0,p.jsxs)(t.Z,{display:"flex",alignItems:"center",sx:{border:"2px solid #ddd",borderRadius:"5px",padding:"10px",marginBottom:"20px",backgroundColor:"#fafafa"},children:[(0,p.jsx)(s.Z,{variant:"body1",sx:{marginRight:"8px",fontWeight:"bold",fontSize:"18px",color:"#555"},children:"+"}),(0,p.jsx)(d.Z,{placeholder:"ej: 541123654789",variant:"standard",value:e,onChange:e=>o(e.target.value.replace(/[^0-9]/g,"")),fullWidth:!0,InputProps:{disableUnderline:!0,style:{fontSize:"16px",padding:"5px 0"}},sx:{"& input::placeholder":{fontStyle:"italic",color:"#aaa"}}})]}),(0,p.jsx)(l.Z,{variant:"contained",color:"primary",onClick:async()=>{if(e){const o=localStorage.getItem("userId");if(!o)return u(!0),void r("No se ha encontrado el ID de usuario en el almacenamiento.");const a=e;console.log("Informaci\xf3n que se va a enviar:",{id:o,number:a});try{const e=fetch("https://backend-api-whatsapp-production.up.railway.app/api/v1/instances/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,number:a})}),n=await e,i=await n.json();n.ok&&i?(g(!0),r(`El c\xf3digo ha sido enviado a ${a}`),m(i.message.pairingCode||"No pairing code"),v(i.invitation||"")):(u(!0),r((null===i||void 0===i?void 0:i.error)||"Hubo un error al enviar el c\xf3digo."))}catch(h){u(!0),r("Hubo un error con la conexi\xf3n al servidor."),console.error(h)}}else u(!0),r("Por favor, ingresa un n\xfamero de WhatsApp v\xe1lido.")},fullWidth:!0,sx:{padding:"10px 0",fontSize:"16px",fontWeight:"bold",textTransform:"none",borderRadius:"5px"},children:"Enviar C\xf3digo"}),a&&(0,p.jsx)(t.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsx)(s.Z,{variant:"body1",children:a})}),f&&(0,p.jsx)(t.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsxs)(s.Z,{variant:"h6",children:["Ingrese este codigo en su Whatsapp: ",f]})}),b&&(0,p.jsx)(t.Z,{sx:{marginTop:"20px",padding:"10px",backgroundColor:"#F9F9F9",color:"#000",borderRadius:"5px",fontSize:"16px"},children:(0,p.jsx)(s.Z,{variant:"h6",children:(0,p.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{color:"#000",textDecoration:"none"},children:"Invitaci\xf3n WhatsApp"})})})]})]})})}}}]);
//# sourceMappingURL=7665.cada7792.chunk.js.map