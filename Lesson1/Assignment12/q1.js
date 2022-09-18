// Write some JavaScript code to retrieve a word count
//for each h2 heading on the page.

let allH2 = document.querySelectorAll("h2");

let allH2Content = [];
for (let idx = 0; idx < allH2.length; idx++) {
  allH2Content.push(allH2[idx].textContent);
}

let h2NumWords = allH2Content.map(h2Content => h2Content.split(' ').length);

console.log(h2NumWords);

