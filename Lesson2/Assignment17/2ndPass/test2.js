const testPromise = () => Promise.resolve('1');

function test1() {
  testPromise().then((result) => console.log(result));
  console.log('2');
}

async function test2() {
  console.log('from inside test2 body');
  console.log(await testPromise());
  console.log('2');
}

test1();
test2();
console.log('outside any function');