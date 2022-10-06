let obj1 = {valueOfThis: function() {
  console.log(this);
}};

console.log(obj1.valueOfThis());
console.log("stop");