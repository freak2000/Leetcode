var isPowerOfThree = function(n) {
  if(n<4) {
    return n===1||n===3 ? 1:0
  } else if (n%3) {
    return 0
  } else {
    return isPowerOfThree(n/3)
  }
};
