let stopInterval;

//only part I had a confusion about was that
//whether assigning setInterval to stopInterval
//will invoke it or not; it would --> tested in chrome console
function startCounting() {
  let count = 0;
  stopInterval = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1 * 1000);
}

function stopCounting() {
  clearInterval(stopInterval);
}

