import{s as W,a as A,f as J,b as Q,c as X,g as Y,d as Z,e as _,h as ee,i as te}from"./assets/scroll-up-5e8c2f52.js";import{T as C}from"./assets/vendor-cc1203f3.js";const se=document.querySelector(".pagination-container"),u=document.querySelector(".pagination-pages"),L=document.querySelectorAll(".pagination-arrows"),$=L[0].children[0].children[0],S=L[0].children[1].children[0],x=L[1].children[0].children[0],q=L[1].children[1].children[0];let i;function ae(e="Muscles",t=1){fetch(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=10`).then(s=>s.json()).then(s=>{const a=s.totalPages;if(a>=2){se.removeAttribute("hidden");let c=[];for(let r=0;r<a;r++)c.push(`<li><button class="pagination-page" data-page="${r+1}">${r+1}</button></li>`);u.innerHTML=c.join("")}return i=u.children[t-1].children[0],i.classList.toggle("active",!0),a}).then(s=>{u.addEventListener("click",n=>{if(n.currentTarget!==n.target&&n.target.dataset.page!=i.innerText){const d=n.target;n.target.dataset.page,i.classList.toggle("active",!1),d.classList.toggle("active",!0),i=d,i.dataset.page>1?a():i.dataset.page==1&&c(),i.dataset.page==s?r():l()}});function a(){$.removeAttribute("disabled",""),S.removeAttribute("disabled","")}function c(){$.setAttribute("disabled",""),S.setAttribute("disabled","")}function r(){x.setAttribute("disabled",""),q.setAttribute("disabled","")}function l(){x.removeAttribute("disabled",""),q.removeAttribute("disabled","")}$.addEventListener("click",n=>{i.classList.toggle("active",!1),i=u.children[0].children[0],i.classList.toggle("active",!0),c(),l()}),S.addEventListener("click",n=>{const d=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=u.children[d-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&c(),l()}),x.addEventListener("click",n=>{const d=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=u.children[d-1].children[0],i.classList.toggle("active",!0),i.dataset.page==s&&r(),a()}),q.addEventListener("click",n=>{i.classList.toggle("active",!1),i=u.children[s-1].children[0],i.classList.toggle("active",!0),r(),a()})}).catch(s=>{console.log(s)})}ae();const ie=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var c,r,l;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const n=await W(a);if(n){const d=((c=n.data)==null?void 0:c.message)||n.message||"Subscription successful!";C({text:d,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(n){const d=((l=(r=n.response)==null?void 0:r.data)==null?void 0:l.message)||n.message||"An error occurred. Please try again later.";C({text:d,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},v=document.querySelector(".js-search-form");document.querySelector(".js-search-input");v.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;A(t),z(),A(""),v.reset()});function B(){v.classList.contains("hidden-search")||v.classList.add("hidden-search")}function re(){v.classList.contains("hidden-search")&&v.classList.remove("hidden-search")}const m=document.querySelector('button[data-name="Muscles"]'),f=document.querySelector('button[data-name="Body parts"]'),b=document.querySelector('button[data-name="Equipment"]'),P=document.querySelector(".exercises-categories-list");let o=1,w,g=1,N="";document.querySelector(".pagination-container");const H=document.querySelector('[data-element="to-previous"]'),I=document.querySelector('[data-element="to-next"]'),j=document.querySelector('[data-element="to-begin"]'),D=document.querySelector('[data-element="to-end"]'),T=document.querySelector('[data-element="pages-list"]');function R(){H.disabled=o===1,j.disabled=o===1,I.disabled=o===g,D.disabled=o===g,T.innerHTML="";for(let e=1;e<=g;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===o?"active":""}">${e}</button>`,T.appendChild(t),e===o&&t.classList.add("active")}}H.addEventListener("click",()=>h(o-1));I.addEventListener("click",()=>h(o+1));j.addEventListener("click",()=>h(1));D.addEventListener("click",()=>h(g));T.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);console.log(o),h(t)}});function h(e){e<1||e>g||e===o||(o=e,p(N),R())}m.addEventListener("click",async e=>{m.classList.add("active"),b.classList.remove("active"),f.classList.remove("active"),y.classList.remove("hidden"),E.classList.add("hidden"),B(),o=1,p("Muscles")});f.addEventListener("click",async()=>{m.classList.remove("active"),b.classList.remove("active"),f.classList.add("active"),y.classList.remove("hidden"),E.classList.add("hidden"),B(),o=1,p("Body parts")});b.addEventListener("click",async()=>{m.classList.remove("active"),b.classList.add("active"),f.classList.remove("active"),y.classList.remove("hidden"),E.classList.add("hidden"),B(),o=1,p("Equipment")});async function p(e){try{N=e,w=await J(e,o),g=w.totalPages,P.innerHTML="",P.insertAdjacentHTML("beforeend",ce(w.results)),R()}catch(t){console.log("Error fetching categories:",t)}}async function ne(){m.classList.add("active"),p("Muscles")}function ce(e){return e.map(t=>{const{filter:s,name:a,imgURL:c}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${c}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const F=document.querySelector(".filtered-exercises-categories-list"),y=document.querySelector(".exercises-list-container"),E=document.querySelector(".filtered-exercises-list-container");let M={};P.addEventListener("click",z);async function z(){const e=document.querySelector(".exercises-categories-item");if(E.classList.remove("hidden"),e){let l="";switch(e.getAttribute("data-category-filter")){case"Muscles":l="muscles";break;case"Body parts":l="bodypart";break;case"Equipment":l="equipment";break}const n=e.getAttribute("data-body-part"),d=_();M={[l]:n,page:1,limit:10,keyword:d},y.classList.add("hidden")}console.log(M);const t=await Q({...M}),{results:s,page:a,perPage:c,totalPages:r}=t;console.log("Fetched Exercises",t),re(),X(s),Z({page:a,limit:c,pagesCount:r}),s.length>0?F.innerHTML=oe():F.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, No items found</strong>'}const oe=()=>Y().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:c,target:r})=>`<li>
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
                  <p><span>Target:</span>${r}</p></div></div>
                </div>
              </li>`).join(""),O=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;de(s)}})});function de(e){const t=ee(e);O.innerHTML=ue(t);const s=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),c=document.querySelector(".modal-favorite"),r=le({modal:s,modalCloseButton:a});a.addEventListener("click",r),c.addEventListener("click",()=>{te(e)}),s.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",G({closeFn:r})),s.addEventListener("click",U({modal:s,closeFn:r}))}function G({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function U({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function le({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",G),e.removeEventListener("click",U),O.innerHTML=""}}function ue({id:e,gifUrl:t,name:s,rating:a,target:c,bodyPart:r,equipment:l,popularity:n,burnedCalories:d,time:k,description:K}){const V=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${V}">
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
              <p><strong>Body Part:</strong> ${r}</p>
              <p><strong>Equipment:</strong> ${l}</p>
              <p><strong>Popular:</strong> ${n}</p>
              <p><strong>Burned Calories:</strong> ${d}/${k} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${K}</p>
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
    </div>`}document.addEventListener("DOMContentLoaded",()=>{ie(),ne()});
//# sourceMappingURL=index.js.map
