var rob = function(nums) {
  let sum = (start, end) => {
    let a = nums[start]
    let b = Math.max(nums[start], nums[1+start])
    for (let i = 2+start; i<=end; i++) {
      let c = Math.max(b, a + nums[i]);
      [a, b]=[b, c]
    }
    return b
  }
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  return Math.max(sum(0, nums.length-2), sum(1, nums.length-1))
};


var rob = function(nums) {
  if (nums.length === 1) return nums[0]
  let scan = (le, ri) => {
      let dp = []
      dp[le] = nums[le]
      dp[1+le] = Math.max(nums[le], nums[1+le])
      for (let i = le+2; i<ri; i++) {
          dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
      }
      return dp[ri-1]
  }
  let a = scan(0, nums.length-1)
  let b = scan(1, nums.length)
  return Math.max(a, b)
};