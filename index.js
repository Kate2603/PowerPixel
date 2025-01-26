import{s as G,a as x,f as _,b as z,c as U,g as V,d as K,e as W,h as J,i as Q,t as X,T as w}from"./assets/scroll-up-015bab20.js";import{T as M}from"./assets/vendor-cc1203f3.js";const Y=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var r,o,c;t.preventDefault();const a=t.target.elements.email,s=a.value;try{const i=await G(s);if(i){const d=((r=i.data)==null?void 0:r.message)||i.message||"Subscription successful!";M({text:d,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),a.value=""}}catch(i){const d=((c=(o=i.response)==null?void 0:o.data)==null?void 0:c.message)||i.message||"An error occurred. Please try again later.";M({text:d,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form");u.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;x(t),D(),x(""),u.reset()});function S(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function Z(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const ee=document.querySelector('button[data-name="Muscles"]'),te=document.querySelector('button[data-name="Body parts"]'),se=document.querySelector('button[data-name="Equipment"]'),v=document.querySelector(".exercises-categories-list"),p=document.querySelector('[data-name="Muscles-item"]'),k=document.querySelector('[data-name="Body-parts-item"]'),q=document.querySelector('[data-name="Equipment-item"]');let n=1,L,l=1,T="";const C=document.querySelector('[data-element="to-previous"]'),F=document.querySelector('[data-element="to-next"]'),P=document.querySelector('[data-element="to-begin"]'),H=document.querySelector('[data-element="to-end"]'),E=document.querySelector('[data-element="pages-list"]');function I(){C.disabled=n===1,P.disabled=n===1,F.disabled=n===l,H.disabled=n===l,E.innerHTML="";for(let e=1;e<=l;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===n?"active":""}">${e}</button>`,E.appendChild(t),e===n&&t.classList.add("active")}}C.addEventListener("click",()=>g(n-1));F.addEventListener("click",()=>g(n+1));P.addEventListener("click",()=>g(1));H.addEventListener("click",()=>g(l));E.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);g(t)}});function g(e){e<1||e>l||e===n||(n=e,m(T),I())}ee.addEventListener("click",async()=>{p.classList.add("active"),q.classList.remove("active"),k.classList.remove("active"),h.classList.remove("hidden"),f.classList.add("hidden"),S(),n=1,m("Muscles")});te.addEventListener("click",async()=>{p.classList.remove("active"),q.classList.remove("active"),k.classList.add("active"),h.classList.remove("hidden"),f.classList.add("hidden"),S(),n=1,m("Body parts")});se.addEventListener("click",async()=>{p.classList.remove("active"),q.classList.add("active"),k.classList.remove("active"),h.classList.remove("hidden"),f.classList.add("hidden"),S(),n=1,m("Equipment")});async function m(e){try{T=e,document.querySelector(".loader").classList.toggle("is-active",!0),L=await _(e,n),l=L.totalPages,v.innerHTML="",v.insertAdjacentHTML("beforeend",ie(L.results)),I()}catch(t){console.log("Error fetching categories:",t)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function ae(){p.classList.add("active"),m("Muscles")}function ie(e){return e.map(t=>{const{filter:a,name:s,imgURL:r}=t;return` <li class="exercises-categories-item" data-body-part='${s}' data-category-filter='${a}'>
			<button type="button" class="exercises-categories-btn"  alt="${s}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${r}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${s}</h3>
					<p class="exercises-category-descr">${a}</p>
				</div>
			</button>
		</li> `}).join("")}const $=document.querySelector(".filtered-exercises-categories-list"),h=document.querySelector(".exercises-list-container"),f=document.querySelector(".filtered-exercises-list-container");let b={};v.addEventListener("click",D);async function D(e=null){let t;if(e?t=e.target.closest(".exercises-categories-item"):t=v.querySelector(".exercises-categories-item"),f.classList.remove("hidden"),t){let i="";switch(t.getAttribute("data-category-filter")){case"Muscles":i="muscles";break;case"Body parts":i="bodypart";break;case"Equipment":i="equipment";break}const d=t.getAttribute("data-body-part"),y=W();b={[i]:d,page:1,limit:10,keyword:y},h.classList.add("hidden")}console.log(b),document.querySelector(".loader").classList.toggle("is-active",!0);const a=await z({...b}),{results:s,page:r,perPage:o,totalPages:c}=a;document.querySelector(".loader").classList.toggle("is-active",!1),console.log("Fetched Exercises",a),Z(),U(s),K({page:r,limit:o,pagesCount:c}),s.length>0?$.innerHTML=re():$.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, No items found</strong>'}const re=()=>V().map(({id:e,rating:t,name:a,burnedCalories:s,bodyPart:r,target:o})=>`<li>
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
                  <div class="filtered-categories-content-title">
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <h3>${a}</h3>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${s} / 3 min</p>
                  <p><span>Body Part:</span> ${r}</p>
                  <p><span>Target:</span>${o}</p></div></div>
                </div>
              </li>`).join(""),A=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const a=t.attributes["data-id"].value;ne(a)}})});async function ne(e){const{_id:t,...a}=await J(e);A.innerHTML=ue({id:e,...a});const s=document.querySelector(".modal-backdrop"),r=document.querySelector(".modal-close"),o=document.querySelector(".modal-favorite"),c=le({modal:s,modalCloseButton:r}),{result:i}=Q(e);B({result:i,modalFavorite:o}),r.addEventListener("click",c),o.addEventListener("click",()=>{const d=X(e);B({result:d,modalFavorite:o})}),s.classList.add("is-open"),r.style.display="block",document.addEventListener("keydown",R({closeFn:c})),s.addEventListener("click",O({modal:s,closeFn:c}))}const oe={[w.ADDED]:ce,[w.REMOVED]:de};function B({result:e,modalFavorite:t}){const a=oe[e];a({modalFavorite:t})}function ce({modalFavorite:e}){e.innerHTML=`<span>Remove</span>
    <svg class="heart-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function de({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function R({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function O({modal:e,closeFn:t}){return function(a){a.target===e&&t()}}function le({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",R),e.removeEventListener("click",O),A.innerHTML=""}}function ue({id:e,gifUrl:t,name:a,rating:s,target:r,bodyPart:o,equipment:c,popularity:i,burnedCalories:d,time:y,description:N}){const j=s-parseInt(s)>.5?Math.round(s):Math.floor(s);return`<div class="modal-backdrop">
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
              <h2 class="modal-title">${a}</h2>
              <div class="modal-rating" id="rating" data-rate="${j}">
                <span>${s}</span>
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
              <p><strong>Target:</strong> ${r}</p>
              <p><strong>Body Part:</strong> ${o}</p>
              <p><strong>Equipment:</strong> ${c}</p>
              <p><strong>Popular:</strong> ${i}</p>
              <p><strong>Burned Calories:</strong> ${d}/${y} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${N}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}document.addEventListener("DOMContentLoaded",()=>{Y(),ae()});
//# sourceMappingURL=index.js.map
