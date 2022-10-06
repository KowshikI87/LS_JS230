/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', event => {

  let answer = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  let input = document.querySelector("#guess");
  let form = document.querySelector("form");
  let paragraph = document.querySelector('p');

  paragraph.textContent = "Guess a number from 1 to 100";

  //To try later: using click event on the "guess" button
  form.addEventListener('submit', event => {
    event.preventDefault();
    //we can use the "value" attribute as it contains the value of the field
    //we know this because we would define the attribute
    //manually in an input box using the "value" attribute
    let guess = parseInt(input.value, 10);

    let message; //I had it outside this event listener

    if (guess === answer) {
      message = 'You guessed it!';
    } else if (guess > answer) {
      message = `My number is lower than ${String(guess)}`;
    } else {
      message = `My number is higher than ${String(guess)}`;
    }

    //I was a bit confused about which element they were talking about
    //it was obvious in hindsight

    paragraph.textContent = message;
  });
  let newGame = document.querySelector('a');
  newGame.addEventListener('click', event => {
    answer = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    paragraph.textContent = "Guess a number from 1 to 100";
  });
});