import{s as M,f as $,a as C}from"./assets/scroll-up-47d5ac5e.js";import{T as S}from"./assets/vendor-cc1203f3.js";const T=document.querySelector(".pagination-container"),d=document.querySelector(".pagination-pages"),h=document.querySelectorAll(".pagination-arrows"),L=h[0].children[0].children[0],y=h[0].children[1].children[0],E=h[1].children[0].children[0],k=h[1].children[1].children[0];let t;function B(a="Muscles",e=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${a}&page=${e}&limit=10`).then(i=>i.json()).then(i=>{const s=i.totalPages;if(s>=2){T.removeAttribute("hidden");let c=[];for(let n=0;n<s;n++)c.push(`<li><button class="pagination-page" data-page="${n+1}">${n+1}</button></li>`);d.innerHTML=c.join("")}return t=d.children[e-1].children[0],t.classList.toggle("active",!0),s}).then(i=>{d.addEventListener("click",r=>{if(r.currentTarget!==r.target&&r.target.dataset.page!=t.innerText){const l=r.target;r.target.dataset.page,t.classList.toggle("active",!1),l.classList.toggle("active",!0),t=l,t.dataset.page>1?s():t.dataset.page==1&&c(),t.dataset.page==i?n():o()}});function s(){L.removeAttribute("disabled",""),y.removeAttribute("disabled","")}function c(){L.setAttribute("disabled",""),y.setAttribute("disabled","")}function n(){E.setAttribute("disabled",""),k.setAttribute("disabled","")}function o(){E.removeAttribute("disabled",""),k.removeAttribute("disabled","")}L.addEventListener("click",r=>{t.classList.toggle("active",!1),t=d.children[0].children[0],t.classList.toggle("active",!0),c(),o()}),y.addEventListener("click",r=>{const l=Number(t.dataset.page)-1;t.classList.toggle("active",!1),t=d.children[l-1].children[0],t.classList.toggle("active",!0),t.dataset.page==1&&c(),o()}),E.addEventListener("click",r=>{const l=Number(t.dataset.page)+1;t.classList.toggle("active",!1),t=d.children[l-1].children[0],t.classList.toggle("active",!0),t.dataset.page==i&&n(),s()}),k.addEventListener("click",r=>{t.classList.toggle("active",!1),t=d.children[i-1].children[0],t.classList.toggle("active",!0),n(),s()})}).catch(i=>{console.log(i)})}B();const F=()=>{document.getElementById("subscription-form").addEventListener("submit",async e=>{var c,n,o;e.preventDefault();const i=e.target.elements.email,s=i.value;try{const r=await M(s);if(r){const l=((c=r.data)==null?void 0:c.message)||r.message||"Subscription successful!";S({text:l,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),i.value=""}}catch(r){const l=((o=(n=r.response)==null?void 0:n.data)==null?void 0:o.message)||r.message||"An error occurred. Please try again later.";S({text:l,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},g=document.querySelector(".js-search-form");document.querySelector(".js-search-input");function A(){g.classList.contains("hidden-search")||g.classList.add("hidden-search")}function N(){g.classList.contains("hidden-search")&&g.classList.remove("hidden-search")}const u=document.querySelector('button[data-name="Muscles"]'),v=document.querySelector('button[data-name="Body parts"]'),m=document.querySelector('button[data-name="Equipment"]'),w=document.querySelector(".exercises-categories-list");let j=1,q;u.addEventListener("click",async a=>{u.classList.add("active"),m.classList.remove("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),A(),p("Muscles")});v.addEventListener("click",async a=>{u.classList.remove("active"),m.classList.remove("active"),v.classList.add("active"),f.classList.remove("hidden"),b.classList.add("hidden"),A(),p("Body parts")});m.addEventListener("click",async a=>{u.classList.remove("active"),m.classList.add("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),A(),p("Equipment")});async function p(a){try{q=await $(a,j),w.innerHTML="",w.insertAdjacentHTML("beforeend",D(q.results))}catch(e){console.log("Error fetching categories:",e)}}async function H(){u.classList.add("active"),p("Muscles")}function D(a){return a.map(e=>{const{filter:i,name:s,imgURL:c}=e;return` <li class="exercises-categories-item" data-body-part='${s}' data-category-filter='${i}'>
			<button type="button" class="exercises-categories-btn"  alt="${s}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${c}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${s}</h3>
					<p class="exercises-category-descr">${i}</p>
				</div>
			</button>
		</li> `}).join("")}const I=document.querySelector(".filtered-exercises-categories-list"),f=document.querySelector(".exercises-list-container"),b=document.querySelector(".filtered-exercises-list-container");let x={};w.addEventListener("click",async a=>{const e=a.target.closest(".exercises-categories-item");if(b.classList.remove("hidden"),e){let s="";switch(e.getAttribute("data-category-filter")){case"Muscles":s="muscles";break;case"Body parts":s="bodypart";break;case"Equipment":s="equipment";break}const c=e.getAttribute("data-body-part");x={[s]:c,keyword:"",page:1,limit:10},f.classList.add("hidden")}console.log(x);const i=await C({...x});console.log(i.results),N(),I.innerHTML=R(i.results)});const R=a=>a.map(e=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${e.rating}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button">Start
                <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#icon-arrow-single-right"></use>
                  </svg>
                  </button>
                  <div class="filtered-categories-content">
                  <div class="filtered-categories-content-title">
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <h3>${e.name}</h3>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${e.burnedCalories} / 3 min</p>
                  <p><span>Body Part:</span> ${e.bodyPart}</p>
                  <p><span>Target:</span>${e.target}</p></div></div>
                </div>
              </li>`).join("");document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close");if(a&&e){let i=function(){a.classList.add("is-open"),e.style.display="block",document.addEventListener("keydown",c),a.addEventListener("click",n)},s=function(){a.classList.remove("is-open"),e.style.display="none",document.removeEventListener("keydown",c),a.removeEventListener("click",n)},c=function(o){o.key==="Escape"&&s()},n=function(o){o.target===a&&s()};document.body.addEventListener("click",o=>{o.target.closest(".start-button")&&i()}),e.addEventListener("click",s)}});document.addEventListener("DOMContentLoaded",()=>{F(),H()});
//# sourceMappingURL=index.js.map
