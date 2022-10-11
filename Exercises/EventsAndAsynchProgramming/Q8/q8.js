/*

Problem
- delegateEvent(parentElement, selector, eventType, callback)
  - parent element: the one to which event is attached to
  - seletor: used to selectthe children elements inside parent elements
  which are delegating their event handler to parent
  - eventType: the type of event for the event callback
  - callback: the event handler

- Rules
  - if parentElement is undefined then
    - return undefined
    - no event listener is added
  - if parentElement exists then
    - add event listener to parentElement
    - should only call the callback if the target element
    is one of the elements found by using selector [how to do this?]
    - return true

Examples / Test Cases


Data Structure


Algorithm


Code


*/

//

//solution from Juan Jay on LS


function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement) return undefined;

  parentElement.addEventListener(eventType, event => {
    let selected = Array.from(parentElement.querySelectorAll(selector));
    //I did not know that we could use selected.includes 
    //to see if the event.target belongs to a NodeList
    if (selected.includes(event.target)) {
      callback(event);
    }
  });

  return true;
}