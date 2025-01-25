import{r as i}from"./assets/scroll-up-aac3606c.js";import"./assets/vendor-cc1203f3.js";function s(){const t=document.querySelector(".favorites-list"),o=document.querySelector(".no-favorites-message"),e=JSON.parse(localStorage.getItem("favorites"))||[];t.innerHTML="",e.length===0?(o.style.display="block",t.style.display="none"):(o.style.display="none",t.style.display="block",e.forEach((r,a)=>{const n=d(r);t.appendChild(n)}))}function d(t,o){const e=document.createElement("li");return e.classList.add("exercise-card"),e.innerHTML=`
    <div class="exercise-info">
      <h3>${t.name}</h3>
      <p><strong>Calories:</strong> ${t.burnedCalories} / 3 min</p>
      <p><strong>Body Part:</strong> ${t.bodyPart}</p>
      <p><strong>Target:</strong> ${t.target}</p>
    </div>
    <button class="remove-button" data-id="${t.id}">Remove</button>
  `,e.querySelector(".remove-button").addEventListener("click",a=>{const n=a.target.attributes["data-id"].value;i(n),s()}),e}function c(){s()}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=favorites.js.map
