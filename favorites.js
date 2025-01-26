import{r as n}from"./assets/scroll-up-efa4142e.js";import"./assets/vendor-cc1203f3.js";function r(){const t=document.querySelector(".favorites-list"),s=document.querySelector(".no-favorites-message"),e=JSON.parse(localStorage.getItem("favorites"))||[];t.innerHTML="",e.length===0?(s.style.display="block",t.style.display="none"):(s.classList.add("hidden"),e.forEach((a,o)=>{const i=d(a);t.appendChild(i)}))}function d(t,s){const e=document.createElement("li");return e.classList.add("exercise-card"),e.innerHTML=`<li>
  <div class="filtered-exercises-categories-list-item">
  <p class="workout"> Workout
    </p>
  <button class="remove-button" data-id="${t.id}">
  <svg class="remove-icon" aria-hidden="true" width="18" height="18">
  <use href="./img/sprite.svg#icon-trash"></use>
</svg></button>
  <button class="start-button" data-id="${t.id}">Start
    <svg class="icon-arrow" aria-hidden="true" width="18" height="18">
      <use href="./img/sprite.svg#icon-arrow-right"></use>
    </svg>
  </button>
  <div class="filtered-categories-content">
    <div class="filtered-categories-content-title">
    <svg class="icon" aria-hidden="true" width="24" height="24">
      <use href="./img/sprite.svg#men"></use>
    </svg>
    <h3>${t.name}</h3>
    </div>
    <div class="filtered-categories-content-info">
    <p><span>Calories:</span> ${t.burnedCalories} / 3 min</p>
    <p><span>Body Part:</span> ${t.bodyPart}</p>
    <p><span>Target:</span>${t.target}</p></div></div>
  </div>
</li>`,e.querySelector(".remove-button").addEventListener("click",o=>{const i=o.target.attributes["data-id"].value;n(i),r()}),e}function c(){r()}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=favorites.js.map
