const testPromiseFunction2 = () => Promise.resolve('2');
const testPromiseFunction3 = () => Promise.resolve('3');

async function function1() {
  console.log("before await statemetn in function 1");
  await setTimeout(() => {
    console.log("timeout inside function 1 is done");
  }, 0);
  console.log("function 1");
}

async function function2() {
  console.log("before await statement in function 2");
  console.log(await testPromiseFunction2());
  console.log("function 2");
}

function function3() {
  console.log("beore promise handling code in function3");
  testPromiseFunction3().then((result) => console.log(result));
  console.log("after promise handling code in function3");
}

function1();
function2();
function3();
console.log("not async");

