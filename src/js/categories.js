import { fetchCategories, fetchExercises } from './api.js';
import { hideSearch, showSearch } from './search.js';

const filterMuscleBtn = document.querySelector('button[data-name="Muscles"]');
const filterBodyPartsBtn = document.querySelector(
  'button[data-name="Body parts"]'
);
const filterEquipmentBtn = document.querySelector(
  'button[data-name="Equipment"]'
);
export const exercisesList = document.querySelector(
  '.exercises-categories-list'
);

let page = 1;

const handleFilterClick = async filter => {
  filterMuscleBtn.classList.remove('active');
  filterBodyPartsBtn.classList.remove('active');

  exercisesListContainer.classList.remove('hidden');
  filteredExerciseListContainer.classList.add('hidden');

  hideSearch();
  createGalleryMarkup(filter);
};

filterBodyPartsBtn.addEventListener('click', async event => {
  filterMuscleBtn.classList.remove('active');
  filterEquipmentBtn.classList.remove('active');
  filterBodyPartsBtn.classList.add('active');

  exercisesListContainer.classList.remove('hidden');
  filteredExerciseListContainer.classList.add('hidden');

  hideSearch();
  createGalleryMarkup('Body parts');
});

filterEquipmentBtn.addEventListener('click', async event => {
  filterMuscleBtn.classList.remove('active');
  filterEquipmentBtn.classList.add('active');
  filterBodyPartsBtn.classList.remove('active');

  exercisesListContainer.classList.remove('hidden');
  filteredExerciseListContainer.classList.add('hidden');

  hideSearch();
  createGalleryMarkup('Equipment');
});

async function createGalleryMarkup(filter) {
  try {
    const categoriesExercises = await fetchCategories(filter, page);
    exercisesList.innerHTML = '';
    exercisesList.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(categoriesExercises.results)
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export async function homePageCategoriesLayout() {
  filterMuscleBtn.classList.add('active');
  await createGalleryMarkup('Muscles');
}

function createGalleryCards(images) {
  return images
    .map(image => {
      const { filter, name, imgURL } = image;
      return `
        <li class="exercises-categories-item" data-body-part='${name}' data-category-filter='${filter}'>
          <button type="button" class="exercises-categories-btn" alt="${name}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL}) no-repeat; background-size: cover; background-position: center;'>
            <div class="exercises-categories-info">
              <h3 class="exercises-category-title">${name}</h3>
              <p class="exercises-category-descr">${filter}</p>
            </div>
          </button>
        </li>`;
    })
    .join('');
}

// List of exercises

const filteredExerciseList = document.querySelector(
  '.filtered-exercises-categories-list'
);
const exercisesListContainer = document.querySelector(
  '.exercises-list-container'
);
const filteredExerciseListContainer = document.querySelector(
  '.filtered-exercises-list-container'
);
let fetchParams = {};

exercisesList.addEventListener('click', async event => {
  const listItem = event.target.closest('.exercises-categories-item');
  filteredExerciseListContainer.classList.remove('hidden');

  // Fetch parameters for exercises
  if (listItem) {
    filteredExerciseListContainer.classList.remove('hidden');

    let category = '';
    switch (listItem.getAttribute('data-category-filter')) {
      case 'Muscles':
        category = 'muscles';
        break;
      case 'Body parts':
        category = 'bodypart';
        break;
      case 'Equipment':
        category = 'equipment';
        break;
    }

    const target = listItem.getAttribute('data-body-part');
    fetchParams = {
      [category]: target,
      keyword: '',
      page: 1,
      limit: 10,
    };
    exercisesListContainer.classList.add('hidden');
  }

  //Log parameters
  console.log(fetchParams);
  const filteredExercises = await fetchExercises({ ...fetchParams });

  // Log results
  console.log(filteredExercises.results);

  showSearch();

  filteredExerciseList.innerHTML = drawFilteredExercises(
    filteredExercises.results
  );
});

const drawFilteredExercises = items => {
  return items
    .map(item => {
      return `<li>
                <div class="filtered-exercises-categories-list-item">
                  <svg class="icon" aria-hidden="true" width="24" height="24">
                    <use href="./img/sprite.svg#men"></use>
                  </svg>
                  <h3>${item.name}</h3>
                  <p><strong>Calories:</strong> ${item.burnedCalories} / 3 min</p>
                  <p><strong>Body Part:</strong> ${item.bodyPart}</p>
                  <p><strong>Target:</strong> ${item.target}</p>
                  <p><strong>Rating:</strong>
                    <svg class="star-icon" aria-hidden="true" width="24" height="24">
                      <use href="./img/sprite.svg#stars"></use>
                    </svg>
                    ${item.rating}
                  </p>
                    <button class="start-button">Start</button>
                </div>
              </li>`;
    })
    .join('');
};
