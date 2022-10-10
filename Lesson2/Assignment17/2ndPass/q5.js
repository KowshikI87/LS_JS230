/*

First, the callback we passed to `new Promise()` to construct a promise object
is ran first. Thus, we execcute line 2 which logs "foo".

Then, line 3 is executed which marks the promise as rejected. But nothing
else happens since `.catch` is not called yet. Thus, we execute line 4 next 
which logs "bar"

Next, we invoke `promise.catch` because the promise was rejected. But since, 
`catch's` callback runs asyncronously, we fall through to line 15 which logs
"abc"

Finally, the asynchronous callback for `catch` run and logs `qux`

So we log:

foo
bar
abc
qux

*/