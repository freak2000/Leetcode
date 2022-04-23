// 动态规划，dp数组
var rob = function(nums) {
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i<nums.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
  }
  return dp[nums.length-1]
};

// 动态规划，空间复杂度为0
var rob = function(nums) {
  if (nums.length === 1) return nums[0]
  let a = nums[0]
  let b = Math.max(nums[0], nums[1])
  for (let i = 2; i<nums.length; i++) {
    let c = Math.max(b, a + nums[i]);
    [a, b]=[b, c]
  }
  return b
};
