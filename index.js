import{s as H,g as A,a as w,f as I,b as C,c as R,d as O,e as _,h as j,i as z,j as G,t as N,T as M}from"./assets/scroll-up-8f416e44.js";import{T as S,g as U}from"./assets/vendor-e5c2d73b.js";const V=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var i,c,r;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const n=await H(a);if(n){const o=((i=n.data)==null?void 0:i.message)||n.message||"Subscription successful!";S({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(n){const o=((r=(c=n.response)==null?void 0:c.data)==null?void 0:r.message)||n.message||"An error occurred. Please try again later.";S({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})};function g({onChange:e,id:t}){const s=document.querySelector(`#pagination-${t}`),a=A();if(!K({container:s,paginationData:a}))return;document.querySelector('[data-element="pages-list"]').addEventListener("click",r=>{if(r.target.tagName==="BUTTON"){const n=Number(r.target.dataset.page),o=document.querySelector(".pagination-page.active"),u=document.querySelector(".page-btn.active");o.classList.remove("active"),u.classList.remove("active"),r.target.parentElement.classList.add("active"),r.target.classList.add("active"),e({page:n})}})}function K({container:e,paginationData:{pagesCount:t,page:s}}){if(t===1)return T({container:e}),!1;const a=Array.from({length:t}).reduce((i,c,r)=>{const n=r+1,o=n===s?"active":"";return i+=`<li class="pagination-page ${o}">
        <button type="button" data-page="${n}" class="page-btn ${o}">
          ${n}
        </button>
      </li>`,i},"");return e.innerHTML=`<ul class="pagination-pages" data-element="pages-list">${a}</ul>`,!0}function T({id:e,container:t}){let s=t;s||(s=document.querySelector(`#pagination-${e}`)),s.innerHTML=""}const d=document.querySelector(".js-search-form");d.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;w(t),y({page:1}),w(""),d.reset()});function L(){d.classList.contains("hidden-search")||d.classList.add("hidden-search")}function W(){d.classList.contains("hidden-search")&&d.classList.remove("hidden-search")}const J=document.querySelector('button[data-name="Muscles"]'),Q=document.querySelector('button[data-name="Body parts"]'),X=document.querySelector('button[data-name="Equipment"]'),m=document.querySelector(".exercises-categories-list"),v=document.querySelector('[data-name="Muscles-item"]'),b=document.querySelector('[data-name="Body-parts-item"]'),E=document.querySelector('[data-name="Equipment-item"]');let q;J.addEventListener("click",async()=>{v.classList.add("active"),E.classList.remove("active"),b.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),L(),l({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{l({category:"Muscles",page:e})}})}})});Q.addEventListener("click",async()=>{v.classList.remove("active"),E.classList.remove("active"),b.classList.add("active"),p.classList.remove("hidden"),h.classList.add("hidden"),L(),l({category:"Body parts",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{l({category:"Body parts",page:e})}})}})});X.addEventListener("click",async()=>{v.classList.remove("active"),E.classList.add("active"),b.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),L(),l({category:"Equipment",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{l({category:"Equipment",page:e})}})}})});async function l({category:e,onMount:t,page:s=1}){try{document.querySelector(".loader").classList.toggle("is-active",!0);const{results:a,page:i,perPage:c,totalPages:r}=await I(e,s);q=a,C({page:i,limit:c,pagesCount:r}),m.innerHTML="",m.insertAdjacentHTML("beforeend",Z(q)),t&&t()}catch(a){console.log("Error fetching categories:",a)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function Y(){v.classList.add("active"),l({category:"Muscles",onMount:()=>{g({id:"exercises",onChange:({page:e})=>{l({category:"Muscles",page:e})}})}})}function Z(e){return e.map(t=>{const{filter:s,name:a,imgURL:i}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${i}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const x=document.querySelector(".filtered-exercises-categories-list"),p=document.querySelector(".exercises-list-container"),h=document.querySelector(".filtered-exercises-list-container");let $={};m.addEventListener("click",async e=>{T({id:"exercises"}),await y({page:1,event:e}),g({id:"categories",onChange:({page:t})=>{y({event:e,page:t})}})});async function y({page:e,event:t}){let s;if(t?s=t.target.closest(".exercises-categories-item"):s=m.querySelector(".exercises-categories-item"),h.classList.remove("hidden"),s){let o="";switch(s.getAttribute("data-category-filter")){case"Muscles":o="muscles";break;case"Body parts":o="bodypart";break;case"Equipment":o="equipment";break}const u=s.getAttribute("data-body-part"),f=j();$={[o]:u,page:e,limit:10,keyword:f},p.classList.add("hidden")}document.querySelector(".loader").classList.toggle("is-active",!0);const a=await R({...$}),{results:i,page:c,perPage:r,totalPages:n}=a;document.querySelector(".loader").classList.toggle("is-active",!1),W(),O(i),C({page:c,limit:r,pagesCount:n}),i.length>0?x.innerHTML=ee():x.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, no items found</strong>'}const ee=()=>_().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:i,target:c})=>`<li>
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
                  <p><span>Target:</span>${c}</p></div></div>
                </div>
              </li>`).join(""),B=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;te(s)}})});async function te(e){const{_id:t,...s}=await z(e);B.innerHTML=ne({id:e,...s});const a=document.querySelector(".modal-backdrop"),i=document.querySelector(".modal-close"),c=document.querySelector(".modal-favorite"),r=re({modal:a,modalCloseButton:i}),{result:n}=G(e);k({result:n,modalFavorite:c}),i.addEventListener("click",r),c.addEventListener("click",()=>{const o=N(e);k({result:o,modalFavorite:c})}),a.classList.add("is-open"),i.style.display="block",document.addEventListener("keydown",F({closeFn:r})),a.addEventListener("click",P({modal:a,closeFn:r}))}const se={[M.ADDED]:ae,[M.REMOVED]:ie};function k({result:e,modalFavorite:t}){const s=se[e];s({modalFavorite:t})}function ae({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function ie({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function F({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function P({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function re({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",F),e.removeEventListener("click",P),B.innerHTML=""}}function ne({id:e,gifUrl:t,name:s,rating:a,target:i,bodyPart:c,equipment:r,popularity:n,burnedCalories:o,time:u,description:f}){const D=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
      <div class="modal">
        <button class="modal-close" aria-label="Close modal">
          <svg class="modal-close-icon" width="32" height="32">
            <use href="./img/sprite.svg#cross"></use>
          </svg>
        </button>
        <div class="modal-inner">
          <div class="modal-image">
            <img src="${t}" alt="Exercise illustration" />
          </div>

          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">${s}</h2>
              <div class="modal-rating" id="rating" data-rate="${D}">
                <span>${a}</span>
                <div class="stars">
                  <svg class="rate-icon" width="18" height="18">
                    <use href="./img/sprite.svg#stars"></use>
                  </svg>
                  <svg class="rate-icon" width="18" height="18">
                    <use href="./img/sprite.svg#stars"></use>
                  </svg>
                  <svg class="rate-icon" width="18" height="18">
                    <use href="./img/sprite.svg#stars"></use>
                  </svg>
                  <svg class="rate-icon" width="18" height="18">
                    <use href="./img/sprite.svg#stars"></use>
                  </svg>
                  <svg class="rate-icon" width="18" height="18">
                    <use href="./img/sprite.svg#stars"></use>
                  </svg>
                </div>
              </div>
            </div>

            <div class="modal-details">
              <p><strong>Target:</strong> ${i}</p>
              <p><strong>Body Part:</strong> ${c}</p>
              <p><strong>Equipment:</strong> ${r}</p>
              <p><strong>Popular:</strong> ${n}</p>
              <p><strong>Burned Calories:</strong> ${o}/${u} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${f}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}document.addEventListener("DOMContentLoaded",()=>{V(),Y()});new U({elements_selector:".lazy"});
//# sourceMappingURL=index.js.map
