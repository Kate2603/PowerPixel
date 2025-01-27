import{s as k,g as P,a as B,f as D,b as C,c as H,d as A,e as I,h as F,i as j,j as z}from"./assets/modal-800d0a55.js";import{T as E,g as N}from"./assets/vendor-e5c2d73b.js";const G=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var i,n,r;t.preventDefault();const a=t.target.elements.email,s=a.value;try{const c=await k(s);if(c){const o=((i=c.data)==null?void 0:i.message)||c.message||"Subscription successful!";E({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),a.value=""}}catch(c){const o=((r=(n=c.response)==null?void 0:n.data)==null?void 0:r.message)||c.message||"An error occurred. Please try again later.";E({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})};function g({onChange:e,id:t}){const a=document.querySelector(`#pagination-${t}`),s=P();if(!O({container:a,paginationData:s}))return;document.querySelector('[data-element="pages-list"]').addEventListener("click",r=>{if(r.target.tagName==="BUTTON"){const c=Number(r.target.dataset.page),o=document.querySelector(".pagination-page.active"),L=document.querySelector(".page-btn.active");o.classList.remove("active"),L.classList.remove("active"),r.target.parentElement.classList.add("active"),r.target.classList.add("active"),e({page:c})}})}function O({container:e,paginationData:{pagesCount:t,page:a}}){if(t===1)return $({container:e}),!1;const s=Array.from({length:t}).reduce((i,n,r)=>{const c=r+1,o=c===a?"active":"";return i+=`<li class="pagination-page ${o}">
        <button type="button" data-page="${c}" class="page-btn ${o}">
          ${c}
        </button>
      </li>`,i},"");return e.innerHTML=`<ul class="pagination-pages" data-element="pages-list">${s}</ul>`,!0}function $({id:e,container:t}){let a=t;a||(a=document.querySelector(`#pagination-${e}`)),a.innerHTML=""}function U(){document.querySelector("#pagination-categories").classList.add("hidden")}function _(){document.querySelector("#pagination-categories").classList.remove("hidden")}const u=document.querySelector(".js-search-form");u.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;B(t),t?U():_(),b({page:1,isSearch:!0})});function S(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function R(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const V=document.querySelector('button[data-name="Muscles"]'),W=document.querySelector('button[data-name="Body parts"]'),J=document.querySelector('button[data-name="Equipment"]'),p=document.querySelector(".exercises-categories-list"),y=document.querySelector('[data-name="Muscles-item"]'),q=document.querySelector('[data-name="Body-parts-item"]'),x=document.querySelector('[data-name="Equipment-item"]'),f=document.querySelector(".current-category");let M;V.addEventListener("click",async()=>{y.classList.add("active"),x.classList.remove("active"),q.classList.remove("active"),v.classList.remove("hidden"),h.classList.add("hidden"),S(),f.innerHTML="",d({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{d({category:"Muscles",page:e})}})}})});W.addEventListener("click",async()=>{y.classList.remove("active"),x.classList.remove("active"),q.classList.add("active"),v.classList.remove("hidden"),h.classList.add("hidden"),f.innerHTML="",S(),await d({category:"Body parts",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{d({category:"Body parts",page:e})}})}})});J.addEventListener("click",async()=>{y.classList.remove("active"),x.classList.add("active"),q.classList.remove("active"),v.classList.remove("hidden"),h.classList.add("hidden"),f.innerHTML="",S(),d({category:"Equipment",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{d({category:"Equipment",page:e})}})}})});async function d({category:e,onMount:t,page:a=1}){try{document.querySelector(".loader").classList.toggle("is-active",!0);const{results:s,page:i,perPage:n,totalPages:r}=await D(e,a);M=s,C({page:i,limit:n,pagesCount:r}),p.innerHTML="",p.insertAdjacentHTML("beforeend",Q(M)),t&&t()}catch(s){console.log("Error fetching categories:",s)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function K(){y.classList.add("active"),d({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{d({category:"Muscles",page:e})}})}})}function Q(e){return e.map(t=>{const{filter:a,name:s,imgURL:i}=t;return` <li class="exercises-categories-item" data-body-part='${s}' data-category-filter='${a}'>
			<button type="button" class="exercises-categories-btn"  alt="${s}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${i}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${s}</h3>
					<p class="exercises-category-descr">${a}</p>
				</div>
			</button>
		</li> `}).join("")}const w=document.querySelector(".filtered-exercises-categories-list"),v=document.querySelector(".exercises-list-container"),h=document.querySelector(".filtered-exercises-list-container");p.addEventListener("click",async e=>{$({id:"exercises"}),await b({page:1,event:e}),g({id:"categories",onChange:({page:t})=>{b({event:e,page:t})}})});async function b({page:e,event:t,isSearch:a}){let s;t?s=t.target.closest(".exercises-categories-item"):s=p.querySelector(".exercises-categories-item"),h.classList.remove("hidden");let i={};if(s&&!a){let l="";switch(s.getAttribute("data-category-filter")){case"Muscles":l="muscles";break;case"Body parts":l="bodypart";break;case"Equipment":l="equipment";break}const m=s.getAttribute("data-body-part");i={[l]:m,page:e,limit:10},F({category:l,target:m}),v.classList.add("hidden")}else{const l=j(),{target:m,category:T}=z();i={[T]:m,page:e,limit:10,keyword:l}}document.querySelector(".loader").classList.toggle("is-active",!0);const n=await H({...i}),{results:r,page:c,perPage:o,totalPages:L}=n;document.querySelector(".loader").classList.toggle("is-active",!1),R(),A(r),C({page:c,limit:o,pagesCount:L}),r.length>0?(w.innerHTML=X(),f.innerHTML=` <span class="exercises-title-slash">/</span> ${s.getAttribute("data-category-filter")}`):w.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, no items found</strong>'}const X=()=>I().map(({id:e,rating:t,name:a,burnedCalories:s,bodyPart:i,target:n})=>`<li>
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
                  <h3>${a}</h3>
                  </div>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${s} / 3 min</p>
                  <p><span>Body Part:</span> ${i}</p>
                  <p><span>Target:</span>${n}</p></div></div>
                </div>
              </li>`).join("");document.addEventListener("DOMContentLoaded",()=>{G(),K()});new N({elements_selector:".lazy"});
//# sourceMappingURL=index.js.map
