(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(8),i=c.n(s),d=c(6),j=(c(14),c(9)),r=c(3),u=c(18),b=c(0),a=function(t){var e=t.input,c=t.setInput,o=t.todos,n=t.setTodos;return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{value:e,onChange:function(t){c(t.target.value)},type:"text"}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(j.a)(o),[{text:e,completed:!1,id:Object(u.a)()}])),c("")},type:"submit",children:Object(b.jsx)(r.b,{})})]})},l=c(7),O=function(t){var e=t.text,c=t.todo,o=t.todos,n=t.setTodos;return Object(b.jsxs)("div",{className:"todo-container",children:[Object(b.jsx)("li",{className:"".concat(c.completed?"completed":""),children:e}),Object(b.jsx)("button",{onClick:function(){n(o.map((function(t){return t.id===c.id?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},children:Object(b.jsx)(r.a,{})}),Object(b.jsx)("button",{onClick:function(){n(o.filter((function(t){return t.id!==c.id})))},children:Object(b.jsx)(r.c,{})})]})},x=function(t){var e=t.todos,c=t.setTodos;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(O,{todo:t,todos:e,setTodos:c,text:t.text},t.id)}))})})},p=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),i=Object(d.a)(s,2),j=i[0],r=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Todo"}),Object(b.jsx)(a,{input:c,setInput:n,todos:j,setTodos:r}),Object(b.jsx)(x,{todos:j,setTodos:r})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.61ffca9f.chunk.js.map