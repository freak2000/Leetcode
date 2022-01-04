var isPowerOfTwo = function(n) {
  if (n<3) {
    return n>0? 1:0
  } else if (n%2){
    return false
  } else {
    return isPowerOfTwo(n/2)
  }
};
