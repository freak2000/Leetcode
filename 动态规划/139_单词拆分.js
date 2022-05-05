var wordBreak = function(s, wordDict) {
  let set = new Set(wordDict)
  let len = s.length
  let dp = new Array(len+1).fill(false)
  dp[0] = true
  for (let i = 1; i<=len; i++) {
    for (let j = 0; j<i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  console.log(dp)
  return dp[s.length]
};
