/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
let cursorInterval;
document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector('.text-field');


  textField.addEventListener('click', event => {
    //needed so clicking on document event does not trigger this one too
    event.stopPropagation();
    textField.classList.add("focused");

    cursorInterval = cursorInterval || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500);

  });


  document.addEventListener("keydown", event => {
    let contentDiv = textField.querySelector(".content");
    //only add content if the textfield is focused
    if (textField.classList.contains("focused")) {
      //did not realize (sloppily) that I can have text content
      //in div withtout the "p" element
      if (event.key === "Backspace") {
        contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
      } else if (event.key.length === 1) {
        contentDiv.textContent += event.key;
      }
    }
  });

  document.addEventListener('click', event => {
    clearInterval(cursorInterval);
    cursorInterval = null;
    textField.classList.remove("focused");
    textField.classList.remove('cursor');
  });


  //I don't think this would work. As this event is only triggerred
  //when DOM is loaded. So if we did not click on the text button
  //before ven the DOM loaded (impossible) then this would not trigger

  //furthermore, after the focus is removed, this behaviour is undefined
  //likely, this could would never trigger since we would never have a chance
  //to add the "focused" class to the click button before DOM loaded

  // //if the focused class is enabled then do this
  // if (textField.classList.contains("focused")) {
  //   setInterval(() => {
  //     textField.classList.toggle("cursor");
  //   }, 500);
  // }


});