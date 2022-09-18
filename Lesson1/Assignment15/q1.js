let allH1 = document.querySelectorAll('h1');
for (let idx = 0; idx < allH1.length; idx++) {
  allH1[idx].classList.add("heading");
}

// //LS solution also works
// document.getElementById('primary_heading').setAttribute('class', 'heading');