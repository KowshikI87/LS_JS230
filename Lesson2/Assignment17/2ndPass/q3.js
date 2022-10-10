/*

On line 1 we instantiate a new promise which calls the
resolve function with the argument "I am a promise"

We then go to line 5 but this line is not run yet because
it is asynchronous code and line 6 is synchronous code which
gets priority over asynchronous code

We run line 6 which logs "I am not a promise".

We then run line 5 which logs "I am a promise" because
the promise was fulfilled

*/