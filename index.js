import{s as z,a as x,f as O,b as G,c as R,g as U,d as K,e as V,h as W,i as J}from"./assets/scroll-up-6f79f1d8.js";import{T as $}from"./assets/vendor-cc1203f3.js";const Q=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var o,n,d;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const r=await z(a);if(r){const c=((o=r.data)==null?void 0:o.message)||r.message||"Subscription successful!";$({text:c,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(r){const c=((d=(n=r.response)==null?void 0:n.data)==null?void 0:d.message)||r.message||"An error occurred. Please try again later.";$({text:c,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form");u.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;x(t),I(),x(""),u.reset()});function k(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function X(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const Y=document.querySelector('button[data-name="Muscles"]'),Z=document.querySelector('button[data-name="Body parts"]'),_=document.querySelector('button[data-name="Equipment"]'),b=document.querySelector(".exercises-categories-list"),v=document.querySelector('[data-name="Muscles-item"]'),q=document.querySelector('[data-name="Body-parts-item"]'),S=document.querySelector('[data-name="Equipment-item"]');let i=1,y,l=1,w="";const B=document.querySelector('[data-element="to-previous"]'),C=document.querySelector('[data-element="to-next"]'),T=document.querySelector('[data-element="to-begin"]'),F=document.querySelector('[data-element="to-end"]'),E=document.querySelector('[data-element="pages-list"]');function P(){B.disabled=i===1,T.disabled=i===1,C.disabled=i===l,F.disabled=i===l,E.innerHTML="";for(let e=1;e<=l;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===i?"active":""}">${e}</button>`,E.appendChild(t),e===i&&t.classList.add("active")}}B.addEventListener("click",()=>g(i-1));C.addEventListener("click",()=>g(i+1));T.addEventListener("click",()=>g(1));F.addEventListener("click",()=>g(l));E.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);g(t)}});function g(e){e<1||e>l||e===i||(i=e,m(w),P())}Y.addEventListener("click",async()=>{v.classList.add("active"),S.classList.remove("active"),q.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),k(),i=1,m("Muscles")});Z.addEventListener("click",async()=>{v.classList.remove("active"),S.classList.remove("active"),q.classList.add("active"),p.classList.remove("hidden"),h.classList.add("hidden"),k(),i=1,m("Body parts")});_.addEventListener("click",async()=>{v.classList.remove("active"),S.classList.add("active"),q.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),k(),i=1,m("Equipment")});async function m(e){try{w=e,document.querySelector(".loader").classList.toggle("is-active",!0),y=await O(e,i),l=y.totalPages,b.innerHTML="",b.insertAdjacentHTML("beforeend",te(y.results)),P()}catch(t){console.log("Error fetching categories:",t)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function ee(){v.classList.add("active"),m("Muscles")}function te(e){return e.map(t=>{const{filter:s,name:a,imgURL:o}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${o}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const M=document.querySelector(".filtered-exercises-categories-list"),p=document.querySelector(".exercises-list-container"),h=document.querySelector(".filtered-exercises-list-container");let L={};b.addEventListener("click",I);async function I(e){const t=e.target.closest(".exercises-categories-item");if(h.classList.remove("hidden"),t){let r="";switch(t.getAttribute("data-category-filter")){case"Muscles":r="muscles";break;case"Body parts":r="bodypart";break;case"Equipment":r="equipment";break}const c=t.getAttribute("data-body-part"),f=V();L={[r]:c,page:1,limit:10,keyword:f},p.classList.add("hidden")}console.log(L),document.querySelector(".loader").classList.toggle("is-active",!0);const s=await G({...L}),{results:a,page:o,perPage:n,totalPages:d}=s;document.querySelector(".loader").classList.toggle("is-active",!1),console.log("Fetched Exercises",s),X(),R(a),K({page:o,limit:n,pagesCount:d}),a.length>0?M.innerHTML=se():M.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, No items found</strong>'}const se=()=>U().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:o,target:n})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
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
                  <h3>${s}</h3>
                  </div>
                  <div class="filtered-categories-content-info">
                  <p><span>Calories:</span> ${a} / 3 min</p>
                  <p><span>Body Part:</span> ${o}</p>
                  <p><span>Target:</span>${n}</p></div></div>
                </div>
              </li>`).join(""),H=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;ae(s)}})});function ae(e){const t=W(e);H.innerHTML=re(t);const s=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),o=document.querySelector(".modal-favorite"),n=ie({modal:s,modalCloseButton:a});a.addEventListener("click",n),o.addEventListener("click",()=>{J(e)}),s.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",A({closeFn:n})),s.addEventListener("click",D({modal:s,closeFn:n}))}function A({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function D({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function ie({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",A),e.removeEventListener("click",D),H.innerHTML=""}}function re({id:e,gifUrl:t,name:s,rating:a,target:o,bodyPart:n,equipment:d,popularity:r,burnedCalories:c,time:f,description:N}){const j=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${j}">
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
              <p><strong>Target:</strong> ${o}</p>
              <p><strong>Body Part:</strong> ${n}</p>
              <p><strong>Equipment:</strong> ${d}</p>
              <p><strong>Popular:</strong> ${r}</p>
              <p><strong>Burned Calories:</strong> ${c}/${f} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${N}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                Add to favorites
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}document.addEventListener("DOMContentLoaded",()=>{Q(),ee()});
//# sourceMappingURL=index.js.map
