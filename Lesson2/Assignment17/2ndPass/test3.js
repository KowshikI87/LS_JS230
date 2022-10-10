(async () => {
  const testPromise1 = () => Promise.resolve('1');
  const testPromise2 = () => Promise.resolve('2');

  function test1() {
    testPromise1().then((result) => console.log(result));
    console.log('2');
  }

  async function test2() {
    console.log('from inside test2 body');
    console.log(await testPromise2());
    console.log('2');
  }

  test1();
  await test2();
  console.log('outside any function');
})();