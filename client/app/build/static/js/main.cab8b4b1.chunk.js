(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(13),n=c.n(a),l=(c(21),c(22),c(4)),o=(c(23),c(6)),i=c.p+"static/media/LOGO4.49d78eb4.png",r=c(34),j=c(2);function b(){const[e,t]=Object(s.useState)(""),[c,a]=Object(s.useState)(""),[n,b]=Object(s.useState)(""),[d,h]=Object(s.useState)(""),u=Object(l.o)();Object(s.useEffect)((()=>{r.a.get("http://localhost:3001/check-login").then((e=>{if(e.data.success){const t=e.data.nick;h(t),u("/start?nick=".concat(t))}}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"logoApp",children:Object(j.jsx)("img",{src:i,alt:"LogoApp"})}),Object(j.jsx)("div",{className:"form_element_login",children:Object(j.jsxs)("div",{className:"formBG",children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Logowanie!"}),Object(j.jsxs)("div",{className:"values",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"Email",required:!0,value:e,onChange:e=>t(e.target.value)})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",placeholder:"Has\u0142o",required:!0,value:c,onChange:e=>a(e.target.value)})]})]})]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(o.b,{to:"/register",children:Object(j.jsx)("button",{children:"Zarejestruj si\u0119!"})}),Object(j.jsx)("button",{onClick:async()=>{try{const t=await r.a.post("http://localhost:3001/login",{Login:e,Password:c});if(t.data.success){const e=t.data.nick;h(e),u("/start?nick=".concat(e))}else b("B\u0142\u0105d logowania. Spr\xf3buj ponownie."),alert("B\u0142\u0105d logowania. Spr\xf3buj ponownie.")}catch(t){console.error(t),b("B\u0142\u0105d logowania. Spr\xf3buj ponownie."),alert("B\u0142\u0105d logowania. Spr\xf3buj ponownie.")}},children:"Zaloguj si\u0119!"})]})]})})]})}c(29);function d(){const[e,t]=Object(s.useState)(""),[c,a]=Object(s.useState)(""),[n,b]=Object(s.useState)(""),[d,h]=Object(s.useState)(""),u=Object(l.o)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"curve",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsxs)("div",{className:"logo_register_page",children:[Object(j.jsx)("img",{className:"logo_left",src:i,alt:"LogoApp"}),Object(j.jsx)("img",{className:"logo_right",src:i,alt:"LogoApp"})]})}),Object(j.jsx)("div",{className:"form_element",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Zarejestruj sie!"}),d&&Object(j.jsx)("p",{className:"registration-error",children:d}),Object(j.jsxs)("div",{className:"values",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"nick",type:"text",placeholder:"Nick",required:!0,onChange:e=>t(e.target.value)})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"login",type:"email",placeholder:"Email",required:!0,onChange:e=>a(e.target.value)})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"password",type:"password",placeholder:"Has\u0142o",required:!0,onChange:e=>b(e.target.value)})]})]})]}),Object(j.jsxs)("div",{className:"buttonsRegister",children:[Object(j.jsx)(o.b,{to:"/",onClick:async function(){if(!0===(0===e.length?(alert("Niepoprawna d\u0142ugo\u015b\u0107 nazwy u\u017cytkownika!"),!1):e.trim()===e||(alert("Nazwa u\u017cytkownika niepoprawna! Usu\u0144 spacj\u0119"),!1))&&!0===(0===c.length?(alert("Niepoprawna d\u0142ugo\u015b\u0107 Loginu!"),!1):!!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(c)||(alert("Niepoprawny E-mail!"),!1))&&!0===(n.length<8?(alert("Niepoprawna d\u0142ugo\u015b\u0107 Has\u0142a. Has\u0142o musi mie\u0107 co najmniej 8 znak\xf3w!"),!1):!!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-'!@#$%^&*()_+={}:;<>']).{8,}$/g.test(n)||(alert("Has\u0142o nie spe\u0142nia wymaga\u0144"),!1)))try{(await r.a.post("http://localhost:3001/register",{Nick:e,Login:c,Password:n})).data.success?u("/"):h("B\u0142\u0105d podczas rejestracji. Spr\xf3buj ponownie.")}catch(t){h("B\u0142\u0105d podczas rejestracji. Spr\xf3buj ponownie.")}},children:Object(j.jsx)("button",{children:"Zarejestruj si\u0119!"})}),Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("button",{children:"Powr\xf3t"})})]})]})})]})})}c(30),c(31);var h=()=>Object(j.jsx)("div",{className:"flex flex-col dropdownList",children:Object(j.jsxs)("ul",{className:"flex flex-col gap-4",children:[Object(j.jsx)("li",{className:"liStyle",children:"Przejd\u017a do profilu"}),Object(j.jsx)("li",{className:"liStyle",onClick:async()=>{try{(await r.a.get("http://localhost:3001/logout")).data.success?window.location.href="/":console.log("B\u0142\u0105d wylogowania")}catch(e){console.error(e)}},children:"Wyloguj si\u0119"})]})});c(32);var u=e=>{const[t,c]=Object(s.useState)(""),[a,n]=Object(s.useState)("");Object(s.useEffect)((()=>{const t=e.nick;t&&(e=>{r.a.get("http://localhost:3001/getAbout/".concat(e)).then((e=>{n(e.data.about)})).catch((e=>{console.error(e)}))})(t)}),[e.nick]),Object(s.useEffect)((()=>{c(a)}),[a]);return Object(j.jsx)("div",{className:"popup-box",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),Object(j.jsx)("h2",{children:"Edytuj opis!"}),Object(j.jsx)("input",{type:"text",className:"inputAboutProfile",placeholder:"Dodaj opis o sobie",value:t,onChange:e=>{c(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"popupButtons",children:[Object(j.jsx)("button",{onClick:()=>{const c=e.nick;0!==t.length&&r.a.post("http://localhost:3001/updateAbout/".concat(c),{inputValue:t}).then((t=>{e.handleClose(),window.location.reload()})).catch((e=>{}))},children:"Zaktualizuj"}),Object(j.jsx)("button",{onClick:e.handleClose,children:"Zamknij"})]}),e.content]})})};localStorage.getItem("userNick");function O(){const[e,t]=Object(s.useState)(!1),c=Object(l.m)(),a=new URLSearchParams(c.search).get("nick"),[n,o]=Object(s.useState)([]),[b,d]=Object(s.useState)(!1),[O,p]=Object(s.useState)("");Object(l.o)();const[x,g]=Object(s.useState)("burger-bar unclicked"),[m,w]=Object(s.useState)("menu hidden"),[N,k]=Object(s.useState)(!1),v=()=>{d(!b)};return Object(s.useEffect)((()=>{r.a.get("http://localhost:3001/top-players").then((e=>{o(e.data)})).catch((e=>{console.error(e)}))}),[]),Object(s.useEffect)((()=>{r.a.get("http://localhost:3001/getAbout/".concat(a)).then((e=>{p(e.data.about)})).catch((e=>{console.error(e)}))}),[a]),Object(s.useEffect)((()=>{r.a.get("http://localhost:3001/getAbout/".concat(a)).then((e=>{p(e.data.about)})).catch((e=>{console.error(e)}))}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:i,alt:"LogoApp"})}),Object(j.jsx)("li",{className:"liMenuStyle",children:"Witaj w Mole Escape"}),Object(j.jsxs)("li",{className:"BurgerMenu",children:[Object(j.jsx)("div",{className:"burgerStyle",children:Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"burger-menu",onClick:()=>{N?(g("burger-bar unclicked"),w("menu hidden")):(g("burger-bar clicked"),w("menu visible")),k(!N)},children:[Object(j.jsx)("div",{className:x}),Object(j.jsx)("div",{className:x}),Object(j.jsx)("div",{className:x})]})})}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("div",{className:"firstRow",children:Object(j.jsx)("div",{className:"NickNameProfile",children:Object(j.jsx)("p",{className:"NickNameProfileParagraph",children:a})})}),Object(j.jsxs)("div",{className:"secondRow",children:[Object(j.jsx)("h3",{children:"Opis:"}),Object(j.jsx)("p",{children:O})]}),Object(j.jsxs)("div",{className:"thirdRow",children:[Object(j.jsx)("button",{className:"EditButton",onClick:v,children:"Edytuj opis"}),Object(j.jsx)("button",{className:"LogOutButton",onClick:async()=>{try{(await r.a.get("http://localhost:3001/logout")).data.success?window.location.href="/":console.log("B\u0142\u0105d wylogowania")}catch(e){console.error(e)}},children:"Wyloguj si\u0119!"})]})]})]})]})}),Object(j.jsxs)("div",{className:"inlineBox",children:[Object(j.jsx)("div",{className:"FirstBox",children:Object(j.jsxs)("a",{href:"/game.html?nick=".concat(a),children:[Object(j.jsx)("img",{src:i,alt:"LogoApp"}),Object(j.jsx)("p",{children:"Zagraj ju\u017c teraz!"})]})}),Object(j.jsxs)("div",{className:"SecondBox",children:[Object(j.jsx)("h2",{children:"Zasady gry"}),Object(j.jsxs)("div",{className:"optionsGame",children:[Object(j.jsx)("p",{children:"Gra Mole Escape polega na sterowaniu krecikiem klawiszami: w - g\xf3ra, a - lewo, s - d\xf3\u0142, d - prawo. "}),Object(j.jsx)("p",{children:"Trzeba zbiera\u0107 owoce kt\xf3re daj\u0105 1 punkt, donaty kt\xf3re daj\u0105 5 punkt\xf3w, "}),Object(j.jsx)("p",{children:"Natomiast gdy krecik zje kupe to straci 3 punkty."}),Object(j.jsx)("p",{children:"\u017beby nie przegra\u0107 trzeba omija\u0107 star\u0105 babci\u0119 oraz gniewnego m\u0142odego rolinka."}),Object(j.jsx)("p",{children:"W grze naliczaj\u0105 si\u0119 punkty zdobyte punkty oraz odlicza si\u0119 czas rozgrywki."})]})]}),Object(j.jsxs)("div",{className:"ThirdBox",children:[Object(j.jsx)("h2",{children:"TOP 5 Graczy"}),Object(j.jsx)("ul",{children:n.map(((e,t)=>Object(j.jsxs)("li",{children:[t+1,". ",e.Nick," - Wynik: ",e.Score]},t)))})]})]}),e&&Object(j.jsx)(h,{}),b&&Object(j.jsx)(u,{handleClose:v,nick:a})]})}var p=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(b,{})}),Object(j.jsx)(l.a,{path:"/register",element:Object(j.jsx)(d,{})}),Object(j.jsx)(l.a,{path:"/start",element:Object(j.jsx)(O,{})})]})};n.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(o.a,{children:Object(j.jsx)(p,{})}))}},[[33,1,2]]]);
//# sourceMappingURL=main.cab8b4b1.chunk.js.map