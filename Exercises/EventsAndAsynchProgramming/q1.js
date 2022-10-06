/* eslint-disable max-len */
//Randomizer
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {

  let secondsEnd = 2 * callbacks.length;

  //I missed this part
  //outside the callback because we don't want to reset
  //it everytime
  let secondsElapsed = 0;
  //we are capturing setInterval in a variable so we can claer it
  //using clearInterval and so after certain time, we stop logging time
  let timeLogger = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= secondsEnd) {
      clearInterval(timeLogger);
    }
  }, 1000);

  for (let idx = 0; idx < callbacks.length; idx++) {
    let randomElapsedTime = Math.floor(Math.random() * (secondsEnd - 0 + 1)) * 1000;
    setTimeout(() => {
      callbacks[idx]();
    }, randomElapsedTime);
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6