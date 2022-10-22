/* eslint-disable max-lines-per-function */
//creates li element which's text content = date of booking
function bookingListTemplate(data) {
  const li = document.createElement('li');
  li.textContent = data;
  return li;
}

//we create a list of ul element under the date showing the list of bookings
function bookingDetailsTemplate(data) {
  const ulEle = document.createElement('ul');
  data.forEach(({staffName, studentEmail, time}) => {
    const li = document.createElement('li');
    li.textContent = `${staffName} | ${studentEmail} | ${time}`;
    ulEle.appendChild(li);
  });

  return ulEle;
}

//node is the li element (with textcontent = date) to
//which's under we will display the list of bookings
function renderBookingDetails(node, bookings) {
  //creates an array of objects
  //each object has three properties: staffName, studentEmail, and time
  const bookingsObject = bookings.map(booking => ({
    staffName: booking[0],
    studentEmail: booking[1],
    time: booking[2]
  }));

  node.appendChild(bookingDetailsTemplate(bookingsObject));
}

document.addEventListener("DOMContentLoaded", event => {

  document.querySelector('#bookings-list').addEventListener('click', ({target}) => {
    //if we clicked on an li element then we need to do somethign
    if (target.tagName === 'LI') {
      //this makes sure that the data is not already expanded to show the list
      //of schedules under a date
      if (target.childElementCount === 0) {
        const xhr = new XMLHttpRequest();
        //example of request link: http://localhost:3000/api/bookings/09-02-18
        //when we send a request to this URL, we get an array of array
        //each subarray lists a scheduling detail (name, email, time)
        xhr.open('GET', `/api/bookings/${target.textContent}`);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', () => {
          data = xhr.response;
          renderBookingDetails(target, data);
        });
      }
    }
  });

  (() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/bookings');
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', () => {
      //response is an array of dates
      const data = xhr.response;
      const bookingList = document.querySelector('#bookings-list');
      //we add the list of dates as element of ul (id of booking-list)
      //each of the element inside the ul is a li element
      data.forEach(date => {
        bookingList.appendChild(bookingListTemplate(date));
      });
    });
  })();
});

