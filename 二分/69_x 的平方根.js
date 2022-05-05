var mySqrt = function(x) {
  let left = 0
  let right = x
  while (left<=right) {
    let mid = Math.floor((left+right)/2)
    if (mid*mid === x) {
      return mid
    }
    if (mid*mid > x) {
      right = mid-1
    } else {
      if ((mid+1)*(mid+1) > x) {
        return mid
      } else {
        left = mid+1
      }
    }
  }
  return left
};
