function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document, node => {
  if (node instanceof HTMLAnchorElement) {
    node.style.color = 'red'; //did not know about style.color
  }
});
