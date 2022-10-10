setTimeout(() => { //first
  console.log('Once'); //fifth
}, 1000);

setTimeout(() => { //second
  console.log('upon'); //seventh
}, 3000);

setTimeout(() => { //third
  console.log('a'); //sixth
}, 2000);

setTimeout(() => { //fourth
  console.log('time'); //eighth
}, 4000);