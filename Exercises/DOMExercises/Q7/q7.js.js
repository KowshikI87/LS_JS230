let testArr = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

let testArr1 = ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]];

let testArr2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

/*

first iteration:

result.push["BODY", ]

while
  curntNode = "BODY"
  result.push(returnParentChildren(curntNode))

end while

function returnParentChildren(node)
  return [node.tagName, [node.children1.tagName, node.children2.tagName, ...]]


//I have to add the tag name right away as otherwise I don't know how many
//levels I need to traverse


*/

//for now: Use Mohammed's Solution. It makes the most sense to me.

function walk(node, callback) {
  callback(node);                                                   // do something with node
  for (let index = 0; index < node.childNodes.length; index += 1) { // for each child node
    walk(node.childNodes[index], callback);                         // recursively call walk()
  }
}

function nodeToArr() {
  // let result = [];
  walk(document.body, (node) => {
    let nodeChildren = node.children;
    let nodeChildrenTagNames = nodeChildren.map(childrenNode => {
      return childrenNode.tagName;
    });

    let curntResult = [node.tagName, nodeChildrenTagNames];
    return curntResult;
  });

  // return result;
}
