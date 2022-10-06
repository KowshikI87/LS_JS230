function display(event) {
  //get access to the tbody element in table element
  //I am surprised that we are not using "table > tbody"
  //since tbody is a child of "table"
  let tbody = document.querySelector('table tbody');
  let tr = document.createElement('tr');
  //innerHTML is the text inside the "tr" element
  tr.innerHTML = `
    <td>${event.type}</td>
    <td>${event.key}</td>
    <td>${event.shiftKey}</td>
    <td>${event.altKey}</td>
    <td>${event.ctrlKey}</td>
    <td>${event.metaKey}</td>
  `;

  tbody.appendChild(tr); //we add a row of data to the table's body
  //I think the line below just scrolls the page down
  document.body.scrollTop = document.body.scrollHeight;
}

//keydown is fired when a key is pressed
document.addEventListener('keydown', display);
//keyup is fired when a key is released
document.addEventListener('keyup', display);

//this is for clearing the result so far; I don't see it anywhere
document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#clear');
  button.addEventListener('click', () => {
    let tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
  });
});