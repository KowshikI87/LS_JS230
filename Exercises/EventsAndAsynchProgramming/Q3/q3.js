//Got a bit sloopy: user might or might not pass
//the callback
function makeBold(element, callback) {
  element.style.fontWeight = "bold";
  callback(element);
}
