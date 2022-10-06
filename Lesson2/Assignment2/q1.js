let count = 1; //from LS, could move this inside the function startCounting
function startCounting() {
  setInterval(() => {
    console.log(count);
    count++;
  }, 1 * 1000);
}