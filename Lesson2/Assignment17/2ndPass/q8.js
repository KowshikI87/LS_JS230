/*

We start executing on line 15 which calls the "test" function passing
3 as the argument.

We then start executuing the lines under the test function. First line 10
is executed which calls the after1s function passing 2 as the argument.
The function after1s returns a new promise. The await keyword on line 
10 ensures that the promise is resolve first before we run anymore
code inside the test function. After 1000ms, the promise returned by after1s
function as a result of calling it in line 10 is resolved and
a is assigned a value of 2

Similar process occurs for line 11 and b is assigned a value of
3 after the promise is resolved.

Finally, line 12 is run which logs 3 * 2 * 3 = 18
*/