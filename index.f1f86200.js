function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=e.parcelRequired5de;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){s[t]=e},e.parcelRequired5de=o),o.register("7PhYn",(function(e,n){var s,o;t(e.exports,"resolve",(()=>s),(t=>s=t)),t(e.exports,"register",(()=>o),(t=>o=t));var a={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},s=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.f1f86200.js","68PQV":"Piedra.b841ac81.svg","7coe5":"Papel.552b8711.svg","k8vdb":"Tijera.1bc90498.svg","avUPH":"win.1eea6986.svg","iwqfS":"lose.342a139d.svg","jZnD5":"tie.942fa99c.svg"}'));const a={data:{currentGame:{myPlay:"",computerPlay:""},history:[]},listeners:[],init(){const t=localStorage.getItem("score");null!=JSON.parse(t)&&this.setState(JSON.parse(t))},getState(){return this.data},setState(t){this.data=t;for(const e of this.listeners)e(t);localStorage.setItem("score",JSON.stringify(t))},setPlay(t,e){const n=this.getState();n.currentGame.myPlay=t,n.currentGame.computerPlay=e,n.history.push({player:n.currentGame.myPlay,computer:n.currentGame.computerPlay}),this.setState(n)},whoWins(t,e){const n=["scissors"==t&&"rock"==e,"rock"==t&&"paper"==e,"paper"==t&&"scissors"==e];return["scissors"==t&&"paper"==e,"rock"==t&&"scissors"==e,"paper"==t&&"rock"==e].includes(!0)?1:n.includes(!0)?-1:0},getWhoWins(){const t=this.getState().currentGame,e=t.myPlay,n=t.computerPlay;return this.whoWins(e,n)},getHistoryOfPoints(){var t=0,e=0;const n=this.getState().history;for(const s of n)1==this.whoWins(s.player,s.computer)&&t++,-1==this.whoWins(s.player,s.computer)&&e++;return{player:t,computer:e}},subscribe(t){this.listeners.push(t)}};var c;o.register("kVZsc",(function(e,n){var s;t(e.exports,"getBundleURL",(()=>s),(t=>s=t));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),c=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("68PQV");var i;i=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("7coe5");var r;r=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("k8vdb");var d;d=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("avUPH");var l;l=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("iwqfS");var p;p=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("jZnD5");const m=[{path:/home/,component:function(t){const e=document.createElement("div");return e.classList.add("home"),e.innerHTML='\n      <text-comp tag="h1"></text-comp> \n      <button-comp>Empezar</button-comp>\n      <div class="hands__container">\n        <hands-comp tag="scissors"></hands-comp>\n        <hands-comp tag="rock"></hands-comp>\n        <hands-comp tag="paper"></hands-comp>\n      </div>\n      ',e.querySelector("button-comp").addEventListener("click",(()=>{t.goTo("/play")})),e}},{path:/play/,component:function(t){const e=document.createElement("div");return e.classList.add("home"),e.innerHTML='\n        <text-comp tag="h2">Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp> \n        <button-comp class="home__button">¡Jugar!</button-comp>\n        <div class="hands__container">\n          <hands-comp tag="scissors"></hands-comp>\n          <hands-comp tag="rock"></hands-comp>\n          <hands-comp tag="paper"></hands-comp>\n        </div>\n        ',e.querySelector("button-comp").addEventListener("click",(()=>{t.goTo("/game")})),e}},{path:/game/,component:function(t){const e=document.createElement("div");document.createElement("style"),e.classList.add("home");var n=0;e.innerHTML='\n            <div class="counter__cont">0</div>\n            <div class="hands__container">\n              <hands-comp tag="scissors" class="notSelected"></hands-comp>\n              <hands-comp tag="rock" class="notSelected"></hands-comp>\n              <hands-comp tag="paper" class="notSelected"></hands-comp>\n            </div>\n            ';const s=setInterval((()=>{n++;const c=e.querySelector(".counter__cont");c.innerHTML=`${n}`,n>3&&(clearInterval(s),""!=a.getState().currentGame.myPlay?(o.style.display="none",c.style.display="none",e.classList.remove("home"),e.classList.add("home--play"),e.innerHTML=`\n        <div class="hands--play__container">\n          <div class="computer-play">\n            <hands-comp tag="${a.getState().currentGame.computerPlay}"></hands-comp>\n        \n          </div>\n          <div>\n            <hands-comp tag="${a.getState().currentGame.myPlay}" class="my-play"></hands-comp>\n          </div>\n        </div>\n        `,"1"==a.getWhoWins()?setTimeout((()=>{t.goTo("/win")}),1e3):"-1"==a.getWhoWins()?setTimeout((()=>{t.goTo("/lose")}),1e3):"0"==a.getWhoWins()&&setTimeout((()=>{t.goTo("/tie")}),1e3)):setTimeout((()=>{t.goTo("/play")}),900))}),1e3),o=e.querySelector(".hands__container");return o.addEventListener("click",(t=>{const e=["rock","paper","scissors"];var n=e[Math.floor(Math.random()*e.length)];a.setPlay(t.target.tag,n)})),function(){const t=o.children,e=t[0],n=t[1],s=t[2];e.addEventListener("click",(()=>{e.classList="selected",n.classList="notSelected",s.classList="notSelected"})),n.addEventListener("click",(()=>{e.classList="notSelected",n.classList="selected",s.classList="notSelected"})),s.addEventListener("click",(()=>{e.classList="notSelected",n.classList="notSelected",s.classList="selected"}))}(),e}},{path:/win/,component:function(t){const e=document.createElement("div");return e.classList.add("home--play"),e.innerHTML=`\n        <div class="hands--play__container">\n        <div class="computer-play">\n            <hands-comp tag="${a.getState().currentGame.computerPlay}"></hands-comp>\n        </div>\n        <div>\n            <hands-comp tag="${a.getState().currentGame.myPlay}" class="my-play"></hands-comp>\n        </div>\n        </div>\n        <div class="win__container">\n            <div class="win__star--container">\n                <img src="${d}" alt="winImage" class="win__star">\n                <text-comp tag="h3" class="win__star--text">Ganaste</text-comp>  \n            </div>\n            <div class="win__score--container">\n                <text-comp tag="h3">Score</text-comp> \n                <text-comp tag="h4">Vos: ${a.getHistoryOfPoints().player}</text-comp> \n                <text-comp tag="h4">Máquina: ${a.getHistoryOfPoints().computer}</text-comp>\n            </div>\n            <button-comp>Volver a Jugar</button-comp>\n        <div>\n        `,e.querySelector("button-comp").addEventListener("click",(()=>{t.goTo("/play")})),e}},{path:/lose/,component:function(t){const e=document.createElement("div");return e.classList.add("home--play"),e.innerHTML=`\n        <div class="hands--play__container">\n        <div class="computer-play">\n            <hands-comp tag="${a.getState().currentGame.computerPlay}"></hands-comp>\n        </div>\n        <div>\n            <hands-comp tag="${a.getState().currentGame.myPlay}" class="my-play"></hands-comp>\n        </div>\n        </div>\n        <div class="lose__container">\n            <div class="lose__star--container">\n                <img src="${l}" alt="loseImage" class="lose__star">\n                <text-comp tag="h3" class="lose__star--text">Perdiste</text-comp>  \n            </div>\n            <div class="lose__score--container">\n                <text-comp tag="h3">Score</text-comp> \n                <text-comp tag="h4">Vos: ${a.getHistoryOfPoints().player}</text-comp> \n                <text-comp tag="h4">Máquina: ${a.getHistoryOfPoints().computer}</text-comp>\n            </div>\n            <button-comp>Volver a Jugar</button-comp>\n        <div>\n        `,e.querySelector("button-comp").addEventListener("click",(()=>{t.goTo("/play")})),e}},{path:/tie/,component:function(t){const e=document.createElement("div");return e.classList.add("home--play"),e.innerHTML=`\n        <div class="hands--play__container">\n        <div class="computer-play">\n            <hands-comp tag="${a.getState().currentGame.computerPlay}"></hands-comp>\n        </div>\n        <div>\n            <hands-comp tag="${a.getState().currentGame.myPlay}" class="my-play"></hands-comp>\n        </div>\n        </div>\n        <div class="tie__container">\n            <div class="tie__star--container">\n                <img src="${p}" alt="tieImage" class="tie__star">\n            </div>\n            <div class="tie__score--container">\n                <text-comp tag="h3">Score</text-comp> \n                <text-comp tag="h4">Vos: ${a.getHistoryOfPoints().player}</text-comp> \n                <text-comp tag="h4">Máquina: ${a.getHistoryOfPoints().computer}</text-comp>\n            </div>\n            <button-comp>Volver a Jugar</button-comp>\n        <div>\n        `,e.querySelector("button-comp").addEventListener("click",(()=>{t.goTo("/play")})),e}}];!function(t){function e(t){history.pushState({},"",t),n(t)}function n(n){for(const s of m)if(s.path.test(n)){const n=s.component({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(n)}}location.pathname,e("/home"),window.onpopstate=function(){n(location.pathname.replace("/deafio-modulo5",""))}}(document.querySelector(".root")),function(){class t extends HTMLElement{constructor(){super(),this.tags=["h1","h2","p","span","h3","h4","h5"],this.tag="h2",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))?this.tag=this.getAttribute("tag"):this.tag}connectedCallback(){const t=document.createElement("style");t.innerHTML='\n        .h1 {\n          font-size: 90px;\n          font-family: "Lilita One", cursive;\n          font-weight: 700;\n          color: #009048;\n          text-align: center;\n        }\n        .h2{\n          font-size: 50px;\n          text-align: center;\n          font-weight: 600;\n          margin: 0;\n        }  \n        @media (min-width:680px){\n          .h2{\n            font-size: 60px;\n            padding: 0 22%;\n          }\n        }\n        .p{\n          font-size: 45px;\n          color: #d8fcfc;\n        }\n        .span{\n          font-size: 90px;\n          font-family: "Lilita One", cursive;\n          font-weight: 700;\n          color: #91ccaf;\n          text-align: center;\n        }\n        .h3{\n          font-size: 55px;\n          text-align: center;\n          margin: 0 0 20px 0;\n        }\n        .h4{\n          font-size: 45px;\n          text-align: right;\n          margin: 0;\n        }\n        .h5{\n          font-size: 100px;\n          font-weight: 700;\n          text-align: center;\n        }\n        ',this.shadow.appendChild(t),this.render()}render(){const t=document.createElement(this.tag),e=document.createElement("div");e.classList.add("h1"),"h1"==this.tag?(e.innerHTML='        \n            Piedra, <br />\n            Papel <text-comp tag="span">Ó</text-comp> <br />\n            Tijera\n          ',this.shadow.appendChild(e)):this.shadow.appendChild(t),t.className=this.tag,t.textContent=this.textContent}}customElements.define("text-comp",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const t=document.createElement("button"),e=document.createElement("style");t.className="button",e.innerHTML='\n      .button {\n        font-family: "Odibee Sans", cursive;\n        display: block;\n        font-size: 45px;\n        margin: 0 auto 0 auto;\n        padding: 19px 18%;\n        color: #d8fcfc;\n        background-color: #006cfc;\n        border: solid #001997 10px;\n        border-radius: 10px;\n        cursor: pointer;\n        transition-duration: 0.4s;\n      }\n      @media (min-width:960px){\n        .button{\n          padding: 19px 91px;\n        }\n      }\n      .button:active {\n        transform: translateY(7px);\n      }\n      ',t.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("button-comp",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.tags=["rock","paper","scissors"],this.tag=" ",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))?this.tag=this.getAttribute("tag"):this.tag}connectedCallback(){const t=document.createElement("style");t.innerHTML="\n          .hand{\n            height: 19vh;\n            transform: translateY(1vh);\n          }\n\n        ",this.shadow.appendChild(t),this.render()}render(){const t=document.createElement("img");t.classList.add("hand"),"rock"==this.tag?t.src=c:"paper"==this.tag?t.src=i:"scissors"==this.tag&&(t.src=r),this.shadow.appendChild(t)}}customElements.define("hands-comp",t)}(),a.init();
//# sourceMappingURL=index.f1f86200.js.map