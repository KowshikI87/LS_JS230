// eslint-disable-next-line max-lines-per-function
function retrieveSchedules() {
  const request = new XMLHttpRequest();

  // Be sure to change your host and port number accordingly
  request.open('GET','http://localhost:3000/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', event => {
    const schedules = request.response;
    const staffs = []; //keeps track of staff name
    const tally = []; //keeps track of total number of bookings for a staff

    if (schedules.length > 0) {
      //schedules is an array of objects
      //instead of using the whole object, we are only interested in
      //staff_id property which is why we have {staff_id}
      schedules.forEach(({staff_id}) => {
        const key = `staff ${String(staff_id)}`;
        if (!staffs.includes(key)) {
          staffs.push(key);
          tally.push(1);
        } else {
          tally[staffs.indexOf(key)] += 1;
        }
      });
      //create an array where each entry is like this: staff 1: 5
      //and then join the array together using new line
      alert(tally.map((_, index) => `${staffs[index]}: ${tally[index]}`).join("\n"));
    } else {
      alert('There are currently no schedules available for booking');
    }
  });

  request.addEventListener('timeout', event => {
    alert('It is taking longer than usual, please try again later.');
  });

  request.addEventListener('loadend', event => {
    alert('The request has completed.');
  });

  request.send();
}