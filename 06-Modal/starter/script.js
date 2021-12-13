'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

const clickCloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const clickOpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// loops through the node list
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', clickOpenModal);
}

closeModal.addEventListener('click', clickCloseModal);
// dont call the function here because then it will run as soon at the line is read
overlay.addEventListener('click', clickCloseModal);

// this is listening globally (across the whole page) for this event to happen
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    clickCloseModal();
  }
});
