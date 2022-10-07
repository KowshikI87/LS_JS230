function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


let words = [];
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    //note that the text node containing the paragraph
    //text is the first child under the P element;
    //you can use the DOM visualizer to see this

    //even when if we put newline between starting <p> and start of
    //text inside p, we still have the text node as the first node
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});

console.log(words);  // ["A", "The", "The", "Where", "And"]