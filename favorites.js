import{t as n}from"./assets/scroll-up-015bab20.js";import"./assets/vendor-cc1203f3.js";function o(){const t=document.querySelector(".favorites-list"),e=document.querySelector(".no-favorites-message"),s=JSON.parse(localStorage.getItem("favorites"))||[];t.innerHTML="",s.length===0?(e.style.display="block",t.style.display="none"):(e.classList.add("hidden"),s.forEach((i,a)=>{const r=d(i);t.appendChild(r)}))}function d(t){const e=document.createElement("li");return e.classList.add("exercise-card"),e.innerHTML=`<li>
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
</li>`,e.querySelector(".remove-button").addEventListener("click",i=>{const a=i.target.attributes["data-id"].value;n(a),o()}),e}function c(){o()}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=favorites.js.map
