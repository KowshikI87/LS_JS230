/*
On line 1, we initialize a new promise and we start running the code in the
callback we passed to the new Promise() call.

We execute line 2 and log "foo"

We then call the resolve callback we passed to the callback
on line 1. JS does not do anything else with it at this point

We then execute line 4 and log "bar"

We then start executing line 7 which does not do anything
yet because all synchronous code execute (line 11 is still remaining)
before asynchronous code

So we execute line 11 and log "qux" to the console.

The promise is resolved by now so we execute line 8 and log "baz"
*/


/*

First, the callback to `Promise` runs when the new `Promise` object is
constructed. So `foo` is the first line of output seen. The `resolve()`
invocation marks the promise as resolved but does not do anything
else since `then` has not been called yet. Thus, the second line of output is 
`bar`.

Next, we invoke `promise1.then`. Since `then's` callback runs asynchronously,
nothing happens yet. Instead we fall through to the console.log on line 11.
Thus, `qux` gets printed.

Finally, the asynchronous callback for `then` runs, thus printing `baz` last
*/