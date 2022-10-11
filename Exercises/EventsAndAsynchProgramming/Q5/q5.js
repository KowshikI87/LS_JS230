document.addEventListener("DOMContentLoaded", event => {
  let mainArea = document.querySelector("main");
  mainArea.addEventListener("contextmenu", event => {
    event.preventDefault();
    if (event.target.id === "sub") {
      alert("sub");
    } else {
      alert("main area");
    }
  });
});