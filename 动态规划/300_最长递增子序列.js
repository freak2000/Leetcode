var lengthOfLIS = function(nums) {
  let res = 0
  let len = nums.length
  let dp = new Array(len).fill(1)
  for (let i = 0; i<len; i++) {
    for (let j = 0; j<i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  for (let i = 0; i<len; i++) {
    res = Math.max(dp[i], res)
  }
  return res
};
