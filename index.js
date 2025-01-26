import{s as W,a as A,f as J,b as Q,c as X,g as Y,d as Z,e as _,h as ee,i as te}from"./assets/scroll-up-4b2d732e.js";import{T as C}from"./assets/vendor-cc1203f3.js";const se=document.querySelector(".pagination-container"),u=document.querySelector(".pagination-pages"),p=document.querySelectorAll(".pagination-arrows"),E=p[0].children[0].children[0],S=p[0].children[1].children[0],k=p[1].children[0].children[0],q=p[1].children[1].children[0];let i;function ae(e="Muscles",t=1){document.querySelector(".loader").classList.toggle("is-active",!0),fetch(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=10`).then(s=>s.json()).then(s=>{const a=s.totalPages;if(a>=2){se.removeAttribute("hidden");let n=[];for(let r=0;r<a;r++)n.push(`<li><button class="pagination-page" data-page="${r+1}">${r+1}</button></li>`);u.innerHTML=n.join("")}return i=u.children[t-1].children[0],i.classList.toggle("active",!0),a}).then(s=>{u.addEventListener("click",c=>{if(c.currentTarget!==c.target&&c.target.dataset.page!=i.innerText){const l=c.target;c.target.dataset.page,i.classList.toggle("active",!1),l.classList.toggle("active",!0),i=l,i.dataset.page>1?a():i.dataset.page==1&&n(),i.dataset.page==s?r():d()}});function a(){E.removeAttribute("disabled",""),S.removeAttribute("disabled","")}function n(){E.setAttribute("disabled",""),S.setAttribute("disabled","")}function r(){k.setAttribute("disabled",""),q.setAttribute("disabled","")}function d(){k.removeAttribute("disabled",""),q.removeAttribute("disabled","")}E.addEventListener("click",c=>{i.classList.toggle("active",!1),i=u.children[0].children[0],i.classList.toggle("active",!0),n(),d()}),S.addEventListener("click",c=>{const l=Number(i.dataset.page)-1;i.classList.toggle("active",!1),i=u.children[l-1].children[0],i.classList.toggle("active",!0),i.dataset.page==1&&n(),d()}),k.addEventListener("click",c=>{const l=Number(i.dataset.page)+1;i.classList.toggle("active",!1),i=u.children[l-1].children[0],i.classList.toggle("active",!0),i.dataset.page==s&&r(),a()}),q.addEventListener("click",c=>{i.classList.toggle("active",!1),i=u.children[s-1].children[0],i.classList.toggle("active",!0),r(),a()}),document.querySelector(".loader").classList.toggle("is-active",!1)}).catch(s=>{console.log(s),document.querySelector(".loader").classList.toggle("is-active",!1)})}ae();const ie=()=>{document.getElementById("subscription-form").addEventListener("submit",async t=>{var n,r,d;t.preventDefault();const s=t.target.elements.email,a=s.value;try{const c=await W(a);if(c){const l=((n=c.data)==null?void 0:n.message)||c.message||"Subscription successful!";C({text:l,duration:3e3,style:{background:"#4CAF50"},close:!0}).showToast(),s.value=""}}catch(c){const l=((d=(r=c.response)==null?void 0:r.data)==null?void 0:d.message)||c.message||"An error occurred. Please try again later.";C({text:l,duration:3e3,style:{background:"#FF5F6D"},close:!0}).showToast()}})},m=document.querySelector(".js-search-form");document.querySelector(".js-search-input");m.addEventListener("submit",function(e){e.preventDefault();const t=e.target.firstElementChild.value;A(t),z(),A(""),m.reset()});function P(){m.classList.contains("hidden-search")||m.classList.add("hidden-search")}function re(){m.classList.contains("hidden-search")&&m.classList.remove("hidden-search")}const ce=document.querySelector('button[data-name="Muscles"]'),ne=document.querySelector('button[data-name="Body parts"]'),oe=document.querySelector('button[data-name="Equipment"]'),w=document.querySelector(".exercises-categories-list"),f=document.querySelector('[data-name="Muscles-item"]'),B=document.querySelector('[data-name="Body-parts-item"]'),T=document.querySelector('[data-name="Equipment-item"]');let o=1,$,g=1,N="";const H=document.querySelector('[data-element="to-previous"]'),I=document.querySelector('[data-element="to-next"]'),j=document.querySelector('[data-element="to-begin"]'),D=document.querySelector('[data-element="to-end"]'),M=document.querySelector('[data-element="pages-list"]');function R(){H.disabled=o===1,j.disabled=o===1,I.disabled=o===g,D.disabled=o===g,M.innerHTML="";for(let e=1;e<=g;e++){const t=document.createElement("li");t.classList.add("pagination-page"),t.innerHTML=`<button type="button" data-page="${e}" class="page-btn ${e===o?"active":""}">${e}</button>`,M.appendChild(t),e===o&&t.classList.add("active")}}H.addEventListener("click",()=>v(o-1));I.addEventListener("click",()=>v(o+1));j.addEventListener("click",()=>v(1));D.addEventListener("click",()=>v(g));M.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=Number(e.target.dataset.page);console.log(o),v(t)}});function v(e){e<1||e>g||e===o||(o=e,h(N),R())}ce.addEventListener("click",async()=>{f.classList.add("active"),T.classList.remove("active"),B.classList.remove("active"),L.classList.remove("hidden"),b.classList.add("hidden"),P(),o=1,h("Muscles")});ne.addEventListener("click",async()=>{f.classList.remove("active"),T.classList.remove("active"),B.classList.add("active"),L.classList.remove("hidden"),b.classList.add("hidden"),P(),o=1,h("Body parts")});oe.addEventListener("click",async()=>{f.classList.remove("active"),T.classList.add("active"),B.classList.remove("active"),L.classList.remove("hidden"),b.classList.add("hidden"),P(),o=1,h("Equipment")});async function h(e){try{N=e,document.querySelector(".loader").classList.toggle("is-active",!0),$=await J(e,o),g=$.totalPages,w.innerHTML="",w.insertAdjacentHTML("beforeend",de($.results)),R()}catch(t){console.log("Error fetching categories:",t)}finally{document.querySelector(".loader").classList.toggle("is-active",!1)}}async function le(){f.classList.add("active"),h("Muscles")}function de(e){return e.map(t=>{const{filter:s,name:a,imgURL:n}=t;return` <li class="exercises-categories-item" data-body-part='${a}' data-category-filter='${s}'>
			<button type="button" class="exercises-categories-btn"  alt="${a}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="exercises-categories-info">
					<h3 class="exercises-category-title">${a}</h3>
					<p class="exercises-category-descr">${s}</p>
				</div>
			</button>
		</li> `}).join("")}const F=document.querySelector(".filtered-exercises-categories-list"),L=document.querySelector(".exercises-list-container"),b=document.querySelector(".filtered-exercises-list-container");let x={};w.addEventListener("click",z);async function z(){const e=document.querySelector(".exercises-categories-item");if(b.classList.remove("hidden"),e){let d="";switch(e.getAttribute("data-category-filter")){case"Muscles":d="muscles";break;case"Body parts":d="bodypart";break;case"Equipment":d="equipment";break}const c=e.getAttribute("data-body-part"),l=_();x={[d]:c,page:1,limit:10,keyword:l},L.classList.add("hidden")}console.log(x),document.querySelector(".loader").classList.toggle("is-active",!0);const t=await Q({...x}),{results:s,page:a,perPage:n,totalPages:r}=t;document.querySelector(".loader").classList.toggle("is-active",!1),console.log("Fetched Exercises",t),re(),X(s),Z({page:a,limit:n,pagesCount:r}),s.length>0?F.innerHTML=ue():F.innerHTML='<strong style="font: inherit; font-size: 24px ">Sorry, No items found</strong>'}const ue=()=>Y().map(({id:e,rating:t,name:s,burnedCalories:a,bodyPart:n,target:r})=>`<li>
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
                  <p><span>Body Part:</span> ${n}</p>
                  <p><span>Target:</span>${r}</p></div></div>
                </div>
              </li>`).join(""),O=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const s=t.attributes["data-id"].value;ge(s)}})});function ge(e){const t=ee(e);O.innerHTML=ve(t);const s=document.querySelector(".modal-backdrop"),a=document.querySelector(".modal-close"),n=document.querySelector(".modal-favorite"),r=me({modal:s,modalCloseButton:a});a.addEventListener("click",r),n.addEventListener("click",()=>{te(e)}),s.classList.add("is-open"),a.style.display="block",document.addEventListener("keydown",G({closeFn:r})),s.addEventListener("click",U({modal:s,closeFn:r}))}function G({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function U({modal:e,closeFn:t}){return function(s){s.target===e&&t()}}function me({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",G),e.removeEventListener("click",U),O.innerHTML=""}}function ve({id:e,gifUrl:t,name:s,rating:a,target:n,bodyPart:r,equipment:d,popularity:c,burnedCalories:l,time:y,description:K}){const V=a-parseInt(a)>.5?Math.round(a):Math.floor(a);return`<div class="modal-backdrop">
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
              <p><strong>Target:</strong> ${n}</p>
              <p><strong>Body Part:</strong> ${r}</p>
              <p><strong>Equipment:</strong> ${d}</p>
              <p><strong>Popular:</strong> ${c}</p>
              <p><strong>Burned Calories:</strong> ${l}/${y} min</p>
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
    </div>`}document.addEventListener("DOMContentLoaded",()=>{ie(),le()});
//# sourceMappingURL=index.js.map
