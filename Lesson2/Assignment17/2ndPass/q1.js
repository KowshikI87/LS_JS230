let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Launch School");
  }, 2000);
});

p.then(value => console.log(value));