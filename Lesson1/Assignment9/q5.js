function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


let images = [];
walk(document, node => {
  //we can also use node instanceof HTMLImageElement
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});