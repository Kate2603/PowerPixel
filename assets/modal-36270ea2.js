import{a as O}from"./vendor-e5c2d73b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const g=O.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),ae=async e=>{var o,s;const t=await g.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((s=t.data)==null?void 0:s.error)||"Subscription failed");return t.data},re=async(e="Muscles",t=1)=>{const s=window.innerWidth<768?9:12;try{const n=await g.get("/filters",{params:{filter:e,page:t,limit:s}});if(!n.data)throw new Error("No data received");return n.data}catch(n){throw console.error("Error fetching categories:",n),new Error("Failed to fetch categories. Please try again later.")}},H=async()=>{try{return(await g.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},ie=async({bodypart:e="",muscles:t="",equipment:o="",keyword:s="",page:n=1,limit:a=10})=>{try{return(await g.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:s,page:n,limit:a}})).data}catch(r){console.error("Error fetching exercises:",r)}},x=async e=>{try{return(await g.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},l={items:[],categories:{category:"",target:""},pagination:{page:1,limit:10,pagesCount:1},search:""};function ce({category:e,target:t}){l.categories={category:e,target:t}}function le(){return l.categories}function de(e){l.items=e.map(({_id:t,...o})=>({id:t,...o}))}function ue(){return l.items}function B(e){return l.items.find(({id:t})=>e===t)}function ge({page:e,limit:t,pagesCount:o}){l.pagination={page:parseInt(e),limit:parseInt(t),pagesCount:parseInt(o)}}function D(){return l.pagination}function R(e){l.pagination.page=e}const u={ADDED:"added",REMOVED:"removed"};function M(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function N({page:e}){const o=M(),s=o.length,n=Math.ceil(s/10);e<1&&(e=1),e>n&&(e=n);const a=(e-1)*10,r=Math.min(a+10,s),i=o.slice(a,r);return l.pagination={page:e,limit:10,pagesCount:n},i}function T(e){const t=M(),o=t.find(({id:s})=>s===e);return{result:o?u.ADDED:u.REMOVED,item:o,list:t}}function k(e){const{item:t,list:o}=T(e);return t?(_({list:o,id:e}),u.REMOVED):(V({list:o,id:e}),u.ADDED)}function V({list:e,id:t}){const o=B(t),s=[...e,o];localStorage.setItem("favorites",JSON.stringify(s))}function _({list:e,id:t}){const o=e.filter(({id:s})=>t!==s);o.length?localStorage.setItem("favorites",JSON.stringify(o)):localStorage.removeItem("favorites")}function ve(e){l.search=e}function me(){return l.search}function j({onChange:e,id:t}){const o=document.querySelector(`#pagination-${t}`),s=D();if(!J({container:o,paginationData:s}))return;document.querySelector('[data-element="pages-list"]').addEventListener("click",r=>{if(r.target.tagName==="BUTTON"){const i=Number(r.target.dataset.page),c=document.querySelector(".pagination-page.active"),f=document.querySelector(".page-btn.active");c.classList.remove("active"),f.classList.remove("active"),r.target.parentElement.classList.add("active"),r.target.classList.add("active"),e({page:i})}})}function J({container:e,paginationData:{pagesCount:t,page:o}}){if(t===1)return P({container:e}),!1;const s=Array.from({length:t}).reduce((n,a,r)=>{const i=r+1,c=i===o?"active":"";return n+=`<li class="pagination-page ${c}">
        <button type="button" data-page="${i}" class="page-btn ${c}">
          ${i}
        </button>
      </li>`,n},"");return e.innerHTML=`<ul class="pagination-pages" data-element="pages-list">${s}</ul>`,!0}function P({id:e,container:t}){let o=t;o||(o=document.querySelector(`#pagination-${e}`)),o.innerHTML=""}function fe(){document.querySelector("#pagination-categories").classList.add("hidden")}function pe(){document.querySelector("#pagination-categories").classList.remove("hidden")}function $({page:e}){if(e===1)return;const t=document.querySelector(`[data-page="${e}"]`),o=document.querySelector(".pagination-page.active"),s=document.querySelector(".page-btn.active");o.classList.remove("active"),s.classList.remove("active"),t.parentElement.classList.add("active"),t.classList.add("active"),R(1)}function K({pagesCount:e,id:t}){if(e<=1){const o=document.querySelector(`#pagination-${t}`);P({container:o})}else{const o=e+1;document.querySelector(`[data-page="${o}"]`).remove()}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".menu-backdrop");if(e&&o&&t){let s=function(){o.classList.add("is-open"),t.style.display="block",t.addEventListener("click",n)},n=function(){o.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",n)};e.addEventListener("click",s)}});const v=document.querySelectorAll(".header-nav-link");let p;function w(){return p||(p=C(window.location.pathname)),p}function y(e){v.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}function C(e){return e.replace(".html","").replace(".","").replace("/","").replace("PowerPixel/","")}window.addEventListener("load",()=>{const e=[...v].find(t=>{const o=C(t.getAttribute("href"));return w().includes(o)});if(e)y(e);else{const t=v[0];y(t)}});v.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),y(t.currentTarget)})});const S=document.querySelector(".sidebar-quote"),b=document.querySelector(".sidebar-quote-author"),Q=localStorage.getItem("quoteDate"),U=new Date,G=async()=>{if(Q!==U.toLocaleDateString()){const e=await H();S.innerHTML=e.quote,b.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else S.innerHTML=localStorage.getItem("quoteText"),b.innerHTML=localStorage.getItem("quoteAuthor")};G();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",o)):(e.classList.add("hidden"),e.removeEventListener("click",o))},o=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});let h;function m({page:e=1,isInit:t=!1}){const o=document.querySelector(".favorites-list"),s=document.querySelector(".no-favorites-message"),n=N({page:e}),{pagesCount:a}=D();t?h=a:a!==h&&(K({id:"favorites",pagesCount:a}),h=a),o.innerHTML="",n.length?(s.classList.add("hidden"),n.forEach((r,i)=>{const c=W(r);o.appendChild(c)})):s.classList.remove("hidden")}function W(e){const t=document.createElement("li");return t.classList.add("exercise-card"),t.innerHTML=`
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
  </div>`,t.querySelector(".remove-button").addEventListener("click",s=>{const n=s.currentTarget.dataset.id,a={page:1};k(n),m({page:1}),$(a)}),t}w()==="favorites"&&document.addEventListener("DOMContentLoaded",()=>{m({page:1,isInit:!0}),j({id:"favorites",onChange:({page:e})=>{m({page:e})}})});const I=document.querySelector(".modal-container");let d,L,E;document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const o=t.attributes["data-id"].value;z(o)}})});async function z(e){const{_id:t,...o}=await x(e);I.innerHTML=ne({id:e,...o});const s=document.querySelector(".modal-backdrop"),n=document.querySelector(".modal-close"),a=document.querySelector(".modal-favorite");d=oe({modal:s,modalCloseButton:n});const{result:r}=T(e);q({result:r,modalFavorite:a}),n.addEventListener("click",d),a.addEventListener("click",()=>{const i=k(e);if(q({result:i,modalFavorite:a}),w()==="favorites"){const c={page:1};m(c),$(c),d()}}),L=ee(d),E=te(s,d),document.addEventListener("keydown",L),s.addEventListener("click",E),s.classList.add("is-open"),n.style.display="block"}const Y={[u.ADDED]:X,[u.REMOVED]:Z};function q({result:e,modalFavorite:t}){const o=Y[e];o({modalFavorite:t})}function X({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function Z({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function ee(e){return function(t){t.key==="Escape"&&e()}}function te(e,t){return function(o){o.target===e&&t()}}function oe({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",L),e.removeEventListener("click",E),t.removeEventListener("click",d),I.innerHTML=""}}function ne({id:e,gifUrl:t,name:o,rating:s,target:n,bodyPart:a,equipment:r,popularity:i,burnedCalories:c,time:f,description:A}){const F=s-parseInt(s)>.5?Math.round(s):Math.floor(s);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${F}">
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
              <p><strong>Burned Calories:</strong> ${c}/${f} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${A}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}export{pe as a,ve as b,ge as c,P as d,ie as e,re as f,de as g,fe as h,j as i,ue as j,ce as k,me as l,le as m,ae as s};
//# sourceMappingURL=modal-36270ea2.js.map
