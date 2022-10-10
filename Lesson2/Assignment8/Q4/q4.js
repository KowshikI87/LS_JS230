const MAX_NUM_CHAR = 140;

document.addEventListener("DOMContentLoaded", event => {
  let textBox = document.querySelector("textarea");
  //could have also picked with button element
  let submitBtn = document.querySelector('[type="submit"]');

  textBox.addEventListener("keyup", event => {
    let counterElement = document.querySelector(".counter");

    //how to get the characters in the input box --> use the value attribute
    let charRemaining = MAX_NUM_CHAR - textBox.value.length;

    //how to just add "text" only to the p element
    counterElement.textContent = `${charRemaining} characters remaining`;

    if (charRemaining < 0) {
      textBox.classList.add("invalid");
      submitBtn.disabled = true;
    } else {
      textBox.classList.remove("invalid");
      submitBtn.disabled = false;
    }
  });
});