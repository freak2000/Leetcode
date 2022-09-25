/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  let ans = []
  let temp = ''
  let backtrace = (index) => {
    if (index === s.length) {
      ans.push(temp)
      return
    }
    if (s[index] >= 'A' && s[index] <= 'z') {
      temp+=s[index].toLowerCase()
      backtrace(index+1)
      temp = temp.slice(0, -1)
      temp+=s[index].toUpperCase()
      backtrace(index+1)
      temp = temp.slice(0, -1)
    } else {
      temp+=s[index]
      backtrace(index+1)
      temp = temp.slice(0, -1)
    }
  }
  backtrace(0)
  return ans
};
