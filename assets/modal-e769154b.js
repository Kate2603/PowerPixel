import{a as I}from"./vendor-e5c2d73b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),U=async e=>{var o,r;const t=await d.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((r=t.data)==null?void 0:r.error)||"Subscription failed");return t.data},W=async(e="Muscles",t=1)=>{const r=window.innerWidth<768?9:12;try{const s=await d.get("/filters",{params:{filter:e,page:t,limit:r}});if(!s.data)throw new Error("No data received");return s.data}catch(s){throw console.error("Error fetching categories:",s),new Error("Failed to fetch categories. Please try again later.")}},C=async()=>{try{return(await d.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},z=async({bodypart:e="",muscles:t="",equipment:o="",keyword:r="",page:s=1,limit:n=10})=>{try{return(await d.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:r,page:s,limit:n}})).data}catch(a){console.error("Error fetching exercises:",a)}},F=async e=>{try{return(await d.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},i={items:[],categories:{category:"",target:""},pagination:{page:1,limit:10,pagesCount:1},search:""};function Y({category:e,target:t}){i.categories={category:e,target:t}}function X(){return i.categories}function Z(e){i.items=e.map(({_id:t,...o})=>({id:t,...o}))}function ee(){return i.items}function O(e){return i.items.find(({id:t})=>e===t)}function te({page:e,limit:t,pagesCount:o}){i.pagination={page:parseInt(e),limit:parseInt(t),pagesCount:parseInt(o)}}function oe(){return i.pagination}const c={ADDED:"added",REMOVED:"removed"};function $(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function E(e){const t=$(),o=t.find(({id:r})=>r===e);return{result:o?c.ADDED:c.REMOVED,item:o,list:t}}function w(e){const{item:t,list:o}=E(e);return t?(P({list:o,id:e}),c.REMOVED):(A({list:o,id:e}),c.ADDED)}function A({list:e,id:t}){const o=O(t),r=[...e,o];localStorage.setItem("favorites",JSON.stringify(r))}function P({list:e,id:t}){const o=e.filter(({id:r})=>t!==r);o.length?localStorage.setItem("favorites",JSON.stringify(o)):localStorage.removeItem("favorites")}function se(e){i.search=e}function re(){return i.search}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".menu-backdrop");if(e&&o&&t){let r=function(){o.classList.add("is-open"),t.style.display="block",t.addEventListener("click",s)},s=function(){o.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",s)};e.addEventListener("click",r)}});const l=document.querySelectorAll(".header-nav-link");let v;function m(){return v||(v=b(window.location.pathname)),v}function f(e){l.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}function b(e){return e.replace(".html","").replace(".","").replace("/","")}window.addEventListener("load",()=>{const e=[...l].find(t=>{const o=b(t.getAttribute("href"));return m().includes(o)});if(e)f(e);else{const t=l[0];f(t)}});l.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),f(t.currentTarget)})});const h=document.querySelector(".sidebar-quote"),y=document.querySelector(".sidebar-quote-author"),H=localStorage.getItem("quoteDate"),B=new Date,x=async()=>{if(H!==B.toLocaleDateString()){const e=await C();h.innerHTML=e.quote,y.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else h.innerHTML=localStorage.getItem("quoteText"),y.innerHTML=localStorage.getItem("quoteAuthor")};x();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",o)):(e.classList.add("hidden"),e.removeEventListener("click",o))},o=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});function p(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".no-favorites-message"),o=JSON.parse(localStorage.getItem("favorites"))||[];e.innerHTML="",o.length===0?(t.style.display="block",e.style.display="none"):(t.classList.add("hidden"),o.forEach((r,s)=>{const n=R(r);e.appendChild(n)}))}function R(e){const t=document.createElement("li");return t.classList.add("exercise-card"),t.innerHTML=`<li>
  <div class="filtered-exercises-categories-list-item">
  <div class="favorites-item-header">
  <div class="favorites-header-remove">
  <p class="workout"> Workout
    </p>
  <button class="remove-button" data-id="${e.id}">
  <svg class="remove-icon" aria-hidden="true" width="18" height="18">
  <use href="./img/sprite.svg#icon-trash"></use>
</svg></button>
</div>
  <button class="start-button" data-id="${e.id}">Start
    <svg class="icon-arrow" aria-hidden="true" width="18" height="18">
      <use href="./img/sprite.svg#icon-arrow-right"></use>
    </svg>
  </button>
  </div>
  <div class="filtered-categories-content">
    <div class="filtered-categories-content-title">
    <svg class="filtered-categories-icon" aria-hidden="true" width="24" height="24">
      <use href="./img/sprite.svg#men"></use>
    </svg>
    <h3>${e.name}</h3>
    </div>
    <div class="filtered-categories-content-info">
    <p><span>Calories:</span> ${e.burnedCalories} / 3 min</p>
    <p><span>Body Part:</span> ${e.bodyPart}</p>
    <p><span>Target:</span>${e.target}</p></div></div>
  </div>
</li>`,t.querySelector(".remove-button").addEventListener("click",r=>{const s=r.currentTarget.dataset.id;w(s),p()}),t}function N(){p()}m()==="favorites"&&document.addEventListener("DOMContentLoaded",N);const S=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const o=t.attributes["data-id"].value;V(o)}})});async function V(e){const{_id:t,...o}=await F(e);S.innerHTML=G({id:e,...o});const r=document.querySelector(".modal-backdrop"),s=document.querySelector(".modal-close"),n=document.querySelector(".modal-favorite"),a=Q({modal:r,modalCloseButton:s}),{result:u}=E(e);L({result:u,modalFavorite:n}),s.addEventListener("click",a),n.addEventListener("click",()=>{const g=w(e);L({result:g,modalFavorite:n}),m()==="favorites"&&(p(),a())}),r.classList.add("is-open"),s.style.display="block",document.addEventListener("keydown",D({closeFn:a})),r.addEventListener("click",M({modal:r,closeFn:a}))}const _={[c.ADDED]:j,[c.REMOVED]:J};function L({result:e,modalFavorite:t}){const o=_[e];o({modalFavorite:t})}function j({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function J({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function D({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function M({modal:e,closeFn:t}){return function(o){o.target===e&&t()}}function Q({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",D),e.removeEventListener("click",M),S.innerHTML=""}}function G({id:e,gifUrl:t,name:o,rating:r,target:s,bodyPart:n,equipment:a,popularity:u,burnedCalories:g,time:q,description:T}){const k=r-parseInt(r)>.5?Math.round(r):Math.floor(r);return`<div class="modal-backdrop">
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
              <h2 class="modal-title">${o}</h2>
              <div class="modal-rating" id="rating" data-rate="${k}">
                <span>${r}</span>
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
              <p><strong>Target:</strong> ${s}</p>
              <p><strong>Body Part:</strong> ${n}</p>
              <p><strong>Equipment:</strong> ${a}</p>
              <p><strong>Popular:</strong> ${u}</p>
              <p><strong>Burned Calories:</strong> ${g}/${q} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${T}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}export{se as a,te as b,z as c,Z as d,ee as e,W as f,oe as g,Y as h,re as i,X as j,U as s};
//# sourceMappingURL=modal-e769154b.js.map
