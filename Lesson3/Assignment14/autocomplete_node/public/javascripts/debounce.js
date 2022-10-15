//I think the function that gets exported
//starts at (func, delay) ==> ...
export default (func, delay) => {
  let timeout;
  //the returned function takes arbitrary number of arguments
  //and calls the callback with those list of arguments
  //using setTimeout

  //so this function clears the previous request
  //and creates a new request
  return (...args) => {
    //clearTimeout cancles a timeout previously established
    //by calling setTimeout()
    if (timeout) { clearTimeout(timeout) }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};