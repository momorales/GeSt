(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(15),t(9)),i=t(2),m=t(4),s=t(5),u=t(8),p=t.n(u),h=function(e){var a=e.createCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],u=c.mascota,h=c.propietario,E=c.fecha,d=c.hora,f=c.sintomas,b=Object(n.useState)(!1),g=Object(i.a)(b,2),v=g[0],N=g[1],w=function(e){o(Object(s.a)(Object(s.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear cita"),v?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()&&""!==h.trim()&&""!==E.trim()&&""!==d.trim()&&""!==f.trim()?(N(!1),c.id=p()(),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):N(!0)}},l.a.createElement("label",null,"Nombre Mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre mascota",value:u,onChange:w}),l.a.createElement("label",null,"Nombre Due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre due\xf1o de la mascota",value:h,onChange:w}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",value:E,onChange:w}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",value:d,onChange:w}),l.a.createElement("label",null,"S\xedntomas"),l.a.createElement("textarea",{name:"sintomas",className:"u-full-width",onChange:w}),l.a.createElement("button",{type:"submit",className:"add-cita",value:f},"Agregar Cita")))},E=function(e){var a=e.cita,t=e.deleteCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)),l.a.createElement("p",null,"Nombre due\xf1o: ",l.a.createElement("span",null,a.propietario)),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,a.fecha)),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,a.hora)),l.a.createElement("p",null,"Sintomas: ",l.a.createElement("span",null,a.sintomas)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar \xd7"))};var d=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=0===r.length?"No hay citas":"Administra tus citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{createCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(E,{key:e.id,cita:e,deleteCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.fd187b04.chunk.js.map