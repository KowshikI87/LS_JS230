/* eslint-disable max-len */
/*

test1() function is called on line 13. As a result testPromise()
is called on line 4. Thus Promise.resolve("1") is called from line 1. This line
returns a resolved Promise. Then we call the `then` method on line 4 on
the returned promise. The `then` method tells JS that its callback function
should be called after the synchronous code is done.

Even though, the Promise has been resolved, the callback to then on line 4
has not been called yet, and won't be called until later

Synchronous execution continues with line 5 which logs 2. test1 function
returns undefined

We then call test2 on line 14. Since test2 is an async function, the call
immediately returns a promise. The body of the function won't be called
until all of the synchronous code has completed running --> ****I did not know this! Test this***
This makes the whole part about understanding async and await a lot easier
---> This is not true. The lines


Once test2 returns, the synchronous code is done running.

The first asynchronous item of business is for the "then" callback
to be called since that Promise has been resolved. The callback runs, and
prints 1 and finishes

The body of test2 can now run. First it calls testPromise() which again
returns a resolved Promise whos evalue is 1 [recall that when we log the
value of calling a promise with await keyword, the value that is logged
is the value of the promise getting resolved]. Since testPromise was called
with `await`, JS waits for the Promise to be settled. Since it is already
settled, the wait period is negligble and `await testpromise() returns 1`
which is what is logged by line 9. Then we run line 10 which logs 2.
*/

const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

async function test2() {
  console.log(await testPromise());
  console.log("2");
}

test1();
test2();