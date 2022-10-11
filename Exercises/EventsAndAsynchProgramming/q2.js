//if you click anywhere in the document, we change the style to "none"
document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

//refactored result
document.querySelector('html').addEventListener('click', event => {
  if (event.target.id !== "container") {
    document.querySelector('#container').style = 'display: none';
  }
});

//LS Solution: I missed the part that the container could also
//have children that we could click on!
document.querySelector('html').addEventListener('click', (event) => {
  const container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});


//but if you click in the container itself
//then we will still run the event above because of capturing and bubbling
document.querySelector('#container').addEventListener('click', event => {
  // event.stopPropagation();
});

//So, how do we refactor this without use of event.stopPropagataion()?

/*

If we click on document element we don't travel down to #container

If we click on #container then we would trael up to html element

End result: don't fire the event hanlder attached to html element
when we click inside #container

Changing when this events fire does not give us this result


*/