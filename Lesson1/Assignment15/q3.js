document.getElementById('toggle').onclick = e => {
  e.preventDefault(); //have it because LS says so
  let notice = document.getElementById('notice');
  //we are just toggling the class when the element (link) is clicked
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};