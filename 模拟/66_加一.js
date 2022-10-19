/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length
  for (let i = len-1; i>=0; i--) {
    if (digits[i] !== 9) {
      for (let j = i+1; j<len; j++) {
        digits[j] = 0
      }
      digits[i]++
      return digits
    }
  }
  let arr = new Array(len+1).fill(0)
  arr[0] = 1
  return arr
};
