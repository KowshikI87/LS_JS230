function cancelSchedule(scheduleId) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `/api/schedules/${String(scheduleId)}`);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status === 204) {
      alert('Schedule deleted.');
    } else {
      alert(`Deleting failed: ${xhr.responseText}`);
    }
  });
}

function cancelBooking(bookingId) {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `/api/bookings/${String(bookingId)}`);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status === 204) {
      alert('Booking cancelled.');
    } else {
      alert(`Canceling failed: ${xhr.responseText}`);
    }
  });
}