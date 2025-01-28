import{s as T,h as B,a as P,b as $,f as I,c as M,d as F,i as g,e as H,g as A,j as D,k as j,l as z,m as G}from"./assets/modal-36270ea2.js";import{T as q,g as W}from"./assets/vendor-e5c2d73b.js";const O=()=>{document.getElementById("subscription-form").addEventListener("submit",async s=>{var a,r,l;s.preventDefault();const i=s.target.elements.email,t=i.value;try{const c=await T(t);if(c){const d=((a=c.data)==null?void 0:a.message)||c.message||"Subscription successful!";q({text:d,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),i.value=""}}catch(c){const d=((l=(r=c.response)==null?void 0:r.data)==null?void 0:l.message)||c.message||"An error occurred. Please try again later.";q({text:d,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form"),R=document.querySelector(".search-button-icon-clear"),U=document.querySelector(".search-button-submit");u.addEventListener("submit",function(e){e.preventDefault();const s=e.target.firstElementChild.value;$(s),s?B():P(),L({page:1,isSearch:!0})});R.addEventListener("click",()=>{setTimeout(()=>{U.click()},0)});function b(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function V(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const _=document.querySelector('button[data-name="Muscles"]'),J=document.querySelector('button[data-name="Body parts"]'),K=document.querySelector('button[data-name="Equipment"]'),y=document.querySelector(".exercises-categories-list"),h=document.querySelector('[data-name="Muscles-item"]'),x=document.querySelector('[data-name="Body-parts-item"]'),S=document.querySelector('[data-name="Equipment-item"]'),p=document.querySelector(".current-category");let E;_.addEventListener("click",async()=>{h.classList.add("active"),S.classList.remove("active"),x.classList.remove("active"),f.classList.remove("hidden"),v.classList.add("hidden"),b(),p.innerHTML="",await o({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{o({category:"Muscles",page:e})}})}})});J.addEventListener("click",async()=>{h.classList.remove("active"),S.classList.remove("active"),x.classList.add("active"),f.classList.remove("hidden"),v.classList.add("hidden"),p.innerHTML="",b(),await o({category:"Body parts",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{o({category:"Body parts",page:e})}})}})});K.addEventListener("click",async()=>{h.classList.remove("active"),S.classList.add("active"),x.classList.remove("active"),f.classList.remove("hidden"),v.classList.add("hidden"),p.innerHTML="",b(),await o({category:"Equipment",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{o({category:"Equipment",page:e})}})}})});async function o({category:e,onMount:s,page:i=1}){try{document.querySelector(".loader").classList.toggle("is-active",!0);const{results:t,page:a,perPage:r,totalPages:l}=await I(e,i);E=t,M({page:a,limit:r,pagesCount:l}),y.innerHTML="",y.insertAdjacentHTML("beforeend",Q(E)),s&&s()}catch(t){console.log("Error fetching categories:",t)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function N(){h.classList.add("active"),o({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{o({category:"Muscles",page:e})}})}})}function Q(e){return e.map(s=>{const{filter:i,name:t,imgURL:a}=s;return` <li class="exercises-categories-item" data-body-part='${t}' data-category-filter='${i}'>
			<button type="button" class="exercises-categories-btn"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${a}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${t}</h3>
					<p class="exercises-category-descr">${i}</p>
				</div>
			</button>
		</li> `}).join("")}const w=document.querySelector(".filtered-exercises-categories-list"),f=document.querySelector(".exercises-list-container"),v=document.querySelector(".filtered-exercises-list-container");y.addEventListener("click",async e=>{F({id:"exercises"}),await L({page:1,event:e}),g({id:"categories",onChange:({page:s})=>{L({event:e,page:s})}})});async function L({page:e,event:s,isSearch:i}){let t;s?t=s.target.closest(".exercises-categories-item"):t=y.querySelector(".exercises-categories-item"),v.classList.remove("hidden");let a={};if(t&&!i){let n="";switch(t.getAttribute("data-category-filter")){case"Muscles":n="muscles";break;case"Body parts":n="bodypart";break;case"Equipment":n="equipment";break}const m=t.getAttribute("data-body-part");a={[n]:m,page:e,limit:window.innerWidth<768?8:10},j({category:n,target:m}),f.classList.add("hidden")}else{const n=z(),{target:m,category:k}=G();a={[k]:m,page:e,limit:10,keyword:n}}document.querySelector(".loader").classList.toggle("is-active",!0);const r=await H({...a}),{results:l,page:c,perPage:d,totalPages:C}=r;document.querySelector(".loader").classList.toggle("is-active",!1),V(),A(l),M({page:c,limit:d,pagesCount:C}),l.length>0?(w.innerHTML=X(),p.innerHTML=` <span class="exercises-title-slash">/</span> ${t.getAttribute("data-category-filter")}`):w.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, no items found</strong>'}const X=()=>D().map(({id:e,rating:s,name:i,burnedCalories:t,bodyPart:a,target:r})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <div class="filtered-exercises-raiting-container">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${s}
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
                  <h3>${i}</h3>
                  </div>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${t} / 3 min</p>
                  <p><span>Body Part:</span> ${a}</p>
                  <p><span>Target:</span>${r}</p></div></div>
                </div>
              </li>`).join("");document.addEventListener("DOMContentLoaded",()=>{O(),N()});new W({elements_selector:".lazy"});
//# sourceMappingURL=index.js.map
