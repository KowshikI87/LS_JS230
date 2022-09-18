function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


let words = [];
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});


console.log(words);  // ["A", "The", "The", "Where", "And"]

let count = 0;
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    count += 1;
  }

  if (count !== 1) {
    node.classList.add('stanza');
  }
});