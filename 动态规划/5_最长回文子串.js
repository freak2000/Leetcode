var longestPalindrome = function(s) {
  let ans = ''
  let len = s.length
  let dp = new Array(len).fill([]).map(() => new Array(len))
  for(let l = 0; l<len; l++) {
    for (let i = 0; i+l<len; i++) {
      let j = i+l
      if (!l) {
        dp[i][j] = 1
      } else if (l===1) {
        dp[i][j] = s[i] === s[j]
      } else {
        dp[i][j] = (s[i] === s[j] && dp[i+1][j-1])
      }
      if (dp[i][j] && ans.length < l+1) {
        ans = s.slice(i, j+1)
      }
    }
  }
  return ans
};
