/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-nested-callbacks */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
let schedules;

//populate the select element that is used for
//list of schedule
function populateListBox(schedules) {
  //get the "select" element which has list of schedule
  const scheduleList = document.querySelector('#id');
  schedules.forEach(({id, staff_id, date, time}) => {
    const row = document.createElement('option');
    row.setAttribute('value', id);
    row.textContent = `${staff_id} | ${date} | ${time}`;
    scheduleList.appendChild(row);
  });
}

//helper function that takes array of schedule object and add
//staff_id to each of those schedule object
function convertStaffIdsToNames(schedules, staffs) {
  function getStaffName(id, staffs) {
    return staffs.filter(staff => staff.id === id)[0].name;
  }

  schedules.forEach(schedule => {
    schedule.staff_id = getStaffName(schedule.staff_id, staffs);
  });

  return schedules;
}

function showBookingTemplate(data) {
  const newStudentForm = document.createElement('form');
  newStudentForm.setAttribute('method', 'post');
  newStudentForm.setAttribute('action', '/api/students');
  newStudentForm.setAttribute('id', 'newStudentForm');

  const h1 = document.createElement('h1');
  h1.textContent = 'Please provide new student details';
  newStudentForm.appendChild(h1);

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  emailLabel.setAttribute('for', 'email');
  newStudentForm.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('value', data.email);
  newStudentForm.appendChild(emailInput);
  newStudentForm.appendChild(document.createElement('br'));

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'name');
  newStudentForm.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  newStudentForm.appendChild(nameInput);
  newStudentForm.appendChild(document.createElement('br'));

  const bookingSequenceLabel = document.createElement('label');
  bookingSequenceLabel.textContent = 'Booking Sequence:';
  bookingSequenceLabel.setAttribute('for', 'booking_sequence');
  newStudentForm.appendChild(bookingSequenceLabel);

  const bookingSequenceInput = document.createElement('input');
  bookingSequenceInput.setAttribute('type', 'text');
  bookingSequenceInput.setAttribute('name', 'booking_sequence');
  bookingSequenceInput.setAttribute('id', 'booking_sequence');
  bookingSequenceInput.setAttribute('value', data.bookingSequence);
  newStudentForm.appendChild(bookingSequenceInput);
  newStudentForm.appendChild(document.createElement('br'));

  const submitInput = document.createElement('input');
  submitInput.setAttribute('type', 'submit');
  newStudentForm.appendChild(submitInput);
  document.querySelector('body').appendChild(newStudentForm);
}

function formDataToJson(formData) {
  const json = {};
  for (const pair of formData.entries()) {
    json[pair[0]] = pair[1];
  }

  return json;
}

document.addEventListener("DOMContentLoaded", event => {
  const form = document.querySelector('form');

  (() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/schedules');
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', event => {
      schedules = xhr.response;
      //get the list of schedules that are not taken (student email is empty)
      schedules = schedules.filter(({student_email}) => !student_email);

      let staffs = [];
      (() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/staff_members');
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', event => {
          //get array of objects
          staffs = xhr.response;
          //takes the previous array of objects
          //and add staff_id (really staff name) to each of those objects
          schedules = convertStaffIdsToNames(schedules, staffs);
          populateListBox(schedules);
        });
      })();
    });
  })();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const json = JSON.stringify(formDataToJson(formData));
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

    xhr.addEventListener('load', event => {
      switch (xhr.status) {
        case 204:
          alert('Booked');
          window.location.href = "/ex5.html";
          break;
        case 404:
          alert(xhr.responseText);

          {
            let bookingSequence = xhr.responseText.split(':')[1].trim();
            showBookingTemplate({email: form['student_email'].value, bookingSequence});
          }

          const newStudentForm = document.querySelector('#newStudentForm');
          newStudentForm.addEventListener('submit', event => {
            event.preventDefault();
            const xhr2 = new XMLHttpRequest();
            const formData2 = new FormData(newStudentForm);
            const json2 = JSON.stringify(formDataToJson(formData2));

            xhr2.open('POST', newStudentForm.action);
            xhr2.setRequestHeader('Content-Type', 'application/json');
            xhr2.send(json2);

            xhr2.addEventListener('load', event => {
              alert(xhr2.responseText);
              if (xhr2.status === 201) {
                newStudentForm.reset();
                formData.set('student_email', formData2.get('email'));
                form.dispatchEvent(new Event('submit', { cancelable: true }));
              }
            });
          });
      }
    });
  });
});

