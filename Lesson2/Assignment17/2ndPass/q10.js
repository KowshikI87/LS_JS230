/*

The key differnce in knowledge compared to question 8
is this: (referencing the line numbers from LS page)

test1 is ran first. The await keyword on line 10
prevents any code running inside the function test1
till the promise on line 10 is resolved first (and later line 11)

But we are still free to run other code such as line 22 which calls
test2 function.

When we have this distinction, understanding the result is straightforward
*/

function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b;
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b;
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));