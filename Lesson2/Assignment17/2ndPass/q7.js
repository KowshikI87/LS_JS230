/*

We start execute the callback we passed to `Promise` when constructing a new
promise object on line 1. Line 2 is executed and it marks the promise
as fulfilled. And once a promise is resolved or rejected, any additional
attempts to settle it will fail silently. Thus, although line 12 and 13
is executed, they have no effect on the final result. 

Thus, this Promise resolves to a value of "Got it" which is what is
logged by running line 9.
*/

const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });