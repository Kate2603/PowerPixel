import{t as n}from"./assets/modal-ce38281f.js";import"./assets/vendor-e5c2d73b.js";function o(){const t=document.querySelector(".favorites-list"),e=document.querySelector(".no-favorites-message"),s=JSON.parse(localStorage.getItem("favorites"))||[];t.innerHTML="",s.length===0?(e.style.display="block",t.style.display="none"):(e.classList.add("hidden"),s.forEach((i,a)=>{const r=d(i);t.appendChild(r)}))}function d(t){const e=document.createElement("li");return e.classList.add("exercise-card"),e.innerHTML=`<li>
  <div class="filtered-exercises-categories-list-item">
  <div class="favorites-item-header">
  <div class="favorites-header-remove">
  <p class="workout"> Workout
    </p>
  <button class="remove-button" data-id="${t.id}">
  <svg class="remove-icon" aria-hidden="true" width="18" height="18">
  <use href="./img/sprite.svg#icon-trash"></use>
</svg></button>
</div>
  <button class="start-button" data-id="${t.id}">Start
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
    <h3>${t.name}</h3>
    </div>
    <div class="filtered-categories-content-info">
    <p><span>Calories:</span> ${t.burnedCalories} / 3 min</p>
    <p><span>Body Part:</span> ${t.bodyPart}</p>
    <p><span>Target:</span>${t.target}</p></div></div>
  </div>
</li>`,e.querySelector(".remove-button").addEventListener("click",i=>{const a=i.currentTarget.dataset.id;n(a),o()}),e}function c(){o()}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=favorites.js.map
