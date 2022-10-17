/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
function scheduleTemplate({number, staffs}) {
  /*
  element's nesting:

  div
    legend
    dl
      dt (child: label field), dd (child: dropdown field, input fields)
  */

  //all the form elements are inside this div element
  const container = document.createElement('div');
  //legend field
  const legend = document.createElement('legend');
  legend.textContent = `Schedule ${number}`;
  container.appendChild(legend);

  //the dl element under which we have all the dt elemnet
  const dl = document.createElement('dl');
  //dt for Staff Name
  const dtStaff = document.createElement('dt');
  //Staff Name Label
  const dtLabelStaff = document.createElement('label');
  dtLabelStaff.textContent = 'Staff Name';
  dtLabelStaff.setAttribute('for', `staff_${number}`);
  dtStaff.appendChild(dtLabelStaff);
  dl.appendChild(dtStaff);

  //dd for Staff Name
  const ddStaff = document.createElement('dd');
  const ddSelectStaff = document.createElement('select');
  ddSelectStaff.setAttribute('id', `staff_${number}`);
  ddSelectStaff.setAttribute('name', `staff_${number}`);
  //adds the list of names as options
  staffs.forEach(({id, name}) => {
    const option = document.createElement('option');
    option.setAttribute('value', id);
    option.textContent = name;
    ddSelectStaff.appendChild(option);
  });
  ddStaff.appendChild(ddSelectStaff);
  dl.appendChild(ddStaff);

  //dt for date
  const dtDate = document.createElement('dt');
  const dtLabelDate = document.createElement('label');
  dtLabelDate.textContent = 'Date';
  dtLabelDate.setAttribute('for', `date_${number}`);
  dtDate.appendChild(dtLabelDate);
  dl.appendChild(dtDate);

  //dd for date
  const ddDate = document.createElement('dd');
  const ddInputDate = document.createElement('input');
  ddInputDate.setAttribute('type', 'text');
  ddInputDate.setAttribute('id', `date_${number}`);
  ddInputDate.setAttribute('name', `date_${number}`);
  ddInputDate.setAttribute('placeholder', 'mm-dd-yy');
  ddDate.appendChild(ddInputDate);
  dl.appendChild(ddDate);

  //dt for time
  const dtTime = document.createElement('dt');
  const dtLabelTime = document.createElement('label');
  dtLabelTime.textContent = 'Time';
  dtLabelTime.setAttribute('for', `time_${number}`);
  dtTime.appendChild(dtLabelTime);
  dl.appendChild(dtTime);

  //dd for time
  const ddTime = document.createElement('dd');
  const ddInputTime = document.createElement('input');
  ddInputTime.setAttribute('type', 'text');
  ddInputTime.setAttribute('id', `time_${number}`);
  ddInputTime.setAttribute('name', `time_${number}`);
  ddInputTime.setAttribute('placeholder', 'hh:mm');
  ddTime.appendChild(ddInputTime);
  dl.appendChild(ddTime);

  container.appendChild(dl);
  return container;
}


document.addEventListener("DOMContentLoaded", event => {
  const form = document.querySelector('form');
  let staffs = [];
  let scheduleCount = 0;

  //loads the staff members into "staffs"
  (() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/staff_members');
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', event => {
      //the response is an array of objects
      //containing staff's data
      staffs = xhr.response;
    });
  })();

  function formInputsToJson() {
    const json = [];

    for (let i = 0; i < scheduleCount; i += 1) {
      let schedule = {};
      //form[staff_1] gets access to the option element
      //then when we use "value", we get the value attribute
      schedule.staff_id = form[`staff_${String(i + 1)}`].value;
      //same idea as staff_id
      schedule.date = form[`date_${String(i + 1)}`].value;
      schedule.time = form[`time_${String(i + 1)}`].value;
      json.push(schedule);
    }

    //returns an object like this: schedules: array of objects
    return {schedules: json};
  }

  document.querySelector('#btnAdd').addEventListener('click', event => {
    event.preventDefault();
    //creates a fieldset element under which we have a schedule object
    const el = document.createElement('fieldset');
    scheduleCount += 1;
    el.id = `schedule_${String(scheduleCount)}`;
    //the scheduleTemplate returns a form which is used to add a schedule
    el.appendChild(scheduleTemplate({ number: scheduleCount, staffs }));
    //we add the schedule element (nested inside fieldset element)
    document.querySelector('#schedules').appendChild(el);
  });


  form.addEventListener('submit', event => {
    event.preventDefault();
    const json = JSON.stringify(formInputsToJson());
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

    xhr.addEventListener('load', event => {
      if (xhr.status === 201) form.reset();
      alert(xhr.responseText);
    });
  });
});
