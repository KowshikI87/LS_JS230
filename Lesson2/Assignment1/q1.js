//works but follow LS instruction
// for (let num = 1; num <= 10; num++) {
//   setTimeout(() => {
//     console.log(num);
//   }, num * 1000);
// }

function makeLogger(number) {
  return function() {
    console.log(number);
  };
}

function delayLog() {
  for (let num = 1; num <= 10; num++) {
    let logger = makeLogger(num);
    setTimeout(logger, num);
  }
}