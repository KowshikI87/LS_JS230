function afterNSeconds(callback, timeDuration) {
  setTimeout(() => {
    callback();
  }, timeDuration * 1000);
}