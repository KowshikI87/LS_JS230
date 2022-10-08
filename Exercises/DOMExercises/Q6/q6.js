/*

Problem
- input: node1 id, node2 id (int, int)
- output/result: swap the node
- Rules
  - if both nodes don't exist then return undefined
  - if either node is parent of another then return undefined
  - Valid Swap
    - if either of the rules above is not violated
    - [discard this rule: level of indentation is the same ==> valid swap]
  - Rule for Swap
    - the node and its child gets moved

Example / Test Cases


Data Structure


Algorithm
  - if node1 or node2 don't exist then return undefined
  - if isParentContainChild(parentNode, childNode) return undefined
  for these two cases below then return undefined
    - case 1: parentNode = node1, childNode = node2
    - case 2: parentNode = node2, childNode = node1
  - swapping
    - make copy of node 1 (clone children)
    - make copy of node 2 (clone children)

    if we don't make clones then swapping will remove a node automatically
    Example:
    - insert node1 before node 2 --> node 1 is removed automatically
      ---> don't want this!

    - insert node1 clone before node 2
    - insert node2 clone before node 1

    -remove node1 and node2

- isParentContainChild(parentNode, childNode)
  - traverse from childNode all the way up to BODY
  - if at any point a parent nodes id = parentNode.id then return true
  - at the end of function, return false

Code


*/

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (node1 === null || node2 === null) {
    return ("at least 1 node don't exist");
  }

  //parent child relation exist so return undefined
  if (isParentContainChild(node1, node2) ||
    isParentContainChild(node2, node1)) {
    return ("parent child relationship exist");
  }

  console.log("about to swap nodes");
  let node1Clone = node1.cloneNode(true);
  let node2Clone = node2.cloneNode(true);

  node1.parentNode.insertBefore(node2Clone, node1);
  node2.parentNode.insertBefore(node1Clone, node2);

  node1.remove();
  node2.remove();
}

function isParentContainChild(parentNode, childNode) {
  let curntParent = childNode;
  do {
    curntParent = curntParent.parentNode;
    if (curntParent.id === parentNode.id) return true;
  } while (curntParent.tagName !== "BODY");
  return false;
}