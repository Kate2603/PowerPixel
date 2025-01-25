import{s as M,f as $,a as C}from"./assets/scroll-up-1ca6a422.js";import{T as q}from"./assets/vendor-cc1203f3.js";const T=document.querySelector(".pagination-container"),d=document.querySelector(".pagination-pages"),h=document.querySelectorAll(".pagination-arrows"),b=h[0].children[0].children[0],y=h[0].children[1].children[0],E=h[1].children[0].children[0],k=h[1].children[1].children[0];let t;function B(c="Muscles",e=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${c}&page=${e}&limit=10`).then(s=>s.json()).then(s=>{const a=s.totalPages;if(a>=2){T.removeAttribute("hidden");let r=[];for(let n=0;n<a;n++)r.push(`<li><button class="pagination-page" data-page="${n+1}">${n+1}</button></li>`);d.innerHTML=r.join("")}return t=d.children[e-1].children[0],t.classList.toggle("active",!0),a}).then(s=>{d.addEventListener("click",i=>{if(i.currentTarget!==i.target&&i.target.dataset.page!=t.innerText){const o=i.target;i.target.dataset.page,t.classList.toggle("active",!1),o.classList.toggle("active",!0),t=o,t.dataset.page>1?a():t.dataset.page==1&&r(),t.dataset.page==s?n():l()}});function a(){b.removeAttribute("disabled",""),y.removeAttribute("disabled","")}function r(){b.setAttribute("disabled",""),y.setAttribute("disabled","")}function n(){E.setAttribute("disabled",""),k.setAttribute("disabled","")}function l(){E.removeAttribute("disabled",""),k.removeAttribute("disabled","")}b.addEventListener("click",i=>{t.classList.toggle("active",!1),t=d.children[0].children[0],t.classList.toggle("active",!0),r(),l()}),y.addEventListener("click",i=>{const o=Number(t.dataset.page)-1;t.classList.toggle("active",!1),t=d.children[o-1].children[0],t.classList.toggle("active",!0),t.dataset.page==1&&r(),l()}),E.addEventListener("click",i=>{const o=Number(t.dataset.page)+1;t.classList.toggle("active",!1),t=d.children[o-1].children[0],t.classList.toggle("active",!0),t.dataset.page==s&&n(),a()}),k.addEventListener("click",i=>{t.classList.toggle("active",!1),t=d.children[s-1].children[0],t.classList.toggle("active",!0),n(),a()})}).catch(s=>{console.log(s)})}B();const F=()=>{document.getElementById("subscription-form").addEventListener("submit",async e=>{var r,n,l;e.preventDefault();const s=e.target.elements.email,a=s.value;try{const i=await M(a);if(i){const o=((r=i.data)==null?void 0:r.message)||i.message||"Subscription successful!";q({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(i){const o=((l=(n=i.response)==null?void 0:n.data)==null?void 0:l.message)||i.message||"An error occurred. Please try again later.";q({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},g=document.querySelector(".js-search-form");document.querySelector(".js-search-input");function S(){g.classList.contains("hidden-search")||g.classList.add("hidden-search")}function N(){g.classList.contains("hidden-search")&&g.classList.remove("hidden-search")}const u=document.querySelector('button[data-name="Muscles"]'),v=document.querySelector('button[data-name="Body parts"]'),m=document.querySelector('button[data-name="Equipment"]'),w=document.querySelector(".exercises-categories-list");let j=1,A;u.addEventListener("click",async c=>{u.classList.add("active"),m.classList.remove("active"),v.classList.remove("active"),f.classList.remove("hidden"),L.classList.add("hidden"),S(),p("Muscles")});v.addEventListener("click",async c=>{u.classList.remove("active"),m.classList.remove("active"),v.classList.add("active"),f.classList.remove("hidden"),L.classList.add("hidden"),S(),p("Body parts")});m.addEventListener("click",async c=>{u.classList.remove("active"),m.classList.add("active"),v.classList.remove("active"),f.classList.remove("hidden"),L.classList.add("hidden"),S(),p("Equipment")});async function p(c){try{A=await $(c,j),w.innerHTML="",w.insertAdjacentHTML("beforeend",D(A.results))}catch(e){console.log("Error fetching categories:",e)}}async function H(){u.classList.add("active"),p("Muscles")}function D(c){return c.map(e=>{const{filter:s,name:a,imgURL:r}=e;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${r}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const I=document.querySelector(".filtered-exercises-categories-list"),f=document.querySelector(".exercises-list-container"),L=document.querySelector(".filtered-exercises-list-container");let x={};w.addEventListener("click",async c=>{const e=c.target.closest(".exercises-categories-item");if(L.classList.remove("hidden"),e){let a="";switch(e.getAttribute("data-category-filter")){case"Muscles":a="muscles";break;case"Body parts":a="bodypart";break;case"Equipment":a="equipment";break}const r=e.getAttribute("data-body-part");x={[a]:r,keyword:"",page:1,limit:10},f.classList.add("hidden")}console.log(x);const s=await C({...x});console.log(s.results),N(),I.innerHTML=R(s.results)});const R=c=>c.map(e=>`<li>
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
              </li>`).join("");document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".sun-icon"),e=document.querySelector(".modal-backdrop"),s=document.querySelector(".modal-close");if(c&&e&&s){let a=function(){e.classList.add("is-open"),s.style.display="block",document.addEventListener("keydown",n),e.addEventListener("click",l)},r=function(){e.classList.remove("is-open"),s.style.display="none",document.removeEventListener("keydown",n),e.removeEventListener("click",l)},n=function(i){i.key==="Escape"&&r()},l=function(i){i.target===e&&r()};c.addEventListener("click",a),s.addEventListener("click",r)}});document.addEventListener("DOMContentLoaded",()=>{F(),H()});
//# sourceMappingURL=index.js.map
