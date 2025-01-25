import"./assets/scroll-up-1ca6a422.js";import"./assets/vendor-cc1203f3.js";function r(){const t=document.querySelector(".favorites-list"),e=document.querySelector(".no-favorites-message"),o=JSON.parse(localStorage.getItem("favorites"))||[];t.innerHTML="",o.length===0?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block",o.forEach((n,s)=>{const a=i(n,s);t.appendChild(a)}))}function i(t,e){const o=document.createElement("li");return o.classList.add("exercise-card"),o.innerHTML=`
    <div class="exercise-info">
      <h3>${t.name}</h3>
      <p><strong>Calories:</strong> ${t.calories} / 3 min</p>
      <p><strong>Body Part:</strong> ${t.bodyPart}</p>
      <p><strong>Target:</strong> ${t.target}</p>
    </div>
    <button class="remove-button">Remove</button>
  `,o.querySelector(".remove-button").addEventListener("click",()=>{c(e)}),o}function c(t){const e=JSON.parse(localStorage.getItem("favorites"))||[];e.splice(t,1),localStorage.setItem("favorites",JSON.stringify(e)),r()}function l(){r()}document.addEventListener("DOMContentLoaded",l);
//# sourceMappingURL=favorites.js.map
