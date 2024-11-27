"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[3518,8998],{79699:(e,a,i)=>{i.d(a,{Z:()=>d});var r=i(13967),t=i(97639),l=i(95080),n=i(50533),s=i(22646),c=i(80184);const d=e=>{let{title:a,link:i,icon:d}=e;const o=(0,r.Z)();return(0,c.jsx)(t.Z,{title:a||"Reference",placement:"left",children:(0,c.jsxs)(l.Z,{disableRipple:!0,children:[!d&&(0,c.jsx)(s.Z,{component:n.Z,href:i,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),d&&(0,c.jsx)(s.Z,{component:n.Z,href:i,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:d})]})})}},88998:(e,a,i)=>{i.r(a),i.d(a,{default:()=>v,header:()=>L});var r=i(72791),t=i(61889),l=i(36314),n=i(39281),s=i(79836),c=i(56890),d=i(35855),o=i(68745),h=i(53382),g=i(23735),m=i(79699),x=i(91923),p=i(84860),j=i(13967),Z=i(697),f=i(54325),u=i(80184);const b=[{field:"id",headerName:"ID",width:70},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:e=>`${e.row.firstName||""} ${e.row.lastName||""}`},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90}],y=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lancaster",firstName:"Cersei",age:42},{id:3,lastName:"Lancaster",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function w(e){let{Selected:a}=e;const i=(0,j.Z)();return(0,u.jsx)(Z.Z,{sx:{height:400,width:"100%","& .MuiDataGrid-root":{border:"none","& .MuiDataGrid-cell":{borderColor:"dark"===i.palette.mode?i.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnsContainer":{color:"dark"===i.palette.mode?"grey.600":"grey.900",borderColor:"dark"===i.palette.mode?i.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnSeparator":{color:"dark"===i.palette.mode?i.palette.text.primary+15:"grey.200"}}},children:(0,u.jsx)(f._$,{rows:y,columns:b,onRowSelectionModelChange:e=>{const i=new Set(e),r=y.filter((e=>i.has(e.id)));a(r)},paginationModel:{page:1,pageSize:5},pageSizeOptions:[5],checkboxSelection:!0})})}function N(e,a,i,r,t){return{name:e,calories:a,fat:i,carbs:r,protein:t}}const k=[N("Frozen yoghurt",159,6,24,4),N("Ice cream sandwich",237,9,37,4.3),N("Eclair",262,16,24,6),N("Cupcake",305,3.7,67,4.3),N("Gingerbread",356,16,49,3.9)],L=[{label:"Dessert (100g serving)",key:1},{label:"Calories (g)",key:2},{label:"Carbs (g)",key:3},{label:"Protein (g)",key:4},{label:"Protein (g)",key:5},{label:"Protein (g)",key:6}];function v(){const e=[];b.map((a=>e.push({label:a.headerName,key:a.field})));const[a,i]=(0,r.useState)([]),j=a.length>0?a:y;return(0,u.jsxs)(t.ZP,{container:!0,spacing:x.dv,children:[(0,u.jsx)(t.ZP,{item:!0,xs:12,children:(0,u.jsx)(g.Z,{content:!1,title:"Basic Table",secondary:(0,u.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,u.jsx)(p.Z,{data:k,filename:"basic-table.csv",header:L}),(0,u.jsx)(m.Z,{link:"https://next.material-ui.com/components/tables/"})]}),children:(0,u.jsx)(n.Z,{children:(0,u.jsxs)(s.Z,{sx:{minWidth:350},"aria-label":"simple table",children:[(0,u.jsx)(c.Z,{children:(0,u.jsxs)(d.Z,{children:[(0,u.jsx)(o.Z,{sx:{pl:3},children:"Dessert (100g serving)"}),(0,u.jsx)(o.Z,{align:"right",children:"Calories"}),(0,u.jsx)(o.Z,{align:"right",children:"Fat\xa0(g)"}),(0,u.jsx)(o.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,u.jsx)(o.Z,{align:"right",children:"Protein\xa0(g)"}),(0,u.jsx)(o.Z,{align:"right",children:"Protein\xa0(g)"}),(0,u.jsx)(o.Z,{align:"right",children:"Protein\xa0(g)"}),(0,u.jsx)(o.Z,{align:"right",sx:{pr:3},children:"Protein\xa0(g)"})]})}),(0,u.jsx)(h.Z,{children:k.map((e=>(0,u.jsxs)(d.Z,{hover:!0,children:[(0,u.jsx)(o.Z,{sx:{pl:3},component:"th",scope:"row",children:e.name}),(0,u.jsx)(o.Z,{align:"right",children:e.calories}),(0,u.jsx)(o.Z,{align:"right",children:e.fat}),(0,u.jsx)(o.Z,{align:"right",children:e.carbs}),(0,u.jsx)(o.Z,{align:"right",children:e.protein}),(0,u.jsx)(o.Z,{align:"right",children:e.protein}),(0,u.jsx)(o.Z,{align:"right",children:e.protein}),(0,u.jsx)(o.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)))})]})})})}),(0,u.jsx)(t.ZP,{item:!0,xs:12,children:(0,u.jsx)(g.Z,{content:!1,title:"Data Grid",secondary:(0,u.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,u.jsx)(p.Z,{data:j,filename:"data-grid-table.csv",header:e}),(0,u.jsx)(m.Z,{link:"https://material-ui.com/components/data-grid/"})]}),children:(0,u.jsx)(w,{Selected:e=>{i(e)}})})})]})}},73518:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Z});var r=i(36314),t=i(39281),l=i(79836),n=i(56890),s=i(35855),c=i(68745),d=i(53382),o=i(23735),h=i(79699),g=i(84860),m=i(88998),x=i(80184);function p(e,a,i,r,t){return{name:e,calories:a,fat:i,carbs:r,protein:t}}const j=[p("Frozen yoghurt",159,6,24,4),p("Ice cream sandwich",237,9,37,4.3),p("Eclair",262,16,24,6),p("Cupcake",305,3.7,67,4.3),p("Gingerbread",356,16,49,3.9)];function Z(){return(0,x.jsx)(o.Z,{content:!1,title:"Dense Table",secondary:(0,x.jsxs)(r.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,x.jsx)(g.Z,{data:j,filename:"dense-table.csv",header:m.header}),(0,x.jsx)(h.Z,{link:"https://next.material-ui.com/components/tables/"})]}),children:(0,x.jsx)(t.Z,{children:(0,x.jsxs)(l.Z,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[(0,x.jsx)(n.Z,{children:(0,x.jsxs)(s.Z,{children:[(0,x.jsx)(c.Z,{sx:{pl:3},children:"Dessert (100g serving)"}),(0,x.jsx)(c.Z,{align:"right",children:"Calories"}),(0,x.jsx)(c.Z,{align:"right",children:"Fat\xa0(g)"}),(0,x.jsx)(c.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,x.jsx)(c.Z,{sx:{pr:3},align:"right",children:"Protein\xa0(g)"})]})}),(0,x.jsx)(d.Z,{children:j.map((e=>(0,x.jsxs)(s.Z,{hover:!0,children:[(0,x.jsx)(c.Z,{sx:{pl:3},component:"th",scope:"row",children:e.name}),(0,x.jsx)(c.Z,{align:"right",children:e.calories}),(0,x.jsx)(c.Z,{align:"right",children:e.fat}),(0,x.jsx)(c.Z,{align:"right",children:e.carbs}),(0,x.jsx)(c.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)))})]})})})}},84860:(e,a,i)=>{i.d(a,{Z:()=>d});var r=i(13967),t=i(97639),l=i(95080),n=i(98472),s=i(4432),c=i(80184);const d=e=>{let{data:a,filename:i,headers:d}=e;const o=(0,r.Z)();return(0,c.jsx)(t.Z,{title:"CSV Export",placement:"left",children:(0,c.jsx)(l.Z,{sx:{mt:.5},children:(0,c.jsx)(n.CSVLink,{data:a,filename:i,headers:d,children:(0,c.jsx)(s.Z,{color:o.palette.secondary.main,"aria-label":"Export CSV File"})})})})}}}]);
//# sourceMappingURL=3518.ab80cdb1.chunk.js.map