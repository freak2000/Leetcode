var mySqrt = function(x) {
  let le = 0
  let ri = x
  let ans = 0
  while(le<=ri) {
    debugger
    let mid = Math.floor(le + (ri - le)/2)
    if (mid*mid === x) {
      return mid
    } else if (mid*mid > x) {
      ri = mid-1
    } else {
      ans = mid
      le = mid+1
    }
  }
  return ans
};

console.log(mySqrt(50))
