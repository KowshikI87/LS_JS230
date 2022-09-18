let count = 0;
function walk(node, callback) {
  count += callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, node => {
  if (node instanceof HTMLParagraphElement) {
    return 1;
  } else {
    return 0;
  }
});