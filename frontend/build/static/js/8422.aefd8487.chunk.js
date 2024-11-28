"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[8422],{8422:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(72791),o=t(31243),s=t(697),n=t(13239),i=t(20890),l=t(80184);const c=()=>((0,a.useEffect)((()=>{(async()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),t=e.get("state");if(console.log("MercadoPagoCallback mounted."),console.log("Code:",r),console.log("State:",t),r&&t)try{const e=localStorage.getItem("token");if(!e)return void console.error("Token no encontrado en localStorage.");const a=await o.Z.get(`https://gestion-smart-front-production.up.railway.app/api/mercadopago/callback?code=${r}&state=${t}`,{headers:{Authorization:`Bearer ${e}`}});console.log("Respuesta del backend:",a.data);const{redirectUrl:s}=a.data;console.log("Redirect URL:",s),s&&(window.location.href=s)}catch(s){var a;console.error("Error al procesar el callback de MercadoPago:",(null===(a=s.response)||void 0===a?void 0:a.data)||s.message)}else console.log("Faltan par\xe1metros 'code' o 'state' en la URL.")})()}),[]),(0,l.jsxs)(s.Z,{sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center",marginTop:"300px"},children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)(i.Z,{variant:"h5",sx:{mt:2},children:"Procesando vinculacion"})]}))},13239:(e,r,t)=>{t.d(r,{Z:()=>R});var a=t(63366),o=t(87462),s=t(72791),n=t(59278),i=t(94419),l=t(52554),c=t(14036),d=t(61020),h=t(66934),u=t(75878),m=t(21217);function v(e){return(0,m.ZP)("MuiCircularProgress",e)}(0,u.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=t(80184);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let p,f,x,S,w=e=>e;const Z=44,y=(0,l.F4)(p||(p=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,l.F4)(f||(f=w`
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
`)),P=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.iv)(x||(x=w`
      animation: ${0} 1.4s linear infinite;
    `),y)})),C=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),M=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(S||(S=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)})),R=s.forwardRef((function(e,r){const t=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:h=!1,size:u=40,style:m,thickness:p=3.6,value:f=0,variant:x="indeterminate"}=t,S=(0,a.Z)(t,k),w=(0,o.Z)({},t,{color:l,disableShrink:h,size:u,thickness:p,value:f,variant:x}),y=(e=>{const{classes:r,variant:t,color:a,disableShrink:o}=e,s={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,o&&"circleDisableShrink"]};return(0,i.Z)(s,v,r)})(w),b={},R={},$={};if("determinate"===x){const e=2*Math.PI*((Z-p)/2);b.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(f),b.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,g.jsx)(P,(0,o.Z)({className:(0,n.Z)(y.root,s),style:(0,o.Z)({width:u,height:u},R,m),ownerState:w,ref:r,role:"progressbar"},$,S,{children:(0,g.jsx)(C,{className:y.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,g.jsx)(M,{className:y.circle,style:b,ownerState:w,cx:Z,cy:Z,r:(Z-p)/2,fill:"none",strokeWidth:p})})}))}))}}]);
//# sourceMappingURL=8422.aefd8487.chunk.js.map