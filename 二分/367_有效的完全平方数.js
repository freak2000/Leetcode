var isPerfectSquare = function(num) {
  return Number.isInteger(Math.pow(num, 0.5))
}

var isPerfectSquare = function(num) {
  let left = 0
  let right = num
  while(left<=right) {
    let mid = Math.floor((left+right)/2)
    if (mid*mid === num) {
      return true
    } else if (mid*mid>num) {
      right = mid-1
    } else {
      left = mid+1
    }
  }
  return false
};
