/*

We execute line 1 which initializes a new promise and inside
the callback, we mark the promise as fulfilled by calling `resolve(1)`

We then go run the callback in `promise.then` since there are no more
synchronous code to run (the callback in promise.then runs asynchronously)

So line 4 logs ` and we pass num + 2 or 3 to the next callback in the second
then method call. We log 3 on line 8 and pass 6 to the next callback we passed
to the third then method call. We log 6 on line 12 and the callback
returns 10. There are no more `then` callback so we run the callback
passed to `finally` method call.

[added after seeing LS solution] finally is onvked when a promise is settled
(rejected or resolved). The callback for finally takes no arguments. Thus,
in this code the num parameter on line 15 will be set to undefined regardless
of what happens in the then clauses. Thus we log undefined on line 16.

-----------old-------------
The value we return from the last
callback is not passed to finally, so the num parameter in the callback
we passed to finally refers to undefined. Thus line 16 logs undefined
and we return NaN on line 17.
-----------------------

So we log:

1
3
6
undefined

*/

