(this.webpackJsonpjarvis=this.webpackJsonpjarvis||[]).push([[0],{20:function(e,t,n){e.exports={btn:"style_btn__JC_eW"}},46:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),i=n.n(c),s=n(3),o=n(22),l=n(19),j=n.n(l),d=n.p+"static/media/jarvis-circle.ba2eb816.png",b=["Iron Man","Captain America","Captain Marvel","Thor"],m=["Falcon","Hulk","Black Widow","War Machine","Quicksilver","Hawkeye","Scarlet Witch","Black Panther","Vision","Spider-Man","Ant-Man","Nebula","Rocket Raccoon","Thanos","Doctor Strange","Gamora","Loki","Winter Soldier","Nick Fury","Mysterio","Odin","Star-Lord","Ultron","Valkyrie","Venom"],u=n(20),p=n.n(u),h=n(0),g=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:p.a.btn,style:{top:e.top,left:e.left,right:e.right,bottom:e.bottom},onClick:e.onClick,children:e.children})})},O=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(0),l=Object(s.a)(i,2),u=l[0],p=l[1],O=Object(a.useState)(b),_=Object(s.a)(O,2),v=_[0],f=_[1],x=Object(a.useState)(0),y=Object(s.a)(x,2),w=y[0],S=y[1];return Object(h.jsxs)("div",{style:{width:"40rem",margin:"auto",position:"relative"},children:[v.map((function(t){return Object(h.jsx)(g,{onClick:function(){return function(t){var n=t;"Ant-Man"==t&&(n="Ant-Man II"),j.a.get("https://www.superheroapi.com/api.php/284077466532522/search/".concat(n)).then((function(n){for(var a=0;a<n.data.results.length;a++)if(n.data.results[a].name==t){if(u==t)return;p(t),r?(e.card1StateHandler(n.data.results[a]),c(!1)):(e.card2StateHandler(n.data.results[a]),c(!0));var i=Object(o.a)(v);if(m.length>w){var s=i.findIndex((function(e){return e==t}));i[s]=m[w],f(i),S(w+1)}break}})).catch((function(e){console.log(e)}))}(t)},children:t},t)})),Object(h.jsx)("img",{src:d,alt:"",width:"300rem",style:{position:"relative",display:"block",margin:"auto",marginTop:"10rem"}})]})},_=n(21),v=n.n(_),f=n(7),x=n.n(f),y=n(9),w=n.n(y),S=function(e){return Object(h.jsxs)("div",{className:w.a.progress,children:[Object(h.jsxs)("h4",{children:[(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))," "]}),Object(h.jsx)("div",{className:w.a.meter,children:Object(h.jsx)("span",{style:{width:e.value}})})]});var t},k=function(e){var t=Object(h.jsx)("img",{src:"https://freepngimg.com/thumb/avengers/24591-2-avengers.png",alt:"avengers",width:"80%"});return Object(h.jsx)("div",{className:x.a.gfg,style:{top:e.top,left:e.left,right:e.right,bottom:e.bottom,margin:e.margin,position:e.position},children:Object(h.jsx)(v.a,{options:{scale:2,max:25},style:{backgroundColor:"transparent"},children:Object(h.jsx)("div",{className:x.a.card,children:Object(h.jsxs)("div",{className:x.a.content,children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsx)("center",{children:e.power?Object.entries(e.power).map((function(e){return Object(h.jsx)(S,{name:e[0],value:"".concat(e[1],"%")},e[0])})):t})]})})})})},M=n(5),N=n.n(M);function C(e,t){for(var n="",a=0;a<t;a++)n+="0";return(n+e).slice(-t)}function H(e){return e<10&&(e="0"+e),e}var W=function(e){var t=new Date,n=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),c=t.getFullYear();t=n+"-"+r+"-"+c;var i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],j=o[1];return setInterval((function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),a=e.getSeconds();n=H(n),a=H(a);var r=C(t)+":"+C(n)+":"+C(a);j(r)}),1e3),Object(h.jsx)("div",{className:N.a.container,style:{top:e.top,left:e.left,right:e.right,bottom:e.bottom},children:Object(h.jsxs)("div",{className:N.a.clock,children:[Object(h.jsx)("p",{className:N.a.date,children:t}),Object(h.jsx)("p",{className:N.a.time,children:l})]})})};var I=function(){var e=Object(a.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],r=t[1];window.onresize=function(){r(window.innerWidth)};var c=Object(a.useState)({name:""}),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)({name:""}),d=Object(s.a)(j,2),b=d[0],m=d[1];return Object(h.jsx)("div",{style:{width:"100%",position:"relative"},children:n>1300?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(W,{right:"16rem",bottom:"25.5rem"}),Object(h.jsx)(k,{left:"60px",name:o.name,power:o.powerstats}),Object(h.jsx)(k,{right:"60px",name:b.name,power:b.powerstats}),Object(h.jsx)(O,{card1StateHandler:function(e){l(e)},card2StateHandler:function(e){m(e)}})]}):Object(h.jsx)("center",{children:Object(h.jsx)(k,{position:"relative",margin:"".concat((window.innerHeight-300)/2,"px 0"),name:"This is not compatible for mobile devices"})})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"style_container__2B2B9",clock:"style_clock__1Co4k",time:"style_time__1dUCk",date:"style_date__235mw",text:"style_text__2VtSL"}},7:function(e,t,n){e.exports={gfg:"style_gfg__3WnvI",card:"style_card__3GjUX",content:"style_content__1hKlH"}},9:function(e,t,n){e.exports={progress:"style_progress__2J11Z",meter:"style_meter__L3yGM",animate:"style_animate__1bPPy",move:"style_move__CEZT9",orange:"style_orange__1z6Oe",red:"style_red__2vBTj",nostripes:"style_nostripes__2nvcm"}}},[[46,1,2]]]);
//# sourceMappingURL=main.34754514.chunk.js.map