import { fetchCategories } from './api.js';
import axios from 'axios';

const inputSearch = document.querySelector('.exercises-filter-input');
const filterMuscleBtn = document.querySelector('button[data-name="Muscles"]');
const excercisesMusclesList = document.querySelector(
  '.excercises-categories-list'
);

const currentPage = window.location.pathname;

if (
  currentPage === '/PowerPixel' ||
  currentPage === '/PowerPixel/index.html' ||
  currentPage === '/' ||
  currentPage === '/index.html'
) {
  filterMuscleBtn.classList.add('active');
} else if (
  currentPage === '/favorites.html' ||
  currentPage === '/PowerPixel/favorites.html'
) {
  filterMuscleBtn.classList.remove('active');
}

let page = 1;

async function handleFilterMuscleBtn() {
  if (filterMuscleBtn.classList.contains('active')) {
    try {
      const categoriesExcercises = await fetchCategories('Muscles', 1);

      console.log(categoriesExcercises);

      const musclesExcercisesMarkup = createGalleryCards(
        categoriesExcercises.results
      );
      excercisesMusclesList.insertAdjacentHTML(
        'beforeend',
        musclesExcercisesMarkup
      );
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  } else {
    musclesExcercisesMarkup.innerHTML = '';
    return;
  }
}

handleFilterMuscleBtn();

function createGalleryCards(images) {
  return images
    .map(image => {
      const { filter, name, imgURL } = image;
      return ` <li class="excercises-categories-item" data-body-part='${name}'>
			<button type="button" class="excercises-categories-btn"  alt="${name}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL}) no-repeat;
background-size: cover;
	background-position: center;'

				<div class="excercises-categories-info">
					<h3 class="excercises-category-title">${name}</h3>
					<p class="excercises-category-descr">${filter}</p>
				</div>
			</button>
		</li> `;
    })
    .join('');
}
