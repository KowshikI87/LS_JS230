/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', function() {
  //seems to cover only the block from title of "TEAM" to just above the page
  let modal = document.querySelector('#modal');
  //seems to cover the entire page
  let modalLayer = document.querySelector('#modal-layer');
  //the h3 inside div with id of modal
  let modalTitle = modal.querySelector('h3');
  //the img inside div with id of modal
  let modalImage = modal.querySelector('img');
  //the p inside di with id of modal
  let modalText = modal.querySelector('p');
  //gets access to all the anchor element which has the team
  //member's image attached; going to attach event listeners to the
  //people's images (which are nested inside anchor element)
  let teamLinks = document.querySelectorAll('#team li > a');

  function showModal() {
    event.preventDefault();
    //we click on an image. So we need to find the parent "a" under which
    //the "img" is nested
    let link = event.target.closest('a');
    //we then obtain the value of custom attributes
    //which we display in the modal
    modalTitle.textContent = link.dataset.name;
    modalImage.src = link.dataset.imageSource;
    modalImage.alt = link.dataset.name;
    modalText.textContent = link.dataset.text;
    //these two lines below is what display the overlay box
    //by changing class of modalLayer and modal from hide to show
    modalLayer.classList.replace('hide', 'show');
    modal.classList.replace('hide', 'show');
  }

  function hideModal() {
    //does the reverse of showModal
    //pretty self explanatory
    event.preventDefault();
    modalTitle.textContent = '';
    modalImage.src = '';
    modalImage.alt = '';
    modalText.textContent = '';
    //replace class of modalLayer and modal from "show" to "hide"
    //which hides the modal
    modalLayer.classList.replace('show', 'hide');
    modal.classList.replace('show', 'hide');
  }

  teamLinks.forEach(link => link.addEventListener('click', showModal));
  //the event listeners attached to each image file so when we click the image
  //the modal/(the pop up with team member info) appears
  document.querySelector('#modal-layer').addEventListener('click', hideModal);
  //when we click the close button on the modal, the modal disappears
  document.querySelector('#modal a.close').addEventListener('click', hideModal);
  //when we press the escape key (keyCode = 27), the modal disappears
  document.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) {
      hideModal();
    }
  });
});
