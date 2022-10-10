async function function1() {
  console.log("before await statemetn in function 1");
  await setTimeout(() => {
    console.log("timeout inside function 1 is done");
  }, 0);
  console.log("function 1");
}

async function function2() {
  console.log("before await statement in function2");
  await setTimeout(() => {
    console.log("timeout inside function 2 is done");
  }, 50 * 1000);
  console.log("function 2");
}

async function mainFunction() {
  await function1();
  await function2();
}

//not async, function1, function2, tiemout inside functoin1 is done
function1();
function2();
console.log("not async");

// //mainFunction(); not async function1, function2, 
//timeout inside function1 is done
// console.log("not async");

