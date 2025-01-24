import { rateExercise } from './api.js';

const exerciseModal = document.querySelector('.exercise-modal');
const modalTitle = exerciseModal.querySelector('.exercise-modal__title');
const modalDescription = exerciseModal.querySelector('#modalDescription');
const modalCalories = exerciseModal.querySelector('#modalCalories');
const modalBodyPart = exerciseModal.querySelector('#modalBodyPart');
const modalTarget = exerciseModal.querySelector('#modalTarget');
const modalRating = exerciseModal.querySelector('#modalRating');
const modalEquipment = exerciseModal.querySelector('#modalEquipment');
const modalPopular = exerciseModal.querySelector('#modalPopular');
const modalImage = exerciseModal.querySelector('#modalImage');
const closeExerciseModal = exerciseModal.querySelector(
  '.exercise-modal__close'
);

const ratingModal = document.querySelector('.rating-modal');
const closeRatingModal = ratingModal.querySelector('.rating-modal__close');
const ratingForm = document.getElementById('ratingForm');
const notification = document.getElementById('notification');

let exerciseId;

const openModalButton = document.getElementById('modalExercise');

// Hide the button
openModalButton.style.display = 'none';

// Show the button under certain conditions
function showModalButton() {
  openModalButton.style.display = 'block'; // Show the button
}

openModalButton.addEventListener('click', () => {
  openExerciseModal({
    id: 1,
    name: 'Example Exercise',
    description: 'This is an example exercise.',
    burnedCalories: 100,
    bodyPart: 'Arms',
    target: 'Strength',
    rating: 4.5,
    equipment: 'Dumbbell',
    popularity: 'High',
    imgURL: 'path/to/image.jpg',
    videoUrl: 'path/to/video.mp4',
  });
});

export function openExerciseModal(exercise) {
  exerciseId = exercise.id;
  modalTitle.textContent = exercise.name;
  modalDescription.textContent =
    exercise.description || 'Description not available';
  modalCalories.textContent = `Calories: ${exercise.burnedCalories} / 3 min`;
  modalBodyPart.textContent = `Body Part: ${exercise.bodyPart}`;
  modalTarget.textContent = `Target: ${exercise.target}`;
  modalRating.textContent = `Rating: ${exercise.rating}`;
  modalEquipment.textContent = `Equipment: ${exercise.equipment || 'None'}`;
  modalPopular.textContent = `Popularity: ${exercise.popularity || 'None'}`;
  modalImage.src = exercise.imgURL || '';

  const videoContainer = exerciseModal.querySelector('.exercise-modal__video');
  if (exercise.videoUrl) {
    videoContainer.innerHTML = `
      <video controls>
        <source src="${exercise.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    videoContainer.innerHTML = '';
  }

  exerciseModal.classList.add('active');
}

// Closing the exercise modal
closeExerciseModal.addEventListener('click', () => {
  exerciseModal.classList.remove('active');
});

exerciseModal.addEventListener('click', event => {
  if (event.target === exerciseModal) {
    exerciseModal.classList.remove('active');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    exerciseModal.classList.remove('active');
  }
});

// Opening the rating modal
function openRatingModal() {
  ratingModal.classList.add('active');
  exerciseModal.classList.remove('active');
}

document
  .getElementById('giveRating')
  .addEventListener('click', openRatingModal);

// Closing the rating modal
closeRatingModal.addEventListener('click', () => {
  ratingModal.classList.remove('active');
});

ratingModal.addEventListener('click', event => {
  if (event.target === ratingModal) {
    ratingModal.classList.remove('active');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    ratingModal.classList.remove('active');
  }
});

ratingForm.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(ratingForm);
  const rating = formData.get('rating');
  const email = formData.get('email');
  const review = formData.get('review');

  if (!rating || !email || !review) {
    notification.classList.add('error');
    notification.textContent = 'Please fill in all fields!';
    return;
  }

  const data = {
    rate: rating,
    email: email,
    review: review,
  };

  try {
    const response = await rateExercise({ id: exerciseId, ...data });
    notification.classList.remove('error');
    notification.classList.add('success');
    notification.textContent = 'Thank you for your rating!';
    ratingModal.classList.remove('active');
  } catch (error) {
    notification.classList.add('error');
    notification.textContent = 'An error occurred, please try again.';
  }
});
