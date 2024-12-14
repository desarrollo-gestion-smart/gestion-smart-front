"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[8422],{8422:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(72791),o=t(31243),s=t(697),i=t(13239),n=t(20890),l=t(80184);const c=()=>((0,a.useEffect)((()=>{(async()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),t=e.get("state");if(r&&t)try{const e=JSON.parse(atob(t)),{userId:a,token:s}=e;if(!a||!s)throw new Error("El token `state` no contiene `userId` o `token` v\xe1lido.");localStorage.getItem("userId",a),console.log("User ID guardado en localStorage:",a);const i=await o.Z.get(`https://vigilant-prosperity-production.up.railway.app/api/mercadopago/callback?code=${r}&state=${t}`,{headers:{Authorization:`Bearer ${s}`}}),{redirectUrl:n}=i.data;n&&(window.location.href=n)}catch(a){console.error("Error al procesar el callback:",a.message),alert("Error al procesar la solicitud.")}else console.error("Faltan par\xe1metros 'code' o 'state' en la URL."),alert("Faltan par\xe1metros necesarios en la URL.")})()}),[]),(0,l.jsxs)(s.Z,{sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center",marginTop:"300px"},children:[(0,l.jsx)(i.Z,{}),(0,l.jsx)(n.Z,{variant:"h5",sx:{mt:2},children:"Procesando vinculacion"})]}))},13239:(e,r,t)=>{t.d(r,{Z:()=>$});var a=t(63366),o=t(87462),s=t(72791),i=t(59278),n=t(94419),l=t(52554),c=t(14036),d=t(61020),h=t(66934),u=t(75878),m=t(21217);function p(e){return(0,m.ZP)("MuiCircularProgress",e)}(0,u.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=t(80184);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,x,w,S=e=>e;const Z=44,y=(0,l.F4)(f||(f=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,l.F4)(g||(g=S`
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
`)),P=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.iv)(x||(x=S`
      animation: ${0} 1.4s linear infinite;
    `),y)})),C=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),D=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(w||(w=S`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)})),$=s.forwardRef((function(e,r){const t=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:h=!1,size:u=40,style:m,thickness:f=3.6,value:g=0,variant:x="indeterminate"}=t,w=(0,a.Z)(t,k),S=(0,o.Z)({},t,{color:l,disableShrink:h,size:u,thickness:f,value:g,variant:x}),y=(e=>{const{classes:r,variant:t,color:a,disableShrink:o}=e,s={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,o&&"circleDisableShrink"]};return(0,n.Z)(s,p,r)})(S),b={},$={},I={};if("determinate"===x){const e=2*Math.PI*((Z-f)/2);b.strokeDasharray=e.toFixed(3),I["aria-valuenow"]=Math.round(g),b.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,$.transform="rotate(-90deg)"}return(0,v.jsx)(P,(0,o.Z)({className:(0,i.Z)(y.root,s),style:(0,o.Z)({width:u,height:u},$,m),ownerState:S,ref:r,role:"progressbar"},I,w,{children:(0,v.jsx)(C,{className:y.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,v.jsx)(D,{className:y.circle,style:b,ownerState:S,cx:Z,cy:Z,r:(Z-f)/2,fill:"none",strokeWidth:f})})}))}))}}]);
//# sourceMappingURL=8422.75bd3f9e.chunk.js.map