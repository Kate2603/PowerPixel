import { fetchCategories, fetchExercises, fetchExerciseById } from './api.js';
import { openExerciseModal } from './exercise-modal.js';

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

const exercisesListContainer = document.querySelector(
  '.exercises-list-container'
);
const filteredExerciseListContainer = document.querySelector(
  '.filtered-exercises-list-container'
);
const filteredExerciseList = document.querySelector(
  '.filtered-exercises-categories-list'
);

let page = 1;

const handleFilterClick = async filter => {
  filterMuscleBtn.classList.remove('active');
  filterBodyPartsBtn.classList.remove('active');
  filterEquipmentBtn.classList.remove('active');

  switch (filter) {
    case 'Muscles':
      filterMuscleBtn.classList.add('active');
      break;
    case 'Body parts':
      filterBodyPartsBtn.classList.add('active');
      break;
    case 'Equipment':
      filterEquipmentBtn.classList.add('active');
      break;
  }

  exercisesListContainer.classList.remove('hidden');
  filteredExerciseListContainer.classList.add('hidden');

  await createGalleryMarkup(filter);
};

filterMuscleBtn.addEventListener('click', () => handleFilterClick('Muscles'));
filterBodyPartsBtn.addEventListener('click', () =>
  handleFilterClick('Body parts')
);
filterEquipmentBtn.addEventListener('click', () =>
  handleFilterClick('Equipment')
);

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

exercisesList.addEventListener('click', async event => {
  const listItem = event.target.closest('.exercises-categories-item');
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
    const fetchParams = {
      [category]: target,
      keyword: '',
      page: 1,
      limit: 10,
    };

    try {
      const filteredExercises = await fetchExercises(fetchParams);
      filteredExerciseList.innerHTML = drawFilteredExercises(
        filteredExercises.results
      );
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  }
});

const drawFilteredExercises = items => {
  return items
    .map(item => {
      return `
        <li>
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
            <button class="start-button" data-id="${item.id}">Start</button>
          </div>
        </li>`;
    })
    .join('');
};

filteredExerciseList.addEventListener('click', async event => {
  const startButton = event.target.closest('.start-button');
  if (startButton) {
    const exerciseId = startButton.getAttribute('data-id');
    const exercise = await fetchExerciseById(exerciseId);
    openExerciseModal(exercise);
  }
});
