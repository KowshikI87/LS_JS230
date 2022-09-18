function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let pElements = [];
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    pElements.push(node);
  }
});

console.log(pElements);