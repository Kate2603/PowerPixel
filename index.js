import{s as J,a as K,f as V,b as W,c as Q,g as X,d as Y,e as Z,h as _,i as ee}from"./assets/scroll-up-abb2d4e8.js";import{T as A}from"./assets/vendor-cc1203f3.js";const te=document.querySelector(".pagination-container"),u=document.querySelector(".pagination-pages"),L=document.querySelectorAll(".pagination-arrows"),S=L[0].children[0].children[0],$=L[0].children[1].children[0],q=L[1].children[0].children[0],x=L[1].children[1].children[0];let i;function se(e="Muscles",t=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=10`).then(s=>s.json()).then(s=>{const a=s.totalPages;if(a>=2){te.removeAttribute("hidden");let c=[];for(let n=0;n<a;n++)c.push(`<li><button class="pagination-page" data-page="${n+1}">${n+1}</button></li>`);u.innerHTML=c.join("")}return i=u.children[t-1].children[0],i.classList.toggle("active",!0),a}).then(s=>{u.addEventListener("click",r=>{if(r.currentTarget!==r.target&&r.target.dataset.page!=i.innerText){const d=r.target;r.target.dataset.page,i.classList.toggle("active",!1),d.classList.toggle("active",!0),i=d,i.dataset.page>1?a():i.dataset.page==1&&c(),i.dataset.page==s?n():l()}});function a(){S.removeAttribute("disabled",""),$.removeAttribute("disabled","")}function c(){S.setAttribute("disabled",""),$.setAttribute("disabled","")}function n(){q.setAttribute("disabled",""),x.setAttribute("disabled","")}function l(){q.removeAttribute("disabled",""),x.removeAttribute("disabled","")}S.addEventListener("click",r=>{i.classList.toggle("active",!1),i=u.children[0].children[0],i.classList.toggle("active",!0),c(),l()}),$.addEventListener("click",r=>{const d=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=u.children[d-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&c(),l()}),q.addEventListener("click",r=>{const d=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=u.children[d-1].children[0],i.classList.toggle("active",!0),i.dataset.page==s&&n(),a()}),x.addEventListener("click",r=>{i.classList.toggle("active",!1),i=u.children[s-1].children[0],i.classList.toggle("active",!0),n(),a()})}).catch(s=>{console.log(s)})}se();const ae=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var c,n,l;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const r=await J(a);if(r){const d=((c=r.data)==null?void 0:c.message)||r.message||"Subscription successful!";A({text:d,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(r){const d=((l=(n=r.response)==null?void 0:n.data)==null?void 0:l.message)||r.message||"An error occurred. Please try again later.";A({text:d,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},p=document.querySelector(".js-search-form"),ie=document.querySelector(".js-search-input");ie.addEventListener("input",function(e){e.preventDefault();const t=e.target.value;K(t),D()});function T(){p.classList.contains("hidden-search")||p.classList.add("hidden-search")}function ne(){p.classList.contains("hidden-search")&&p.classList.remove("hidden-search")}const v=document.querySelector('button[data-name="Muscles"]'),f=document.querySelector('button[data-name="Body parts"]'),b=document.querySelector('button[data-name="Equipment"]'),M=document.querySelector(".exercises-categories-list");let o=1,w,g=1,C="";document.querySelector(".pagination-container");const F=document.querySelector('[data-element="to-previous"]'),N=document.querySelector('[data-element="to-next"]'),H=document.querySelector('[data-element="to-begin"]'),I=document.querySelector('[data-element="to-end"]'),B=document.querySelector('[data-element="pages-list"]');function j(){F.disabled=o===1,H.disabled=o===1,N.disabled=o===g,I.disabled=o===g,B.innerHTML="";for(let e=1;e<=g;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===o?"active":""}">${e}</button>`,B.appendChild(t),e===o&&t.classList.add("active")}}F.addEventListener("click",()=>m(o-1));N.addEventListener("click",()=>m(o+1));H.addEventListener("click",()=>m(1));I.addEventListener("click",()=>m(g));B.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);console.log(o),m(t)}});function m(e){e<1||e>g||e===o||(o=e,h(C),j())}v.addEventListener("click",async e=>{v.classList.add("active"),b.classList.remove("active"),f.classList.remove("active"),y.classList.remove("hidden"),E.classList.add("hidden"),T(),o=1,h("Muscles")});f.addEventListener("click",async()=>{v.classList.remove("active"),b.classList.remove("active"),f.classList.add("active"),y.classList.remove("hidden"),E.classList.add("hidden"),T(),o=1,h("Body parts")});b.addEventListener("click",async()=>{v.classList.remove("active"),b.classList.add("active"),f.classList.remove("active"),y.classList.remove("hidden"),E.classList.add("hidden"),T(),o=1,h("Equipment")});async function h(e){try{C=e,w=await V(e,o),g=w.totalPages,M.innerHTML="",M.insertAdjacentHTML("beforeend",ce(w.results)),j()}catch(t){console.log("Error fetching categories:",t)}}async function re(){v.classList.add("active"),h("Muscles")}function ce(e){return e.map(t=>{const{filter:s,name:a,imgURL:c}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${c}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const oe=document.querySelector(".filtered-exercises-categories-list"),y=document.querySelector(".exercises-list-container"),E=document.querySelector(".filtered-exercises-list-container");let P={};M.addEventListener("click",D);async function D(){const e=document.querySelector(".exercises-categories-item");if(E.classList.remove("hidden"),e){let l="";switch(e.getAttribute("data-category-filter")){case"Muscles":l="muscles";break;case"Body parts":l="bodypart";break;case"Equipment":l="equipment";break}const r=e.getAttribute("data-body-part"),d=Z();P={[l]:r,page:1,limit:10,keyword:d},y.classList.add("hidden")}console.log(P);const t=await W({...P}),{results:s,page:a,perPage:c,totalPages:n}=t;console.log("Fetched Exercises",t),ne(),Q(s),Y({page:a,limit:c,pagesCount:n}),oe.innerHTML=de()}const de=()=>X().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:c,target:n})=>`<li>
                <div class="filtered-exercises-categories-list-item">
                <p class="workout"> Workout
                  </p>
                <div class="filtered-exercises-categories-raiting">
                ${t}
                <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg></div>
                <button class="start-button" data-id="${e}">Start
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
                  <p><span>Calories:</span> ${a} / 3 min</p>
                  <p><span>Body Part:</span> ${c}</p>
                  <p><span>Target:</span>${n}</p></div></div>
                </div>
              </li>`).join(""),O=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;le(s)}})});function le(e){const t=_(e);O.innerHTML=ge(t);const s=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),c=document.querySelector(".modal-favorite"),n=ue({modal:s,modalCloseButton:a});a.addEventListener("click",n),c.addEventListener("click",()=>{ee(e)}),s.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",R({closeFn:n})),s.addEventListener("click",G({modal:s,closeFn:n}))}function R({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function G({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function ue({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",R),e.removeEventListener("click",G),O.innerHTML=""}}function ge({id:e,gifUrl:t,name:s,rating:a,target:c,bodyPart:n,equipment:l,popularity:r,burnedCalories:d,time:k,description:z}){const U=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${U}">
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
              <p><strong>Target:</strong> ${c}</p>
              <p><strong>Body Part:</strong> ${n}</p>
              <p><strong>Equipment:</strong> ${l}</p>
              <p><strong>Popular:</strong> ${r}</p>
              <p><strong>Burned Calories:</strong> ${d}/${k} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${z}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
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
    </div>`}document.addEventListener("DOMContentLoaded",()=>{ae(),re()});localStorage.setItem("favorites",JSON.stringify([]));
//# sourceMappingURL=index.js.map
