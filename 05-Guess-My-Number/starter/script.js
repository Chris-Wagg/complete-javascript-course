'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.score').textContent = '10';
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 69;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'nope';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.highscore').textContent = score;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
