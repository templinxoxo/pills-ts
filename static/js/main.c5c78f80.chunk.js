(this["webpackJsonppills-ts"]=this["webpackJsonppills-ts"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),i=t.n(c),s=t(4),u=t.n(s),o=t(5),a=t(2),l=(t(11),{headingMode:!1}),d=function(e){return{headingMode:!e.headingMode}},j=function(e){var n=Object(c.useReducer)(d,l),t=Object(a.a)(n,2),i=t[0],s=t[1],u="pill ".concat(i.headingMode?"headingMode":"").trim();return Object(r.jsxs)(r.Fragment,{children:[e.breakLine?Object(r.jsx)("br",{}):null,Object(r.jsxs)("div",{className:u,onClick:function(){return s()},children:[Object(r.jsx)("span",{className:"heading",children:"H"}),e.term]})]})},b=function(e){var n=Object(c.useState)((function(){return e.terms.map((function(e,n){return Object.assign({term:e,key:n})}))})),t=Object(a.a)(n,2),i=t[0],s=t[1],u=Object(c.useRef)(null),l=function(){var e=u.current;if(e){var n=e.clientWidth,t=0,r=[];Array.from(e.querySelectorAll(".pill")).forEach((function(e,c){var i=function(e){var n=12+(e.className.includes("headingMode")?0:20);return e.scrollWidth+n}(e);(t+=i)>n&&(t=i,r.push(c))})),s((function(e){return e.map((function(e){return e.breakLine=r.includes(e.key),e}))}))}},d=Object(c.useCallback)(l,[]);return Object(c.useEffect)((function(){return l(),window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),Object(r.jsx)("div",{ref:u,children:i.map((function(e){return Object(r.jsx)(j,Object(o.a)({},e))}))})};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{terms:["Lorem","Lorem ipsum","Dolor sit","Amet ipsum dolor","Sit lorem","Ipsum dolor"]})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c5c78f80.chunk.js.map