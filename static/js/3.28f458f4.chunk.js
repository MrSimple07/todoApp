(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[3],{13:function(e,t,r){"use strict";r.r(t);var n=r(0);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(3),a=r(1);t.default=function(e){var t=e.onCreate,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),r=Object(i.a)(t,2),n=r[0],c=r[1];return{bind:{value:n,onChange:function(e){return c(e.target.value)}},clear:function(){return c("")},value:function(){return n}}}("");return Object(n.jsxs)("form",{className:"add__todo",onSubmit:function(e){e.preventDefault(),r.value().trim()&&(t(r.value()),r.clear())},children:[Object(n.jsx)("input",u({className:"add__input"},r.bind)),Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add Todo"})]})}}}]);
//# sourceMappingURL=3.28f458f4.chunk.js.map