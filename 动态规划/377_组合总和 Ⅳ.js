var combinationSum4 = function(nums, target) {
  let dp = new Array(target+1).fill(0)
  dp[0] = 1
  for (let i = 1; i<=target; i++) {
    for (let item of nums) {
      if (i>=item) {
        dp[i] += dp[i-item]
      }
    }
  }
  return dp[target]
};
