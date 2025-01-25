import{s as F,f as H,a as N}from"./assets/scroll-up-47d5ac5e.js";import{T as q}from"./assets/vendor-cc1203f3.js";const j=document.querySelector(".pagination-container"),l=document.querySelector(".pagination-pages"),h=document.querySelectorAll(".pagination-arrows"),E=h[0].children[0].children[0],k=h[0].children[1].children[0],x=h[1].children[0].children[0],w=h[1].children[1].children[0];let i;function D(t="Muscles",s=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${t}&page=${s}&limit=10`).then(e=>e.json()).then(e=>{const a=e.totalPages;if(a>=2){j.removeAttribute("hidden");let c=[];for(let n=0;n<a;n++)c.push(`<li><button class="pagination-page" data-page="${n+1}">${n+1}</button></li>`);l.innerHTML=c.join("")}return i=l.children[s-1].children[0],i.classList.toggle("active",!0),a}).then(e=>{l.addEventListener("click",r=>{if(r.currentTarget!==r.target&&r.target.dataset.page!=i.innerText){const o=r.target;r.target.dataset.page,i.classList.toggle("active",!1),o.classList.toggle("active",!0),i=o,i.dataset.page>1?a():i.dataset.page==1&&c(),i.dataset.page==e?n():d()}});function a(){E.removeAttribute("disabled",""),k.removeAttribute("disabled","")}function c(){E.setAttribute("disabled",""),k.setAttribute("disabled","")}function n(){x.setAttribute("disabled",""),w.setAttribute("disabled","")}function d(){x.removeAttribute("disabled",""),w.removeAttribute("disabled","")}E.addEventListener("click",r=>{i.classList.toggle("active",!1),i=l.children[0].children[0],i.classList.toggle("active",!0),c(),d()}),k.addEventListener("click",r=>{const o=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&c(),d()}),x.addEventListener("click",r=>{const o=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==e&&n(),a()}),w.addEventListener("click",r=>{i.classList.toggle("active",!1),i=l.children[e-1].children[0],i.classList.toggle("active",!0),n(),a()})}).catch(e=>{console.log(e)})}D();const I=()=>{document.getElementById("subscription-form").addEventListener("submit",async s=>{var c,n,d;s.preventDefault();const e=s.target.elements.email,a=e.value;try{const r=await F(a);if(r){const o=((c=r.data)==null?void 0:c.message)||r.message||"Subscription successful!";q({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),e.value=""}}catch(r){const o=((d=(n=r.response)==null?void 0:n.data)==null?void 0:d.message)||r.message||"An error occurred. Please try again later.";q({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form");document.querySelector(".js-search-input");function P(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function R(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const p={exercises:[],pagination:{page:1,limit:10,pagesCount:1}};function G(t){p.exercises=t}function z(){return p.exercises}function O(t){return p.exercises[t]}function K({page:t,limit:s,pagesCount:e}){p.pagination={page:t,limit:s,pagesCount:e}}const g=document.querySelector('button[data-name="Muscles"]'),v=document.querySelector('button[data-name="Body parts"]'),m=document.querySelector('button[data-name="Equipment"]'),M=document.querySelector(".exercises-categories-list");let U=1,A;g.addEventListener("click",async t=>{g.classList.add("active"),m.classList.remove("active"),v.classList.remove("active"),b.classList.remove("hidden"),L.classList.add("hidden"),P(),f("Muscles")});v.addEventListener("click",async t=>{g.classList.remove("active"),m.classList.remove("active"),v.classList.add("active"),b.classList.remove("hidden"),L.classList.add("hidden"),P(),f("Body parts")});m.addEventListener("click",async t=>{g.classList.remove("active"),m.classList.add("active"),v.classList.remove("active"),b.classList.remove("hidden"),L.classList.add("hidden"),P(),f("Equipment")});async function f(t){try{A=await H(t,U),M.innerHTML="",M.insertAdjacentHTML("beforeend",J(A.results))}catch(s){console.log("Error fetching categories:",s)}}async function W(){g.classList.add("active"),f("Muscles")}function J(t){return t.map(s=>{const{filter:e,name:a,imgURL:c}=s;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${e}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${c}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${e}</p>
				</div>
			</button>
		</li> `}).join("")}const Q=document.querySelector(".filtered-exercises-categories-list"),b=document.querySelector(".exercises-list-container"),L=document.querySelector(".filtered-exercises-list-container");let $={};M.addEventListener("click",async t=>{const s=t.target.closest(".exercises-categories-item");if(L.classList.remove("hidden"),s){let r="";switch(s.getAttribute("data-category-filter")){case"Muscles":r="muscles";break;case"Body parts":r="bodypart";break;case"Equipment":r="equipment";break}const o=s.getAttribute("data-body-part");$={[r]:o,keyword:"",page:1,limit:10},b.classList.add("hidden")}console.log($);const e=await N({...$}),{results:a,page:c,perPage:n,totalPages:d}=e;console.log("Fetched Exercises",e),R(),G(a),K({page:c,limit:n,pagesCount:d}),Q.innerHTML=V()});const V=()=>z().map(({rating:t,name:s,burnedCalories:e,bodyPart:a,target:c},n)=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button" data-id="${n}">Start
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#icon-arrow-single-right"></use>
                  </svg>
                </button>
                <div class="filtered-categories-content">
                  <div class="filtered-categories-content-title">
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <h3>${s}</h3>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${e} / 3 min</p>
                  <p><span>Body Part:</span> ${a}</p>
                  <p><span>Target:</span>${c}</p></div></div>
                </div>
              </li>`).join(""),S=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",t=>{const s=t.target.closest(".start-button");if(s){const e=s.attributes["data-id"].value;X(e)}})});function X(t){const s=O(t);S.innerHTML=Z(s);const e=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),c=Y({modal:e,modalCloseButton:a});a.addEventListener("click",c),e.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",C({closeFn:c})),e.addEventListener("click",T({closeFn:c}))}function C({closeFn:t}){return function(s){s.key==="Escape"&&t()}}function T({closeFn:t}){return function(s){s.target===modal&&t()}}function Y({modal:t,modalCloseButton:s}){return function(){t.classList.remove("is-open"),s.style.display="none",document.removeEventListener("keydown",C),t.removeEventListener("click",T),S.innerHTML=""}}function Z({gifUrl:t,name:s,rating:e,target:a,bodyPart:c,equipment:n,popularity:d,burnedCalories:r,time:o,description:y}){const B=e-parseInt(e)>.5?Math.round(e):Math.floor(e);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${B}">
                <span>${e}</span>
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
              <p><strong>Target:</strong> ${a}</p>
              <p><strong>Body Part:</strong> ${c}</p>
              <p><strong>Equipment:</strong> ${n}</p>
              <p><strong>Popular:</strong> ${d}</p>
              <p><strong>Burned Calories:</strong> ${r}/${o} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${y}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false">
                Add to favorites
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>
              </button>
              <button class="modal-rating-button">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>`}document.addEventListener("DOMContentLoaded",()=>{I(),W()});
//# sourceMappingURL=index.js.map
