function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }
});
