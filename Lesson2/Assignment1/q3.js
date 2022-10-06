setTimeout(() => {
  setTimeout(() => {
    q(); //7th
  }, 15);

  d(); //third

  setTimeout(() => {
    n(); //fifth
  }, 5);

  z(); //fourth
}, 10);

setTimeout(() => {
  s(); //6th
}, 20);

setTimeout(() => {
  f(); //first --> second
});

g(); //second ---> first