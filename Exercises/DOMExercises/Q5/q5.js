/*
//algorithm
  //get all the elements with id 1 to 22
  //for each element, count the number of parents
    //only count up to "BODY" tagName
  //filter the elements for which # of parents = indentation level
  //color those elements in filtered array
*/

const START = 1;
const END = 22;

function colorGeneration(indentLevel) {
  let allIdNums = [];
  for (let id = START; id <= END; id++) {
    allIdNums.push(id);
  }
  let idNumsWithTargetIndentLevel = allIdNums.filter(id => {
    return getNumOfAncestors(id) === indentLevel;
  });

  idNumsWithTargetIndentLevel.forEach(id => {
    let node = document.getElementById(id);
    node.classList.add("generation-color");
  });
}

function getNumOfAncestors(id) {
  let node = document.getElementById(id);

  let count = 0;
  let parentNode = node;

  do {
    parentNode = parentNode.parentNode;
    count += 1;
  } while (parentNode.tagName !== "BODY");

  return count;
}