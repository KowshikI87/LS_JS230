function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByClass(className) {
  let matches = [];

  walk(document.body, (node) => {
    if (node instanceof className) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByClass(HTMLParagraphElement).forEach((paragraph) =>
  paragraph.classList.add("article-text")
);


