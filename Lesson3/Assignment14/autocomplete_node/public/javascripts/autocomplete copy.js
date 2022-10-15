/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const Autocomplete = {
  wrapInput: function() {
    //creates a new div element
    //and puts the "input" element inside it
    //as child element
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },

  createUI: function() {
    //creates a ul element
    //that is right after the input box element
    //I think this one is used to populate list
    //of suggestions
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    //we add a div element with class of autocomplete-overlay
    //below the ul element
    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  },

  bindEvents: function() {
    //input event is when the value of an input element
    //is changed
    //reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

    //we call a callback and make sure that callback's execution
    //context is the Autocomplete object
    this.input.addEventListener('input', this.valueChanged.bind(this));
    //this handles the event when we press key while being inside the input box
    //keydown event is fired when a key is pressed
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));

    //event fired when we click a mouse button
    //does not matter which button we clicked: left button, right button
    //or middle button
    this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
  },

  handleKeydown: function(event) {
    switch (event.key) {
      case 'ArrowDown':
        //I am not sure why event.preventDefault() is necessary
        event.preventDefault();
        //if selectedIndex is not null then we set it to 0 (first element in listUl)
        //and if the selectedIndex is at the last element in listUl (list of countries)
        //then we set it to first element (index = 0); this creates "wrapping behaviour"
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        //the logic for aroowUP (up arrow key) is also similar
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
        //when user presses the tab key, the value in input box
        //is equal to the best matched value (the first item in the list
        //of countries);
        //afterward we click on reset() so we clear the overlay + the
        //list of matching countries

        //since we also set bestMatchindex to null, further pressing of
        //tab key won't do anything to change our input box
        if (this.bestMatchIndex !== null && this.matches.length !== 0) {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;
      case 'Enter':
        //if we press enter, then the value we have in input box
        //is what we want to go with; so just reset
        //so we delete list of matching countries
        //and overlay content
        this.reset();
        break;

      case 'Escape': // escape
      //if we press escape then
      //we just have input value reset to previousValue
      //previousValue is what we entered before
      //we started screwing around with arrow keys, tab keys
      //and later mouseMove event to select specific events
        this.input.value = this.previousValue;
        this.reset();
        break;
    }
  },
  //if the input length is not zero
  //then we call fetchMatches to get list
  //of countries based on the input

  //otherwise, we call the reset function
  //to reset the app
  valueChanged: function() {
    let value = this.input.value;
    this.previousValue = value;

    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        //decides if overlay has any text in it
        this.visible = true;
        //holds the array of countries
        //we received from the server

        //matches is an array of objects. each object
        //contains two keys: id and name
        this.matches = matches;
        //we put the first country in the list
        //as the overlay content
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  },

  //puts the list of matching countries
  //in the this.Ul element
  draw: function() {
    //removes matches from previous search
    while (this.listUI.lastChild) {
      this.listUI.removeChild(this.listUI.lastChild);
    }

    //if "visible" is false then don't overlay anything

    //I think "visible" = false ==> there is nothing typed in the
    //input box
    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    //if the condition below is met (which is really equivalent to input field not empty)
    //then we put the first country in the list of matches as the overlay content
    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    //adds the list of matching countries as li element
    //then appends the li element to the this.listUI element
    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');

      //if the current element's index = selectedIndex
      //then we use a differnet class that gives the illusion that this current item
      //is selected
      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }

      li.textContent = match.name;
      this.listUI.appendChild(li);
    });
  },

  //I don't fully understand this but that is fine for now
  //its not a big deal to not understand this issue
  generateOverlayContent: function(value, match) {
    let end = match.name.substr(value.length);
    return value + end;
  },


  //takes two arguments; query (value of input box)
  //and a callback
  fetchMatches: function(query, callback) {
    let request = new XMLHttpRequest();

    //when the response has returned we call the callback
    //and pass request.response to it; the callback just sets
    //the matching list of country = object.matches

    //recall that request.response contains an array of objects
    //each object has two keys: id and name (name of the country)
    request.addEventListener('load', () => {
      callback(request.response);
    });

    //submits a get request to a url
    //the URL looks like this: /countries?matching=query
    //where query is the value of the query variable passed
    request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    request.responseType = 'json';
    request.send();
  },

  reset: function() {
    //vislbe = false ==> don't have anything in overlay content
    this.visible = false;
    //clear this.matches (list of matching countries)
    this.matches = [];
    //bestMatchIndex is used to determine what to put in overlay content
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;

    this.draw();
  },

  //pretty self explanatory
  //we first get the element we clicked on
  //then we let input box = that element's text content
  handleMousedown: function(event) {
    let element = event.target;
    this.input.value = element.textContent;
    this.reset();
  },

  init: function() {
    this.input = document.querySelector('input');
    this.url = '/countries?matching=';

    this.listUI = null;
    this.overlay = null;

    this.wrapInput();
    this.createUI();
    this.bindEvents();

    this.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Autocomplete.init();
});