/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let paragraph = document.querySelector('p');

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    let message;

    if (guess === answer) {
      message = 'You guessed it!';
    } else if (guess > answer) {
      message = `My number is lower than ${String(guess)}`;
    } else {
      message = `My number is higher than ${String(guess)}`;
    }
    paragraph.textContent = message;
  });

  let link = document.querySelector('a');
  link.addEventListener('click', event => {
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = 'Guess a number from 1 to 100';
  });
});