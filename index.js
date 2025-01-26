import{s as z,a as S,f as O,b as G,c as R,g as U,d as K,e as V,h as W,i as J}from"./assets/scroll-up-714a40b6.js";import{T as x}from"./assets/vendor-cc1203f3.js";const Q=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var r,o,c;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const n=await z(a);if(n){const d=((r=n.data)==null?void 0:r.message)||n.message||"Subscription successful!";x({text:d,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(n){const d=((c=(o=n.response)==null?void 0:o.data)==null?void 0:c.message)||n.message||"An error occurred. Please try again later.";x({text:d,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},u=document.querySelector(".js-search-form");document.querySelector(".js-search-input");u.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;S(t),P(),S(""),u.reset()});function E(){u.classList.contains("hidden-search")||u.classList.add("hidden-search")}function X(){u.classList.contains("hidden-search")&&u.classList.remove("hidden-search")}const Y=document.querySelector('button[data-name="Muscles"]'),Z=document.querySelector('button[data-name="Body parts"]'),_=document.querySelector('button[data-name="Equipment"]'),L=document.querySelector(".exercises-categories-list"),v=document.querySelector('[data-name="Muscles-item"]'),k=document.querySelector('[data-name="Body-parts-item"]'),q=document.querySelector('[data-name="Equipment-item"]');let i=1,f,l=1,M="";const w=document.querySelector('[data-element="to-previous"]'),B=document.querySelector('[data-element="to-next"]'),C=document.querySelector('[data-element="to-begin"]'),T=document.querySelector('[data-element="to-end"]'),b=document.querySelector('[data-element="pages-list"]');function F(){w.disabled=i===1,C.disabled=i===1,B.disabled=i===l,T.disabled=i===l,b.innerHTML="";for(let e=1;e<=l;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===i?"active":""}">${e}</button>`,b.appendChild(t),e===i&&t.classList.add("active")}}w.addEventListener("click",()=>g(i-1));B.addEventListener("click",()=>g(i+1));C.addEventListener("click",()=>g(1));T.addEventListener("click",()=>g(l));b.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);console.log(i),g(t)}});function g(e){e<1||e>l||e===i||(i=e,m(M),F())}Y.addEventListener("click",async()=>{v.classList.add("active"),q.classList.remove("active"),k.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),E(),i=1,m("Muscles")});Z.addEventListener("click",async()=>{v.classList.remove("active"),q.classList.remove("active"),k.classList.add("active"),p.classList.remove("hidden"),h.classList.add("hidden"),E(),i=1,m("Body parts")});_.addEventListener("click",async()=>{v.classList.remove("active"),q.classList.add("active"),k.classList.remove("active"),p.classList.remove("hidden"),h.classList.add("hidden"),E(),i=1,m("Equipment")});async function m(e){try{M=e,document.querySelector(".loader").classList.toggle("is-active",!0),f=await O(e,i),l=f.totalPages,L.innerHTML="",L.insertAdjacentHTML("beforeend",te(f.results)),F()}catch(t){console.log("Error fetching categories:",t)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function ee(){v.classList.add("active"),m("Muscles")}function te(e){return e.map(t=>{const{filter:s,name:a,imgURL:r}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${r}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const $=document.querySelector(".filtered-exercises-categories-list"),p=document.querySelector(".exercises-list-container"),h=document.querySelector(".filtered-exercises-list-container");let y={};L.addEventListener("click",P);async function P(){const e=document.querySelector(".exercises-categories-item");if(h.classList.remove("hidden"),e){let c="";switch(e.getAttribute("data-category-filter")){case"Muscles":c="muscles";break;case"Body parts":c="bodypart";break;case"Equipment":c="equipment";break}const n=e.getAttribute("data-body-part"),d=V();y={[c]:n,page:1,limit:10,keyword:d},p.classList.add("hidden")}console.log(y),document.querySelector(".loader").classList.toggle("is-active",!0);const t=await G({...y}),{results:s,page:a,perPage:r,totalPages:o}=t;document.querySelector(".loader").classList.toggle("is-active",!1),console.log("Fetched Exercises",t),X(),R(s),K({page:a,limit:r,pagesCount:o}),s.length>0?$.innerHTML=se():$.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, No items found</strong>'}const se=()=>U().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:r,target:o})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button" data-id="${e}">Start
                  <svg class="icon-arrow" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#icon-arrow"></use>
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
                  <p><span>Body Part:</span> ${r}</p>
                  <p><span>Target:</span>${o}</p></div></div>
                </div>
              </li>`).join(""),I=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;ae(s)}})});function ae(e){const t=W(e);I.innerHTML=re(t);const s=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),r=document.querySelector(".modal-favorite"),o=ie({modal:s,modalCloseButton:a});a.addEventListener("click",o),r.addEventListener("click",()=>{J(e)}),s.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",H({closeFn:o})),s.addEventListener("click",A({modal:s,closeFn:o}))}function H({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function A({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function ie({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",H),e.removeEventListener("click",A),I.innerHTML=""}}function re({id:e,gifUrl:t,name:s,rating:a,target:r,bodyPart:o,equipment:c,popularity:n,burnedCalories:d,time:D,description:j}){const N=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${N}">
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
              <p><strong>Target:</strong> ${r}</p>
              <p><strong>Body Part:</strong> ${o}</p>
              <p><strong>Equipment:</strong> ${c}</p>
              <p><strong>Popular:</strong> ${n}</p>
              <p><strong>Burned Calories:</strong> ${d}/${D} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${j}</p>
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
