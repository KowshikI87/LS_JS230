//copied from LS. Did not know how to identify the "tds". I won't bother
//understanding the rest of the problem as nothing is really new here
//and main task is deciphereing the page to get what they are looking for

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll('.infobox td');
let cell;
let link;

for (index = 0; index < tds.length; index += 1) {
  cell = tds[index];

  keys.forEach(key => {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);