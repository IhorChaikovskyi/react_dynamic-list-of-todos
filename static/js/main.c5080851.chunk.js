(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),l=c.n(a),n=c(8),d=c(2),i=c(1),o=(c(13),c(14),c(5)),r=c.n(o),j=c(0),b=function(e){var t=e.todos,c=e.setTodoModal,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e){c(e)}(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==e.id,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===e.id})})})})})]},e.id)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var u=function(e){var t=e.setFilterSelect,c=e.setInputSelect,a=e.inputSelect;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:s.all},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.selectedTodo,c=e.setTodoModal,s=t.id,a=t.title,l=t.completed,n=t.userId,o=Object(i.useState)(null),r=Object(d.a)(o,2),b=r[0],u=r[1];Object(i.useEffect)((function(){(function(e){return h("/users/".concat(e))})(n).then((function(e){u(e)}))}),[]);var O=b||{},x=O.name,f=O.email;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null),u(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[l?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(f),children:x})]})]})]}):Object(j.jsx)(m,{})]})},x=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1],l=Object(i.useState)(null),o=Object(d.a)(l,2),r=o[0],x=o[1],f=Object(i.useState)(s.all),p=Object(d.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(""),g=Object(d.a)(y,2),S=g[0],k=g[1];Object(i.useEffect)((function(){h("/todos").then(a)}),[]);var T=Object(i.useMemo)((function(){return c&&Object(n.a)(c).filter((function(e){var t=e.title.toLowerCase();switch(v){case s.active:return!e.completed&&t.includes(S.toLowerCase());case s.completed:return e.completed&&t.includes(S.toLowerCase());default:return t.includes(S.toLowerCase())}}))}),[c,v,S]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{setFilterSelect:N,setInputSelect:k,inputSelect:S})}),Object(j.jsx)("div",{className:"block",children:c?Object(j.jsx)(b,{todos:T,setTodoModal:x,selectedTodo:r}):Object(j.jsx)(m,{})})]})})}),r&&Object(j.jsx)(O,{selectedTodo:r,setTodoModal:x})]})};l.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c5080851.chunk.js.map