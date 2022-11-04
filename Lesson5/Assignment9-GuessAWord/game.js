/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', event => {
  //can't figure out what this is pointing to yet
  const message = document.querySelector("#message");
  //the letters in the middle of the pages after "Word:"
  const letters = document.querySelector("#spaces");
  //the div where we have "Guesses:"
  const guesses = document.querySelector("#guesses");
  //the apples at the top of the tree
  const apples = document.querySelector("#apples");
  //"Play Another"
  const replay = document.querySelector("#replay");

  var randomWord = function() {
    var words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      var word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    };
  }();

  function Game() {
    this.incorrect = 0;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split("");
    this.init();
  }

  Game.prototype = {
    createBlanks: function() {
      //creates a bunch of <span></span> concatenated together
      let spaces = (new Array(this.word.length + 1)).join("<span></span>");

      //for first go, this forEach method call does not run
      //because we don't have any "span" element
      let spans = letters.querySelectorAll("span");
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      //inserts bunch of span elements as the last element child
      //of "spaces". Each of these span element act as one of the dashes
      //in "_ _ _ _"
      letters.insertAdjacentHTML('beforeend', spaces);
      //select all the span elements
      this.spaces = document.querySelectorAll("#spaces span");
    },
    displayMessage: function(text) {
      message.text(text);
    },
    init: function() {
      this.createBlanks();
    }
  };

  new Game();
});