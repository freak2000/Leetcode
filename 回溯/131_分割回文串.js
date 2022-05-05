/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let ans = []
  let temp = []
  let backtrace = j => {
    if (j===s.length) {
      ans.push(temp.slice(0))
    }
    for (let i = 1; i+j<=s.length; i++) {
      if (huiwen(s.slice(j, j+i))) {
        temp.push(s.slice(j, j+i))
        console.log(temp)
        backtrace(j+i)
        temp.pop()
      }
    }
  }
  backtrace(0)
  return ans
};

let huiwen = str => {
  let len = str.length
  let left = 0
  let right = len-1
  while(left<right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}
