let prm1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Not Launch School");
  }, 2000);
});

prm1.catch(message => console.log(message));