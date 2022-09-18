// Write some JavaScript code to retrieve the
//text of every thumbnail caption on the page.

let allTocLinks = document.querySelectorAll(".toc a");
for (let idx = 0; idx < allTocLinks.length; idx++) {
  if (idx % 2 === 1) {
    allTocLinks[idx].style.color = 'green';
  }
}