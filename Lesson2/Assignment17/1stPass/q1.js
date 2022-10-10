let prm1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Launch School");
  }, 2000);
});

//don't need "catch" method here as question;
prm1.then(message => {
  console.log(message);
}).catch(message => {
  console.log(message);
});