import{s as I,a as N,f as H,b as j,c as D,g as R,d as G,e as O,h as z,i as J}from"./assets/scroll-up-e98507b9.js";import{T as q}from"./assets/vendor-cc1203f3.js";const K=document.querySelector(".pagination-container"),l=document.querySelector(".pagination-pages"),h=document.querySelectorAll(".pagination-arrows"),y=h[0].children[0].children[0],E=h[0].children[1].children[0],k=h[1].children[0].children[0],w=h[1].children[1].children[0];let i;function U(t="Muscles",s=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${t}&page=${s}&limit=10`).then(e=>e.json()).then(e=>{const a=e.totalPages;if(a>=2){K.removeAttribute("hidden");let n=[];for(let r=0;r<a;r++)n.push(`<li><button class="pagination-page" data-page="${r+1}">${r+1}</button></li>`);l.innerHTML=n.join("")}return i=l.children[s-1].children[0],i.classList.toggle("active",!0),a}).then(e=>{l.addEventListener("click",c=>{if(c.currentTarget!==c.target&&c.target.dataset.page!=i.innerText){const o=c.target;c.target.dataset.page,i.classList.toggle("active",!1),o.classList.toggle("active",!0),i=o,i.dataset.page>1?a():i.dataset.page==1&&n(),i.dataset.page==e?r():d()}});function a(){y.removeAttribute("disabled",""),E.removeAttribute("disabled","")}function n(){y.setAttribute("disabled",""),E.setAttribute("disabled","")}function r(){k.setAttribute("disabled",""),w.setAttribute("disabled","")}function d(){k.removeAttribute("disabled",""),w.removeAttribute("disabled","")}y.addEventListener("click",c=>{i.classList.toggle("active",!1),i=l.children[0].children[0],i.classList.toggle("active",!0),n(),d()}),E.addEventListener("click",c=>{const o=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&n(),d()}),k.addEventListener("click",c=>{const o=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=l.children[o-1].children[0],i.classList.toggle("active",!0),i.dataset.page==e&&r(),a()}),w.addEventListener("click",c=>{i.classList.toggle("active",!1),i=l.children[e-1].children[0],i.classList.toggle("active",!0),r(),a()})}).catch(e=>{console.log(e)})}U();const V=()=>{document.getElementById("subscription-form").addEventListener("submit",async s=>{var n,r,d;s.preventDefault();const e=s.target.elements.email,a=e.value;try{const c=await I(a);if(c){const o=((n=c.data)==null?void 0:n.message)||c.message||"Subscription successful!";q({text:o,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),e.value=""}}catch(c){const o=((d=(r=c.response)==null?void 0:r.data)==null?void 0:d.message)||c.message||"An error occurred. Please try again later.";q({text:o,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},g=document.querySelector(".js-search-form"),W=document.querySelector(".js-search-input");W.addEventListener("input",function(t){t.preventDefault();const s=t.target.value;N(s),P()});function S(){g.classList.contains("hidden-search")||g.classList.add("hidden-search")}function Q(){g.classList.contains("hidden-search")&&g.classList.remove("hidden-search")}const u=document.querySelector('button[data-name="Muscles"]'),v=document.querySelector('button[data-name="Body parts"]'),m=document.querySelector('button[data-name="Equipment"]'),x=document.querySelector(".exercises-categories-list");let X=1,M;u.addEventListener("click",async()=>{u.classList.add("active"),m.classList.remove("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Muscles")});v.addEventListener("click",async()=>{u.classList.remove("active"),m.classList.remove("active"),v.classList.add("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Body parts")});m.addEventListener("click",async()=>{u.classList.remove("active"),m.classList.add("active"),v.classList.remove("active"),f.classList.remove("hidden"),b.classList.add("hidden"),S(),p("Equipment")});async function p(t){try{M=await H(t,X),x.innerHTML="",x.insertAdjacentHTML("beforeend",Z(M.results))}catch(s){console.log("Error fetching categories:",s)}}async function Y(){u.classList.add("active"),p("Muscles")}function Z(t){return t.map(s=>{const{filter:e,name:a,imgURL:n}=s;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${e}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${e}</p>
				</div>
			</button>
		</li> `}).join("")}const _=document.querySelector(".filtered-exercises-categories-list"),f=document.querySelector(".exercises-list-container"),b=document.querySelector(".filtered-exercises-list-container");let $={};x.addEventListener("click",P);async function P(){const t=document.querySelector(".exercises-categories-item");if(b.classList.remove("hidden"),t){let d="";switch(t.getAttribute("data-category-filter")){case"Muscles":d="muscles";break;case"Body parts":d="bodypart";break;case"Equipment":d="equipment";break}const c=t.getAttribute("data-body-part"),o=O();$={[d]:c,page:1,limit:10,keyword:o},f.classList.add("hidden")}console.log($);const s=await j({...$}),{results:e,page:a,perPage:n,totalPages:r}=s;console.log("Fetched Exercises",s),Q(),D(e),G({page:a,limit:n,pagesCount:r}),_.innerHTML=ee()}const ee=()=>R().map(({id:t,rating:s,name:e,burnedCalories:a,bodyPart:n,target:r})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${s}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button" data-id="${t}">Start
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
                  <p><span>Target:</span>${r}</p></div></div>
                </div>
              </li>`).join(""),A=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",t=>{const s=t.target.closest(".start-button");if(s){const e=s.attributes["data-id"].value;te(e)}})});function te(t){const s=z(t);A.innerHTML=ae(s);const e=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),n=document.querySelector(".modal-favorite"),r=se({modal:e,modalCloseButton:a});a.addEventListener("click",r),n.addEventListener("click",()=>{J(t)}),e.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",T({closeFn:r})),e.addEventListener("click",C({modal:e,closeFn:r}))}function T({closeFn:t}){return function(s){s.key==="Escape"&&t()}}function C({modal:t,closeFn:s}){return function(e){e.target===t&&s()}}function se({modal:t,modalCloseButton:s}){return function(){t.classList.remove("is-open"),s.style.display="none",document.removeEventListener("keydown",T),t.removeEventListener("click",C),A.innerHTML=""}}function ae({id:t,gifUrl:s,name:e,rating:a,target:n,bodyPart:r,equipment:d,popularity:c,burnedCalories:o,time:L,description:B}){const F=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
      <div class="modal">
        <button class="modal-close" aria-label="Close modal">
          <svg class="modal-close-icon" width="32" height="32">
            <use href="./img/sprite.svg#cross"></use>
          </svg>
        </button>
        <div class="modal-inner">
          <div class="modal-image">
            <img src="${s}" alt="Exercise illustration" />
          </div>

          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">${e}</h2>
              <div class="modal-rating" id="rating" data-rate="${F}">
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
              <p><strong>Body Part:</strong> ${r}</p>
              <p><strong>Equipment:</strong> ${d}</p>
              <p><strong>Popular:</strong> ${c}</p>
              <p><strong>Burned Calories:</strong> ${o}/${L} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${B}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${t}">
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
    </div>`}document.addEventListener("DOMContentLoaded",()=>{V(),Y()});localStorage.setItem("favorites",JSON.stringify([]));
//# sourceMappingURL=index.js.map
