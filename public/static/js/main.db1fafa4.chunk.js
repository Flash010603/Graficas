(this["webpackJsonpgraficas-react"]=this["webpackJsonpgraficas-react"]||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(36),s=n.n(r),o=n(8),l=n(37),i=n.n(l),b=n(0),u=Object(c.createContext)(),d=function(e){var t=e.children,n=function(e){var t=Object(c.useMemo)((function(){return i.a.connect(e,{transports:["websocket"]})}),[e]),n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){s(t.connected)}),[t]),Object(c.useEffect)((function(){t.on("connect",(function(){s(!0)}))}),[t]),Object(c.useEffect)((function(){t.on("disconnect",(function(){s(!1)}))}),[t]),{online:r,socket:t}}("https://graficas-bandas.herokuapp.com"),a=n.socket,r=n.online;return Object(b.jsx)(u.Provider,{value:{socket:a,online:r},children:t})},j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(u).socket;return Object(b.jsx)("div",{className:"text-black text-center",children:Object(b.jsxs)("form",{className:" p-10",onSubmit:function(e){e.preventDefault(),n.trim().length>0&&(r.emit("nueva_band",n),a(""))},children:[Object(b.jsx)("label",{htmlFor:"",className:"text-2xl inline-block my-4 text-white",children:"Agregar una nueva banda"}),Object(b.jsx)("input",{type:"text",className:"w-full rounded p-3 px-4 text-lg",value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsxs)("button",{className:"border-none rounded mt-10 py-4 bg-green-500 w-full text-2xl text-white font-bold hover:bg-green-600",children:["Add ",Object(b.jsx)("i",{className:"mx-5 fas fa-users"})]})]})})},x=function(){var e=Object(c.useContext)(u).socket,t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){return e.on("current_band_list",(function(e){r(e)})),function(){return e.off("current_band_list")}}),[e]);return Object(b.jsx)(b.Fragment,{children:a.map((function(t){var n=t.id,c=t.name,s=t.votes;return Object(b.jsx)("div",{className:"p-2 text-center",children:Object(b.jsxs)("div",{className:"flex justify-around mb-5",children:[Object(b.jsx)("button",{className:"mx-2 flex-auto bg-blue-500 p-3 rounded hover:bg-blue-600",onClick:function(){return e.emit("votar",n)},children:Object(b.jsx)("i",{className:"text-lg far fa-thumbs-up"})}),Object(b.jsx)("input",{type:"text",className:"mx-2 flex-auto rounded text-black px-4 font-bold",value:c,onChange:function(e){return function(e,t){r(a.map((function(n){return n.id===t&&(n.name=e.target.value),n})))}(e,n)},onBlur:function(){return function(t,n){e.emit("nuevo_nombre",{id:t,nombre:n})}(n,c)}}),Object(b.jsxs)("div",{className:"mx-2 flex flex-col flex-auto",children:[Object(b.jsx)("p",{className:"",children:"Votos"}),Object(b.jsx)("p",{className:"font-bold",children:s})]}),Object(b.jsx)("button",{className:"mx-2 flex-auto bg-red-500 p-3 rounded hover:bg-red-600",onClick:function(){return e.emit("borrar",n)},children:Object(b.jsx)("i",{className:"far fa-trash-alt"})})]})},n)}))})},m=n(2),f=n(14);f.a.register.apply(f.a,Object(m.a)(f.b));var O=function(){var e=function(){var e=Object(c.useContext)(u).socket,t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){return e.on("current_band_list",(function(e){r(e)})),function(){return e.off("current_band_list")}}),[e]),{bandas:a}}().bandas;return Object(c.useEffect)((function(){var t=document.getElementById("myChart"),n=new f.a(t,{type:"bar",data:{labels:e.map((function(e){return e.name})),datasets:[{label:"# Votos",data:e.map((function(e){return e.votes})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, .9)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,animation:!1}]},options:{scales:{x:{beginAtZero:!0,stacked:!0},1:{grid:{borderColor:"rgba(255, 255, 255, 1)",color:"rgba(255, 255, 255, .0)"}}},indexAxis:"y"}});return function(){n.destroy()}}),[e]),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("canvas",{id:"myChart"})})},h=function(){var e=Object(c.useContext)(u).online;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"col-12 bg-black bg-opacity-50 text-white p-4 text-xl",children:Object(b.jsxs)("p",{className:"",children:["Status client:",e?Object(b.jsx)("span",{className:"mx-5 text-green-500 font-bold",children:"Online \ud83d\udfe2"}):Object(b.jsx)("span",{className:"mx-5 text-red-500 font-bold",children:"Offline \ud83d\udd34"})]})}),Object(b.jsxs)("div",{className:"container mx-auto text-white mt-5",children:[Object(b.jsx)("h2",{className:"ml-2 text-5xl",children:"Band Names"}),Object(b.jsx)("hr",{className:"my-4"}),Object(b.jsxs)("div",{className:"grid gap-5 grid-cols-1 lg:grid-cols-2 ",children:[Object(b.jsx)("div",{className:" border rounded min-h-full",children:Object(b.jsx)(j,{})}),Object(b.jsxs)("div",{className:" border rounded mb-5 text-center min-h-full",children:[Object(b.jsx)("label",{htmlFor:"",className:"text-2xl inline-block my-4 text-white",children:"Bandas agregadas"}),Object(b.jsx)(x,{})]})]})]}),Object(b.jsxs)("div",{className:"container mx-auto text-white my-5 text-center",children:[Object(b.jsx)("label",{htmlFor:"",className:"text-2xl inline-block my-5 text-white font-bold",children:"Graficaci\xf3n de votos por banda"}),Object(b.jsx)("div",{className:"bg-black rounded p-5 mx-auto ",children:Object(b.jsx)(O,{})})]})]})},g=function(){return Object(b.jsx)(d,{children:Object(b.jsx)(h,{})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.db1fafa4.chunk.js.map