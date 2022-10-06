/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  //this is to populate the main page with list of products
  //the set of events trigger as soon as DOM Content is Loaed
  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => {
    store.innerHTML = request.response;
  });

  request.send();

  //we want to load information on the proudct when we click
  //inside the div with id of "store"
  store.addEventListener('click', event => {
    let target = event.target;
    //if we don't click on a link (i.e the product name) then
    //we don't do anything
    if (target.tagName !== 'A') {
      return;
    }

    //otherwise, we first stop the loading of new page when we click on a link
    event.preventDefault();

    //we send a request to the server to obtain information about the product
    //link we clicked on
    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    //when the request is loaded, we load the response in the div elemnet with
    //id of "store" (we got access to it on line 3)
    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();
  });

});