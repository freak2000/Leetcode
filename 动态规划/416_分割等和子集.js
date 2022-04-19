var canPartition = function(nums) {
  let sum = nums.reduce((pre, cur) => pre + cur)
  if (sum%2) return false
  sum/=2
  let len = nums.length
  let dp = new Array(sum+1).fill(false)
  dp[0] = true
  for (let i = 0; i<len; i++) {
    for (let j = sum; 0<=j; j--) {
      if (j-nums[i]>=0) {
        dp[j] = dp[j] || dp[j-nums[i]]
      }
    }
  }
  return dp[sum]
};
