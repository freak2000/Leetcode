var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ''
  }
  let ans = strs[0]
  for (let i = 1; i<strs.length; i++) {
    let j = 0
    for ( ;j < Math.min(ans.length, strs[i].length); j++) {
      if (strs[i][j] !== ans[j]) {
        break
      }
    }
    ans = ans.substr(0, j)
    if (!ans) {
      return ''
    }
  }
  return ans
};
