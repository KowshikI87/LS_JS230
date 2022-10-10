/* eslint-disable max-lines-per-function */
//Q1
// document.addEventListener("DOMContentLoaded", event => {
//   document.addEventListener("click", event => {
//     let button = document.querySelector(".x");
//     button.style.top = `${event.clientY}px`;
//     button.style.left = `${event.clientX}px`;
//     //alert(`x: ${event.clientX}, y: ${event.clientY}`);
//   });
// });

// //Q2
// document.addEventListener("DOMContentLoaded", event => {
//   document.addEventListener("mousemove", event => {
//     let button = document.querySelector(".x");
//     button.style.top = `${event.clientY}px`;
//     button.style.left = `${event.clientX}px`;
//     //alert(`x: ${event.clientX}, y: ${event.clientY}`);
//   });
// });

//Q3
document.addEventListener("DOMContentLoaded", event => {
  let button = document.querySelector(".x");
  document.addEventListener("mousemove", event => {
    button.style.top = `${event.clientY}px`;
    button.style.left = `${event.clientX}px`;
    //alert(`x: ${event.clientX}, y: ${event.clientY}`);
  });

  document.addEventListener("keydown", event => {
    let keyPressed = event.key.toUpperCase();
    let color;

    if (keyPressed === "B") {
      color = "blue";
    } else if (keyPressed === "G") {
      color = "green";
    } else if (keyPressed === "R") {
      color = "red";
    }

    //we need to change the color of children
    //because the color is controlled by child elements
    //of x which are .x .horizontal and .x .vertical
    for (let idx = 0; idx < button.children.length; idx++) {
      button.children[idx].style.background = color;
    }
  });
});