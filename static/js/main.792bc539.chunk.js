(this.webpackJsonpgymbillapp=this.webpackJsonpgymbillapp||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(15),r=c.n(a),i=c(6),j=c.n(i),s=c(16),d=c(3),l=c(0);var b=function(){var e=(new Date).getHours(),t="";return e<12?t="Good Morning":e>=12&&e<16?t="Good Afternoon":e>=16&&e<24&&(t="Good Evening"),Object(l.jsx)("h1",{children:t})};var o=function(){setInterval((function(){var e=(new Date).toLocaleTimeString();r(e)}),1e3);var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:[" ",a," "]})})},h=c(4),O=c.n(h);var u=function(){var e=O()().format("ddd, Do MMM yyyy");return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:[" ",e," "]})})};var x=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Gym Bill Application"})})};var m=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("h1",{children:["Copyright \xa9 ",e]})})};var p=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),j=i[0],s=i[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){var t=document.getElementById("jdate").value,c=O()(t),n=document.getElementById("cdate").value,r=O()(n),i=Math.abs(r-c),j=Math.floor(i/864e5),d=Math.ceil(16.6666667*j);console.log(d),s(d),a("Your estimated bill is - \u20b9"),e.preventDefault()},children:[Object(l.jsx)("div",{children:Object(l.jsxs)("label",{for:"jdate",children:["Joining date  : ",Object(l.jsx)("input",{type:"text",name:"jDate",id:"jdate",placeholder:"mm/dd/yyyy"})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{for:"cdate",children:[" Closing Date  : ",Object(l.jsx)("input",{type:"text",name:"cDate",id:"cdate",placeholder:"mm/dd/yyyy"})," "]})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"submitButton",children:Object(l.jsx)("input",{type:"submit",name:"jDate",id:"jdate"})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{children:[c," ",j," "]})})]})})};var v=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{children:[": ",e.temperature," \xb0C"]})})};var f=function(e){return Object(l.jsx)("h1",{children:e.place})},g=c(17),y=c.n(g);var w=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.imgIcon+"@2x.png",alt:"w"}),Object(l.jsx)("h2",{children:e.description})]})};var D=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),h=i[0],O=i[1],g=Object(n.useState)(""),D=Object(d.a)(g,2),S=D[0],I=D[1],N=Object(n.useState)(""),M=Object(d.a)(N,2),B=M[0],E=M[1],k=function(){var e=Object(s.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=086ab8e2d6458025d41c503792f73761&units=metric",t=y.a.get("https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=086ab8e2d6458025d41c503792f73761&units=metric"),e.next=4,t;case 4:c=e.sent,a(c.data.main.temp),O(c.data.name),I(c.data.weather[0].icon),E(c.data.weather[0].description);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(x,{})}),Object(l.jsxs)("div",{clas:"container",children:[Object(l.jsxs)("div",{className:"weather-container",children:[Object(l.jsx)("div",{className:"weather-place",children:Object(l.jsx)(f,{place:h})}),Object(l.jsx)("div",{className:"weather-temp",children:Object(l.jsx)(v,{temperature:c})}),Object(l.jsx)("div",{className:"weather-icon",children:Object(l.jsx)(w,{imgIcon:S,description:B})})]}),Object(l.jsxs)("div",{className:"Clock",children:[Object(l.jsx)(o,{}),Object(l.jsx)(u,{})]}),Object(l.jsx)("div",{className:"greet",children:Object(l.jsx)(b,{})}),Object(l.jsx)("div",{className:"calculation",children:Object(l.jsx)(p,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(m,{})})]})]})};r.a.render(Object(l.jsx)(D,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.792bc539.chunk.js.map