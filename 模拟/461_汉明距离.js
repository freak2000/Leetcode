/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let ans = 0
  let num = x^y
  while (num) {
    ans += num & 1
    num>>=1
  }
  return ans
};
