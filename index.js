import{s as F,f as I,a as N,b as H,g as j,c as D,d as R,e as G}from"./assets/scroll-up-3f1137aa.js";import{T as M}from"./assets/vendor-cc1203f3.js";const O=document.querySelector(".pagination-container"),l=document.querySelector(".pagination-pages"),h=document.querySelectorAll(".pagination-arrows"),y=h[0].children[0].children[0],E=h[0].children[1].children[0],k=h[1].children[0].children[0],w=h[1].children[1].children[0];let i;function z(s="Muscles",t=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${s}&page=${t}&limit=10`).then(e=>e.json()).then(e=>{const a=e.totalPages;if(a>=2){O.removeAttribute("hidden");let n=[];for(let c=0;c<a;c++)n.push(`<li><button class="pagination-page" data-page="${c+1}">${c+1}</button></li>`);l.innerHTML=n.join("")}return i=l.children[t-1].children[0],i.classList.toggle("active",!0),a}).then(e=>{l.addEventListener("click",r=>{if(r.currentTarget!==r.target&&r.target.dataset.page!=i.innerText){const o=r.target;r.target.dataset.page,i.classList.toggle("active",!1),o.classList.toggle("active",!0),i=o,i.dataset.page>1?a():i.dataset.page==1&&n(),i.dataset.page==e?c():d()}});function a(){y.removeAttribute("disabled",""),E.removeAttribute("disabled","")}function n(){y.setAttribute("disabled",""),E.setAttribute("disabled","")}function c(){k.setAttribute("disabled",""),w.setAttribute("disabled","")}function d(){k.removeAttribute("disabled",""),w.removeAttribute("disabled","")}y.addEventListener("click",r=>{i.classList.toggle("active",!1),i=l.children[0].children[0],i.classList.toggle("active",!0),n(),d()}),E.addEventListener("click",r=>{const o=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&n(),d()}),k.addEventListener("click",r=>{const o=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==e&&c(),a()}),w.addEventListener("click",r=>{i.classList.toggle("active",!1),i=l.children[e-1].children[0],i.classList.toggle("active",!0),c(),a()})}).catch(e=>{console.log(e)})}z();const J=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var n,c,d;t.preventDefault();const e=t.target.elements.email,a=e.value;try{const r=await F(a);if(r){const o=((n=r.data)==null?void 0:n.message)||r.message||"Subscription successful!";M({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),e.value=""}}catch(r){const o=((d=(c=r.response)==null?void 0:c.data)==null?void 0:d.message)||r.message||"An error occurred. Please try again later.";M({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form");document.querySelector(".js-search-input");function S(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function K(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const g=document.querySelector('button[data-name="Muscles"]'),v=document.querySelector('button[data-name="Body parts"]'),m=document.querySelector('button[data-name="Equipment"]'),x=document.querySelector(".exercises-categories-list");let U=1,P;g.addEventListener("click",async s=>{g.classList.add("active"),m.classList.remove("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Muscles")});v.addEventListener("click",async s=>{g.classList.remove("active"),m.classList.remove("active"),v.classList.add("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Body parts")});m.addEventListener("click",async s=>{g.classList.remove("active"),m.classList.add("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Equipment")});async function p(s){try{P=await I(s,U),x.innerHTML="",x.insertAdjacentHTML("beforeend",Q(P.results))}catch(t){console.log("Error fetching categories:",t)}}async function W(){g.classList.add("active"),p("Muscles")}function Q(s){return s.map(t=>{const{filter:e,name:a,imgURL:n}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${e}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${e}</p>
				</div>
			</button>
		</li> `}).join("")}const V=document.querySelector(".filtered-exercises-categories-list"),f=document.querySelector(".exercises-list-container"),b=document.querySelector(".filtered-exercises-list-container");let $={};x.addEventListener("click",async s=>{const t=s.target.closest(".exercises-categories-item");if(b.classList.remove("hidden"),t){let r="";switch(t.getAttribute("data-category-filter")){case"Muscles":r="muscles";break;case"Body parts":r="bodypart";break;case"Equipment":r="equipment";break}const o=t.getAttribute("data-body-part");$={[r]:o,keyword:"",page:1,limit:10},f.classList.add("hidden")}console.log($);const e=await N({...$}),{results:a,page:n,perPage:c,totalPages:d}=e;console.log("Fetched Exercises",e),K(),H(a),D({page:n,limit:c,pagesCount:d}),V.innerHTML=X()});const X=()=>j().map(({id:s,rating:t,name:e,burnedCalories:a,bodyPart:n,target:c})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button" data-id="${s}">Start
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#icon-arrow-single-right"></use>
                  </svg>
                </button>
                <div class="filtered-categories-content">
                  <div class="filtered-categories-content-title">
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <h3>${e}</h3>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${a} / 3 min</p>
                  <p><span>Body Part:</span> ${n}</p>
                  <p><span>Target:</span>${c}</p></div></div>
                </div>
              </li>`).join(""),q=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",s=>{const t=s.target.closest(".start-button");if(t){const e=t.attributes["data-id"].value;Y(e)}})});function Y(s){const t=R(s);q.innerHTML=_(t);const e=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),n=document.querySelector(".modal-favorite"),c=Z({modal:e,modalCloseButton:a});a.addEventListener("click",c),n.addEventListener("click",()=>{G(s)}),e.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",A({closeFn:c})),e.addEventListener("click",T({modal:e,closeFn:c}))}function A({closeFn:s}){return function(t){t.key==="Escape"&&s()}}function T({modal:s,closeFn:t}){return function(e){e.target===s&&t()}}function Z({modal:s,modalCloseButton:t}){return function(){s.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",A),s.removeEventListener("click",T),q.innerHTML=""}}function _({id:s,gifUrl:t,name:e,rating:a,target:n,bodyPart:c,equipment:d,popularity:r,burnedCalories:o,time:L,description:C}){const B=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <h2 class="modal-title">${e}</h2>
              <div class="modal-rating" id="rating" data-rate="${B}">
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
              <p><strong>Target:</strong> ${n}</p>
              <p><strong>Body Part:</strong> ${c}</p>
              <p><strong>Equipment:</strong> ${d}</p>
              <p><strong>Popular:</strong> ${r}</p>
              <p><strong>Burned Calories:</strong> ${o}/${L} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${C}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${s}">
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
    </div>`}document.addEventListener("DOMContentLoaded",()=>{J(),W()});localStorage.setItem("favorites",JSON.stringify([]));
//# sourceMappingURL=index.js.map
