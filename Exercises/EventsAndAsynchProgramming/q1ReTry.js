function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

let secondsElapsed = 0;
let interval;
function randomizer(...callbacks) {
  //log time
  interval = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);
  }, 1  * 1000);

  //stop the time logging; LS solution for stopping
  //time logging is better than mine
  setTimeout(() => {
    clearInterval(interval);
    //added extra 1 second to duration
    //so we log last second
  }, (((2 * callbacks.length) + 1) * 1000));

  //call functions at random interval
  for (let idx = 0; idx < callbacks.length; idx++) {
    setTimeout(() => {
      callbacks[idx]();
    }, getRunTimeDelay(callbacks.length));
  }
}

function getRunTimeDelay(numOfFunctions) {
  return Math.floor(Math.random() * ((2 * numOfFunctions) + 1)) * 1000;
}

randomizer(callback1, callback2, callback3, callback1, callback2, callback3);

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