/* eslint-disable max-lines-per-function */
/*

Problem
- Input: (startIndex, endIndex)
  - startIndex = parent node's id attribute
  - endIndex = innermost child node's id attribute

- Output: array of tagnames that traces the path from parent node
to child node

- Rules
  -if id attribute of start or index is not in DOM, return undefined
  - if there is no path connecting element at starting index with element
  at end index then return undefined
  - endIndex is inclusive
  - only consider element nodes
  - only elements that have body as an ancestor are sliceable

Example / Test Cases


Data Structure

Algorithm

  it would be easier to go bottom up since all DOM elements
  have one direct parent node but multiple children nodes

  let finalParent = getElementById(startIndex)
  let children = getElementById(endIndex)
  

  if either children or finalParent is null then
    return undefined

  let curntParent;
  pathTagNames = []

  do
    parent = childNode.parentElementNode
    pathTagNames.append(parent.tagName)

    if parent.id == finalParent.id then
      break
  while (parent.tagName !== "BODY")

  if parent.tagName === "BODY" then
    return undefined //path not found
  else
    return pathTagNames.reverse()

Code


*/

function sliceTree(startIndex, endIndex) {
  let topLvlParent = document.getElementById(startIndex);
  let children = document.getElementById(endIndex);

  if (topLvlParent === null || children === null) return undefined;

  let curntParent = children;
  let pathTagNames = [];

  do {
    pathTagNames.push(curntParent.tagName);
    curntParent = curntParent.parentNode;

    if (curntParent.id === topLvlParent.id) {
      pathTagNames.push(curntParent.tagName);
      break;
    }

  } while (curntParent.tagName !== "BODY");


  if (curntParent.tagName === "BODY") {
    return undefined;
  } else {
    pathTagNames = pathTagNames.reverse();
    return pathTagNames;
  }
}