function formDataToJson(formData) {
  const json = {};
  //docu
  for (const pair of formData.entries()) {
    json[pair[0]] = pair[1];
  }

  return json;
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const json = JSON.stringify(formDataToJson(formData));
  const xhr = new XMLHttpRequest();

  xhr.open('POST', form.action);
  //need to do this for sending JSON data; should also set charset
  xhr.setRequestHeader('Content-Type', 'application/json');
  //looking at other solution; we could have also sent data using FormData only
  xhr.send(json);

  xhr.addEventListener('load', event => {
    //you can see which status we code by checking the API guide
    switch(xhr.status) {
      case 201:
        const data = JSON.parse(xhr.response);
        alert(`Successfully created staff with id: ${data.id}`);
        //new method that is used to reset a form
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
        form.reset();
        break;
      case 400:
        alert(xhr.responseText);
    }
  });
});