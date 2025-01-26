import{s as C,g as P,a as x,f as B,b as w,c as T,d as I,e as A,h as D}from"./assets/modal-2e601990.js";import{T as q,g as F}from"./assets/vendor-e5c2d73b.js";const H=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var i,o,n;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const r=await C(a);if(r){const c=((i=r.data)==null?void 0:i.message)||r.message||"Subscription successful!";q({text:c,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(r){const c=((n=(o=r.response)==null?void 0:o.data)==null?void 0:n.message)||r.message||"An error occurred. Please try again later.";q({text:c,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})};function u({onChange:e,id:t}){const s=document.querySelector(`#pagination-${t}`),a=P();if(!j({container:s,paginationData:a}))return;document.querySelector('[data-element="pages-list"]').addEventListener("click",n=>{if(n.target.tagName==="BUTTON"){const r=Number(n.target.dataset.page),c=document.querySelector(".pagination-page.active"),y=document.querySelector(".page-btn.active");c.classList.remove("active"),y.classList.remove("active"),n.target.parentElement.classList.add("active"),n.target.classList.add("active"),e({page:r})}})}function j({container:e,paginationData:{pagesCount:t,page:s}}){if(t===1)return $({container:e}),!1;const a=Array.from({length:t}).reduce((i,o,n)=>{const r=n+1,c=r===s?"active":"";return i+=`<li class="pagination-page ${c}">
        <button type="button" data-page="${r}" class="page-btn ${c}">
          ${r}
        </button>
      </li>`,i},"");return e.innerHTML=`<ul class="pagination-pages" data-element="pages-list">${a}</ul>`,!0}function $({id:e,container:t}){let s=t;s||(s=document.querySelector(`#pagination-${e}`)),s.innerHTML=""}const d=document.querySelector(".js-search-form");d.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;x(t),v({page:1}),x(""),d.reset()});function h(){d.classList.contains("hidden-search")||d.classList.add("hidden-search")}function z(){d.classList.contains("hidden-search")&&d.classList.remove("hidden-search")}const N=document.querySelector('button[data-name="Muscles"]'),G=document.querySelector('button[data-name="Body parts"]'),O=document.querySelector('button[data-name="Equipment"]'),g=document.querySelector(".exercises-categories-list"),m=document.querySelector('[data-name="Muscles-item"]'),L=document.querySelector('[data-name="Body-parts-item"]'),b=document.querySelector('[data-name="Equipment-item"]');let S;N.addEventListener("click",async()=>{m.classList.add("active"),b.classList.remove("active"),L.classList.remove("active"),p.classList.remove("hidden"),f.classList.add("hidden"),h(),l({category:"Muscles",onMount:()=>{u({id:"exercises",onChange:({page:e})=>{l({category:"Muscles",page:e})}})}})});G.addEventListener("click",async()=>{m.classList.remove("active"),b.classList.remove("active"),L.classList.add("active"),p.classList.remove("hidden"),f.classList.add("hidden"),h(),l({category:"Body parts",onMount:()=>{u({id:"exercises",onChange:({page:e})=>{l({category:"Body parts",page:e})}})}})});O.addEventListener("click",async()=>{m.classList.remove("active"),b.classList.add("active"),L.classList.remove("active"),p.classList.remove("hidden"),f.classList.add("hidden"),h(),l({category:"Equipment",onMount:()=>{u({id:"exercises",onChange:({page:e})=>{l({category:"Equipment",page:e})}})}})});async function l({category:e,onMount:t,page:s=1}){try{document.querySelector(".loader").classList.toggle("is-active",!0);const{results:a,page:i,perPage:o,totalPages:n}=await B(e,s);S=a,w({page:i,limit:o,pagesCount:n}),g.innerHTML="",g.insertAdjacentHTML("beforeend",_(S)),t&&t()}catch(a){console.log("Error fetching categories:",a)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function U(){m.classList.add("active"),l({category:"Muscles",onMount:()=>{u({id:"exercises",onChange:({page:e})=>{l({category:"Muscles",page:e})}})}})}function _(e){return e.map(t=>{const{filter:s,name:a,imgURL:i}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${i}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const E=document.querySelector(".filtered-exercises-categories-list"),p=document.querySelector(".exercises-list-container"),f=document.querySelector(".filtered-exercises-list-container");let M={};g.addEventListener("click",async e=>{$({id:"exercises"}),await v({page:1,event:e}),u({id:"categories",onChange:({page:t})=>{v({event:e,page:t})}})});async function v({page:e,event:t}){let s;if(t?s=t.target.closest(".exercises-categories-item"):s=g.querySelector(".exercises-categories-item"),f.classList.remove("hidden"),s){let c="";switch(s.getAttribute("data-category-filter")){case"Muscles":c="muscles";break;case"Body parts":c="bodypart";break;case"Equipment":c="equipment";break}const y=s.getAttribute("data-body-part"),k=D();M={[c]:y,page:e,limit:10,keyword:k},p.classList.add("hidden")}document.querySelector(".loader").classList.toggle("is-active",!0);const a=await T({...M}),{results:i,page:o,perPage:n,totalPages:r}=a;document.querySelector(".loader").classList.toggle("is-active",!1),z(),I(i),w({page:o,limit:n,pagesCount:r}),i.length>0?E.innerHTML=R():E.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, no items found</strong>'}const R=()=>A().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:i,target:o})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <div class="filtered-exercises-raiting-container">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div></div>
                <button class="start-button" data-id="${e}">Start
                  <svg class="icon-arrow" aria-hidden="true" width="18" height="18">
                    <use href="./img/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </button>
                <div class="filtered-categories-content">
               <div class="filtered-categories-content-top"> 
                <svg class="filtered-categories-icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <div class="filtered-categories-content-title">
                  <h3>${s}</h3>
                  </div>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${a} / 3 min</p>
                  <p><span>Body Part:</span> ${i}</p>
                  <p><span>Target:</span>${o}</p></div></div>
                </div>
              </li>`).join("");document.addEventListener("DOMContentLoaded",()=>{H(),U()});new F({elements_selector:".lazy"});
//# sourceMappingURL=index.js.map
