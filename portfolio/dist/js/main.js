(()=>{"use strict";const e=[{id:1,title:"Нет пепла",img:"1.png",right:!0},{id:2,title:"Есть дым и пепел",img:"2.png",right:!1},{id:3,title:"Меньше едкого запаха,чем при курении сигарет",img:"3.png",right:!0},{id:4,title:"Нет нагревания",img:"4.png",right:!1},{id:5,title:"Настоящий вкус табака",img:"5.png",right:!0},{id:6,title:"Нет сигаретного дыма",img:"6.png",right:!0}],t=["Не совсем так","Кажется, где-то ошибка","Чего-то не хватает"];"undefined"!=typeof window&&window.Telegram.WebApp.expand();const i=document.querySelector(".game_title"),n=document.querySelector(".game_wrapper"),s=document.querySelector(".container"),d=document.querySelector(".btn_again"),a=document.querySelector(".btn_start");let l;function c(e){if(e.classList.contains("filled")){const t=e.dataset.id,i=document.querySelector(`.game_item[data-id="${t}"]`);e.src="./images/7.png",e.classList.remove("filled"),e.dataset.id="",i.classList.remove("disabled")}}function o(e){if(e.classList.contains("disabled"))return;const t=document.querySelector(".puzzle_container img:not(.filled)");if(t){const i=e.querySelector("img");t.src=i.src,t.dataset.id=e.dataset.id,t.classList.add("filled"),e.classList.add("disabled")}}window.onload=()=>{if(l=document.querySelector(".game_validate"),!l)return void console.error("Элемент с классом 'game_validate' не найден на странице.");const r=document.createElement("button");r.classList.add("btn_validate","btn_game"),r.textContent="Готово",r.addEventListener("click",(()=>{const a=document.querySelectorAll(".puzzle_field"),c=Array.from(a).every((t=>{const i=t.dataset.id,n=e.find((e=>e.id===Number(i)));return t.src.includes(n.img)===n.right})),o=function(){const e=Math.floor(Math.random()*t.length);return t[e]}();c?function(e,t,i,n,s){e.classList.add("hide"),t.classList.remove("hide"),i.style.display="none",n.style.display="flex",s.innerHTML="<b>Прекрасно! Вы отлично справились!</b>Главное преимущество — отсутствие горения.А значит"}(r,d,n,s,i):function(e,t,i,n,s,d,a){d.style.display="block",e.classList.add("hide"),t.classList.remove("hide"),i.style.display="none",n.style.display="none",s.style.display="none";const l=document.createElement("div");l.classList.add("quize__x__item","quize__x__item--status"),l.innerHTML=`\n        <div class='quize__x__item--status__info'>\n          <div class='quize__x__item--status__info__inner'>\n            <div class='quize__x__item--status__icon'>\n              <img src='images/wrong.svg'>\n            </div>\n            <div class='quize__x__item--status__title'>${a}</div>\n          </div>\n        </div>\n      `,d.insertBefore(l,s.nextSibling)}(r,d,l,n,i,s,o);const m=m;!function(e,t){const i={user_id:e,event:"passed_all_scenario"};fetch("https://iqosmeetingbot-test.cleverbots.ru/api/actions/q_club/webbot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>e.json())).then((e=>{console.log("Событие успешно отправлено:",e)})).catch((e=>{console.error("Ошибка при отправке события:",e)}))}(m)})),d.addEventListener("click",(()=>{location.reload()})),a.addEventListener("click",(()=>{i.textContent=null,n.classList.remove("hide"),l.classList.remove("hide"),a.classList.add("hide"),s.style.display="block"})),l.appendChild(r),function(){const e=document.createElement("div");e.classList.add("puzzle_container");for(let t=1;t<=4;t++){const i=document.createElement("img");i.classList.add("puzzle_field",`puzzle_field_${t}`),i.src="./images/7.png",i.alt="puzzle_wrapper",e.appendChild(i),i.addEventListener("click",(()=>{c(i)}))}l.appendChild(e)}(),function(e,t,i){e.forEach(((e,n)=>{const s=document.createElement("div");s.classList.add("game_item"),s.dataset.id=e.id,s.innerHTML=`\n        <p class="item_title">${e.title}</p>\n        <img src="./images/${e.img}" alt="pazzle" class="item_image item_image_${n}" />\n      `,s.addEventListener("click",(()=>{i(s)})),t.appendChild(s)}))}(e,n,o)}})();