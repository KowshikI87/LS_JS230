/*
Couple of notes
- using parentNode.children is way easier versus using while loop
  to try to keep getting all the children. Still if I wanted to do this
  use a seperate function to do this instead of nesting while loops
  (nesting is my cryptonite and nested loops are hard to understand)

- we should only go up to "BODY" tag as per the problem's impliict requirement
  evident from analyzing the test cases

- given the logic above, it is obvious why we use do while loop instead
of while loop. If we used while loop then the logic does not work here
*/
function domTreeTracer(id) {
  let result = [];

  let curntElement = document.getElementById(id);
  let parentNode;

  do {
    parentNode = curntElement.parentNode;
    let childrens = Array.from(parentNode.children);
    let childrensTag = childrens.map(element => element.tagName);
    result.push(childrensTag);
    curntElement = parentNode;
  } while (parentNode.tagName !== "BODY");

  return result;
}




//previous solution
// function domTreeTracer(id) {
//   let result = [];

//   let curntElement = document.getElementById(id);
//   let parentNode;

//   do {
//     let curntLvlElements = [];
//     while (curntElement !== null) {
//       curntLvlElements.push(curntElement);
//       curntElement = curntElement.nextElementSibling;
//     }
//     result.push(curntLvlElements);
//     parentNode = curntElement.parentNode;
//     curntElement = parentNode;
//   } while (parentNode.tagName !== "BODY");
//   return result;
// }