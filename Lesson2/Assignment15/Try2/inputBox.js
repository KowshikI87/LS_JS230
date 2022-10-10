let cursorInterval;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');

    cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
  });
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  let textField = document.querySelector('.text-field');
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
});
