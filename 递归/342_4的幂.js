var isPowerOfFour = function(n) {
  if(n<5) {
    return n===4 || n===1 ? 1:0
  } else if(n%4) {
    return 0
  } else {
    return isPowerOfFour(n/4)
  }
};
