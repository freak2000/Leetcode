/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  let temp = ''
  let ans = []
  let used = new Array(S.length).fill(0)
  let backtrace = index => {
    if (temp.length === S.length) {
      ans.push(temp)
    }
    for (let i = 0; i<S.length; i++) {
      if (used[i]) {
        continue
      }
      temp+=S[i]
      used[i] = 1
      backtrace(index+1)
      used[i] = 0
      temp = temp.slice(0, -1)
    }
  }
  backtrace(0)
  return ans
};
