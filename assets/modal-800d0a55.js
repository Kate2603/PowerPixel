import{a as I}from"./vendor-e5c2d73b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),K=async e=>{var o,r;const t=await d.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((r=t.data)==null?void 0:r.error)||"Subscription failed");return t.data},U=async(e="Muscles",t=1)=>{const r=window.innerWidth<768?9:12;try{const s=await d.get("/filters",{params:{filter:e,page:t,limit:r}});if(!s.data)throw new Error("No data received");return s.data}catch(s){throw console.error("Error fetching categories:",s),new Error("Failed to fetch categories. Please try again later.")}},F=async()=>{try{return(await d.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},W=async({bodypart:e="",muscles:t="",equipment:o="",keyword:r="",page:s=1,limit:n=10})=>{try{return(await d.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:r,page:s,limit:n}})).data}catch(a){console.error("Error fetching exercises:",a)}},O=async e=>{try{return(await d.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},i={items:[],categories:{category:"",target:""},pagination:{page:1,limit:10,pagesCount:1},search:""};function z({category:e,target:t}){i.categories={category:e,target:t}}function Y(){return i.categories}function X(e){i.items=e.map(({_id:t,...o})=>({id:t,...o}))}function Z(){return i.items}function $(e){return i.items.find(({id:t})=>e===t)}function ee({page:e,limit:t,pagesCount:o}){i.pagination={page:parseInt(e),limit:parseInt(t),pagesCount:parseInt(o)}}function te(){return i.pagination}const c={ADDED:"added",REMOVED:"removed"};function E(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function w(e){const t=E(),o=t.find(({id:r})=>r===e);return{result:o?c.ADDED:c.REMOVED,item:o,list:t}}function b(e){const{item:t,list:o}=w(e);return t?(P({list:o,id:e}),c.REMOVED):(A({list:o,id:e}),c.ADDED)}function A({list:e,id:t}){const o=$(t),r=[...e,o];localStorage.setItem("favorites",JSON.stringify(r))}function P({list:e,id:t}){const o=e.filter(({id:r})=>t!==r);o.length?localStorage.setItem("favorites",JSON.stringify(o)):localStorage.removeItem("favorites")}function oe(e){i.search=e}function se(){return i.search}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".menu-backdrop");if(e&&o&&t){let r=function(){o.classList.add("is-open"),t.style.display="block",t.addEventListener("click",s)},s=function(){o.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",s)};e.addEventListener("click",r)}});const l=document.querySelectorAll(".header-nav-link");let v;function m(){return v||(v=S(window.location.pathname)),v}function f(e){l.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}function S(e){return e.replace(".html","").replace(".","").replace("/","").replace("PowerPixel/","")}window.addEventListener("load",()=>{const e=[...l].find(t=>{const o=S(t.getAttribute("href"));return m().includes(o)});if(e)f(e);else{const t=l[0];f(t)}});l.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),f(t.currentTarget)})});const h=document.querySelector(".sidebar-quote"),y=document.querySelector(".sidebar-quote-author"),H=localStorage.getItem("quoteDate"),x=new Date,B=async()=>{if(H!==x.toLocaleDateString()){const e=await F();h.innerHTML=e.quote,y.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else h.innerHTML=localStorage.getItem("quoteText"),y.innerHTML=localStorage.getItem("quoteAuthor")};B();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",o)):(e.classList.add("hidden"),e.removeEventListener("click",o))},o=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});function p(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".no-favorites-message"),o=E();e.innerHTML="",o.length?(t.classList.add("hidden"),o.forEach((r,s)=>{const n=R(r);e.appendChild(n)})):(t.style.display="block",e.style.display="none")}function R(e){const t=document.createElement("li");return t.classList.add("exercise-card"),t.innerHTML=`
  <div class="favorites-exercises-categories-list-item">
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
  <div class="favorites filtered-categories-content-top"> 
    <div class="favorites filtered-categories-content-title">
    <svg class="filtered-categories-icon" aria-hidden="true" width="24" height="24">
      <use href="./img/sprite.svg#men"></use>
    </svg>
    <h3>${e.name}</h3>
    </div>
    </div>
    <div class="favorites filtered-categories-content-info">
    <p><span>Calories:</span> ${e.burnedCalories} / 3 min</p>
    <p><span>Body Part:</span> ${e.bodyPart}</p>
    <p><span>Target:</span>${e.target}</p></div></div>
  </div>`,t.querySelector(".remove-button").addEventListener("click",r=>{const s=r.currentTarget.dataset.id;b(s),p()}),t}m()==="favorites"&&document.addEventListener("DOMContentLoaded",p);const D=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const o=t.attributes["data-id"].value;N(o)}})});async function N(e){const{_id:t,...o}=await O(e);D.innerHTML=Q({id:e,...o});const r=document.querySelector(".modal-backdrop"),s=document.querySelector(".modal-close"),n=document.querySelector(".modal-favorite"),a=J({modal:r,modalCloseButton:s}),{result:u}=w(e);L({result:u,modalFavorite:n}),s.addEventListener("click",a),n.addEventListener("click",()=>{const g=b(e);L({result:g,modalFavorite:n}),m()==="favorites"&&(p(),a())}),r.classList.add("is-open"),s.style.display="block",document.addEventListener("keydown",M({closeFn:a})),r.addEventListener("click",q({modal:r,closeFn:a}))}const V={[c.ADDED]:_,[c.REMOVED]:j};function L({result:e,modalFavorite:t}){const o=V[e];o({modalFavorite:t})}function _({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function j({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function M({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function q({modal:e,closeFn:t}){return function(o){o.target===e&&t()}}function J({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",M),e.removeEventListener("click",q),D.innerHTML=""}}function Q({id:e,gifUrl:t,name:o,rating:r,target:s,bodyPart:n,equipment:a,popularity:u,burnedCalories:g,time:T,description:k}){const C=r-parseInt(r)>.5?Math.round(r):Math.floor(r);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${C}">
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
              <p><strong>Burned Calories:</strong> ${g}/${T} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${k}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}export{oe as a,ee as b,W as c,X as d,Z as e,U as f,te as g,z as h,se as i,Y as j,K as s};
//# sourceMappingURL=modal-800d0a55.js.map
