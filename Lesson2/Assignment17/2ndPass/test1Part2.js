const testPromise = () => Promise.resolve('1');

async function function1() {
  console.log("before await statemetn in function 1");
  await setTimeout(() => {
    console.log("timeout inside function 1 is done");
  }, 0);
  console.log("function 1");
}

async function function2() {
  console.log("before await statement in function 2");
  console.log(await testPromise());
  console.log("function 2");
}
//not async, function1, function2, tiemout inside functoin1 is done
function1();
function2();
console.log("not async");

