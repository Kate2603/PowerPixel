import{a as M}from"./vendor-e5c2d73b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const l=M.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),j=async e=>{var o,n;const t=await l.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((n=t.data)==null?void 0:n.error)||"Subscription failed");return t.data},J=async(e="Muscles",t=1)=>{const n=window.innerWidth<768?9:12;try{const s=await l.get("/filters",{params:{filter:e,page:t,limit:n}});if(!s.data)throw new Error("No data received");return s.data}catch(s){throw console.error("Error fetching categories:",s),new Error("Failed to fetch categories. Please try again later.")}},q=async()=>{try{return(await l.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},Q=async({bodypart:e="",muscles:t="",equipment:o="",keyword:n="",page:s=1,limit:r=10})=>{try{return(await l.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:n,page:s,limit:r}})).data}catch(a){console.error("Error fetching exercises:",a)}},T=async e=>{try{return(await l.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},i={items:[],pagination:{page:1,limit:10,pagesCount:1},search:""};function G(e){i.items=e.map(({_id:t,...o})=>({id:t,...o}))}function K(){return i.items}function k(e){return i.items.find(({id:t})=>e===t)}function U({page:e,limit:t,pagesCount:o}){i.pagination={page:parseInt(e),limit:parseInt(t),pagesCount:parseInt(o)}}function z(){return i.pagination}const c={ADDED:"added",REMOVED:"removed"};function I(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function y(e){const t=I(),o=t.find(({id:n})=>n===e);return{result:o?c.ADDED:c.REMOVED,item:o,list:t}}function F(e){const{item:t,list:o}=y(e);return t?(A({list:o,id:e}),c.REMOVED):(O({list:o,id:e}),c.ADDED)}function O({list:e,id:t}){const o=k(t),n=[...e,o];localStorage.setItem("favorites",JSON.stringify(n))}function A({list:e,id:t}){const o=e.filter(({id:n})=>t!==n);o.length?localStorage.setItem("favorites",JSON.stringify(o)):localStorage.removeItem("favorites")}function W(e){i.search=e}function Y(){return i.search}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".menu-backdrop");if(e&&o&&t){let n=function(){o.classList.add("is-open"),t.style.display="block",t.addEventListener("click",s)},s=function(){o.classList.remove("is-open"),t.style.display="none",t.removeEventListener("click",s)};e.addEventListener("click",n)}});const d=document.querySelectorAll(".header-nav-link");function m(e){d.forEach(t=>t.parentElement.classList.remove("active")),e.parentElement.classList.add("active")}function f(e){return e.replace(".html","").replace(".","").replace("/","")}window.addEventListener("load",()=>{const e=f(window.location.pathname),t=[...d].find(o=>{const n=f(o.getAttribute("href"));return e.includes(n)});if(t)m(t);else{const o=d[0];m(o)}});d.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem("activeLink",t.currentTarget.getAttribute("href")),m(t.currentTarget)})});const v=document.querySelector(".sidebar-quote"),p=document.querySelector(".sidebar-quote-author"),x=localStorage.getItem("quoteDate"),C=new Date,$=async()=>{if(x!==C.toLocaleDateString()){const e=await q();v.innerHTML=e.quote,p.innerHTML=e.author;const t=new Date;localStorage.setItem("quoteText",e.quote),localStorage.setItem("quoteAuthor",e.author),localStorage.setItem("quoteDate",t.toLocaleDateString())}else v.innerHTML=localStorage.getItem("quoteText"),p.innerHTML=localStorage.getItem("quoteAuthor")};$();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-container");if(e){let t=function(){window.scrollY>300?(e.classList.remove("hidden"),e.addEventListener("click",o)):(e.classList.add("hidden"),e.removeEventListener("click",o))},o=function(){window.scrollTo({top:0,behavior:"smooth"})};e.classList.add("hidden"),window.addEventListener("scroll",t)}});const L=document.querySelector(".modal-container");document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",e=>{const t=e.target.closest(".start-button");if(t){const o=t.attributes["data-id"].value;H(o)}})});async function H(e){const{_id:t,...o}=await T(e);L.innerHTML=V({id:e,...o});const n=document.querySelector(".modal-backdrop"),s=document.querySelector(".modal-close"),r=document.querySelector(".modal-favorite"),a=N({modal:n,modalCloseButton:s}),{result:u}=y(e);h({result:u,modalFavorite:r}),s.addEventListener("click",a),r.addEventListener("click",()=>{const g=F(e);h({result:g,modalFavorite:r})}),n.classList.add("is-open"),s.style.display="block",document.addEventListener("keydown",E({closeFn:a})),n.addEventListener("click",w({modal:n,closeFn:a}))}const P={[c.ADDED]:R,[c.REMOVED]:B};function h({result:e,modalFavorite:t}){const o=P[e];o({modalFavorite:t})}function R({modalFavorite:e}){e.innerHTML=`<span>Remove from favorites</span>
    <svg class="remove-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;fill: currentColor;">
      <use href="./img/sprite.svg#icon-trash"></use>
    </svg>`}function B({modalFavorite:e}){e.innerHTML=`<span>Add to favorites</span>
                <svg class="heart-icon" width="20" height="20">
                  <use href="./img/sprite.svg#heart"></use>
                </svg>`}function E({closeFn:e}){return function(t){t.key==="Escape"&&e()}}function w({modal:e,closeFn:t}){return function(o){o.target===e&&t()}}function N({modal:e,modalCloseButton:t}){return function(){e.classList.remove("is-open"),t.style.display="none",document.removeEventListener("keydown",E),e.removeEventListener("click",w),L.innerHTML=""}}function V({id:e,gifUrl:t,name:o,rating:n,target:s,bodyPart:r,equipment:a,popularity:u,burnedCalories:g,time:S,description:b}){const D=n-parseInt(n)>.5?Math.round(n):Math.floor(n);return`<div class="modal-backdrop">
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
              <div class="modal-rating" id="rating" data-rate="${D}">
                <span>${n}</span>
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
              <p><strong>Body Part:</strong> ${r}</p>
              <p><strong>Equipment:</strong> ${a}</p>
              <p><strong>Popular:</strong> ${u}</p>
              <p><strong>Burned Calories:</strong> ${g}/${S} min</p>
            </div>

            <!-- Description -->
            <div class="modal-description">
              <p>${b}</p>
            </div>

            <!-- Footer -->
            <div class="modal-footer">
              <button class="modal-favorite" data-favorite="false" data-id="${e}">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`}export{W as a,U as b,Q as c,G as d,K as e,J as f,z as g,Y as h,j as s,F as t};
//# sourceMappingURL=modal-ce38281f.js.map
