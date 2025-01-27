import{a as F}from"./vendor-e5c2d73b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const g=F.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),oe=async e=>{var o,s;const t=await g.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((s=t.data)==null?void 0:s.error)||"Subscription failed");return t.data},ne=async(e="Muscles",t=1)=>{const s=window.innerWidth<768?9:12;try{const n=await g.get("/filters",{params:{filter:e,page:t,limit:s}});if(!n.data)throw new Error("No data received");return n.data}catch(n){throw console.error("Error fetching categories:",n),new Error("Failed to fetch categories. Please try again later.")}},O=async()=>{try{return(await g.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},se=async({bodypart:e="",muscles:t="",equipment:o="",keyword:s="",page:n=1,limit:a=10})=>{try{return(await g.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:s,page:n,limit:a}})).data}catch(r){console.error("Error fetching exercises:",r)}},H=async e=>{try{return(await g.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},c={items:[],categories:{category:"",target:""},pagination:{page:1,limit:10,pagesCount:1},search:""};function ae({category:e,target:t}){c.categories={category:e,target:t}}function re(){return c.categories}function ie(e){c.items=e.map(({_id:t,...o})=>({id:t,...o}))}function ce(){return c.items}function B(e){return c.items.find(({id:t})=>e===t)}function le({page:e,limit:t,pagesCount:o}){c.pagination={page:parseInt(e),limit:parseInt(t),pagesCount:parseInt(o)}}function S(){return c.pagination}function x(e){c.pagination.page=e}const u={ADDED:"added",REMOVED:"removed"};function b(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function R({page:e}){const o=b(),s=o.length,n=Math.ceil(s/10);e<1&&(e=1),e>n&&(e=n);const a=(e-1)*10,r=Math.min(a+10,s),i=o.slice(a,r);return c.pagination={page:e,limit:10,pagesCount:n},i}function q(e){const t=b(),o=t.find(({id:s})=>s===e);return{result:o?u.ADDED:u.REMOVED,item:o,list:t}}function D(e){const{item:t,list:o}=q(e);return t?(V({list:o,id:e}),u.REMOVED):(N({list:o,id:e}),u.ADDED)}function N({list:e,id:t}){const o=B(t),s=[...e,o];localStorage.setItem("favorites",JSON.stringify(s))}function V({list:e,id:t}){const o=e.filter(({id:s})=>t!==s);o.length?localStorage.setItem("favorites",JSON.stringify(o)):localStorage.removeItem("favorites")}function de(e){c.search=e}function ue(){return c.search}function _({onChange:e,id:t}){const o=document.querySelector(`#pagination-${t}`),s=S();if(!j({container:o,paginationData:s}))return;document.querySelector('[data-element="pages-list"]').addEventListener("click",r=>{if(r.target.tagName==="BUTTON"){const i=Number(r.target.dataset.page),l=document.querySelector(".pagination-page.active"),d=document.querySelector(".page-btn.active");l.classList.remove("active"),d.classList.remove("active"),r.target.parentElement.classList.add("active"),r.target.classList.add("active"),e({page:i})}})}function j({container:e,paginationData:{pagesCount:t,page:o}}){if(t===1)return M({container:e}),!1;const s=Array.from({length:t}).reduce((n,a,r)=>{const i=r+1,l=i===o?"active":"";return n+=`<li class="pagination-page ${l}">
        <button type="button" data-page="${i}" class="page-btn ${l}">
          ${i}
        </button>
      </li>`,n},"");return e.innerHTML=`<ul class="pagination-pages" data-element="pages-list">${s}</ul>`,!0}function M({id:e,container:t}){let o=t;o||(o=document.querySelector(`#pagination-${e}`)),o.innerHTML=""}function ge(){document.querySelector("#pagination-categories").classList.add("hidden")}function ve(){document.querySelector("#pagination-categories").classList.remove("hidden")}function T({page:e}){if(e===1)return;const t=document.querySelector(`[data-page="${e}"]`),o=document.querySelector(".pagination-page.active"),s=document.querySelector(".page-btn.active");o.classList.remove("active"),s.classList.remove("active"),t.parentElement.classList.add("active"),t.classList.add("active"),x(1)}function J({pagesCount:e,id:t}){if(e<=1){const o=document.querySelector(`#pagination-${t}`);M({container:o})}else{const o=e+1;document.querySelector(`[data-page="${o}"]`).remove()}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".menu-backdrop");if(e&&o&&t){let s=function(){o.classList.add("is-open"),t.style.display="block",t.addEventListener("click",n)},n=function(){o.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",n)};e.addEventListener("click",s)}});const v=document.querySelectorAll(".header-nav-link");let f;function y(){return f||(f=P(window.location.pathname)),f}function h(e){v.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}function P(e){return e.replace(".html","").replace(".","").replace("/","").replace("PowerPixel/","")}window.addEventListener("load",()=>{const e=[...v].find(t=>{const o=P(t.getAttribute("href"));return y().includes(o)});if(e)h(e);else{const t=v[0];h(t)}});v.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),h(t.currentTarget)})});const L=document.querySelector(".sidebar-quote"),E=document.querySelector(".sidebar-quote-author"),Q=localStorage.getItem("quoteDate"),U=new Date,G=async()=>{if(Q!==U.toLocaleDateString()){const e=await O();L.innerHTML=e.quote,E.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else L.innerHTML=localStorage.getItem("quoteText"),E.innerHTML=localStorage.getItem("quoteAuthor")};G();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",o)):(e.classList.add("hidden"),e.removeEventListener("click",o))},o=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});let p;function m({page:e=1,isInit:t=!1}){const o=document.querySelector(".favorites-list"),s=document.querySelector(".no-favorites-message"),n=R({page:e}),{pagesCount:a}=S();t?p=a:a!==p&&(J({id:"favorites",pagesCount:a}),p=a),o.innerHTML="",n.length?(s.classList.add("hidden"),n.forEach((r,i)=>{const l=K(r);o.appendChild(l)})):s.classList.remove("hidden")}function K(e){const t=document.createElement("li");return t.classList.add("exercise-card"),t.innerHTML=`
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
  </div>`,t.querySelector(".remove-button").addEventListener("click",s=>{const n=s.currentTarget.dataset.id,a={page:1};D(n),m({page:1}),T(a)}),t}y()==="favorites"&&document.addEventListener("DOMContentLoaded",()=>{m({page:1,isInit:!0}),_({id:"favorites",onChange:({page:e})=>{m({page:e})}})});const $=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const o=t.attributes["data-id"].value;W(o)}})});async function W(e){const{_id:t,...o}=await H(e);$.innerHTML=ee({id:e,...o});const s=document.querySelector(".modal-backdrop"),n=document.querySelector(".modal-close"),a=document.querySelector(".modal-favorite"),r=Z({modal:s,modalCloseButton:n}),{result:i}=q(e);w({result:i,modalFavorite:a}),n.addEventListener("click",r),a.addEventListener("click",()=>{const l=D(e);if(w({result:l,modalFavorite:a}),y()==="favorites"){const d={page:1};m(d),T(d),r()}}),s.classList.add("is-open"),n.style.display="block",document.addEventListener("keydown",k({closeFn:r})),s.addEventListener("click",C({modal:s,closeFn:r}))}const z={[u.ADDED]:Y,[u.REMOVED]:X};function w({result:e,modalFavorite:t}){const o=z[e];o({modalFavorite:t})}function Y({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function X({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function k({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function C({modal:e,closeFn:t}){return function(o){o.target===e&&t()}}function Z({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",k),e.removeEventListener("click",C),$.innerHTML=""}}function ee({id:e,gifUrl:t,name:o,rating:s,target:n,bodyPart:a,equipment:r,popularity:i,burnedCalories:l,time:d,description:I}){const A=s-parseInt(s)>.5?Math.round(s):Math.floor(s);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${A}">
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
              <p><strong>Target:</strong> ${n}</p>
              <p><strong>Body Part:</strong> ${a}</p>
              <p><strong>Equipment:</strong> ${r}</p>
              <p><strong>Popular:</strong> ${i}</p>
              <p><strong>Burned Calories:</strong> ${l}/${d} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${I}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}export{ve as a,de as b,le as c,M as d,se as e,ne as f,ie as g,ge as h,_ as i,ce as j,ae as k,ue as l,re as m,oe as s};
//# sourceMappingURL=modal-e1d39f3d.js.map
