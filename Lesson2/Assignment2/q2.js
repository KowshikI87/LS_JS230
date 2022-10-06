//copied from LS

let counterId;

function startCounting() {
  let count = 0;
  //key change here: we are capturing the identifier returned by setInterval
  //we can use that to stop this callback running repeteadly
  counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}