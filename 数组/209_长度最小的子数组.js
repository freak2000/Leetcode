// 暴力解法
var minSubArrayLen = function(target, nums) {
  let len = nums.length
  let ans = 9999
  for (let left = 0; left < len; left++) {
    let sum = 0
    for (let right = left; right<len; right++) {
      sum+=nums[right]
      if (sum>=target) {
        ans = Math.min(ans, right-left+1)
      }
    }
  }
  return ans===9999 ? 0 : ans
};

// 滑动窗口
var minSubArrayLen = function(target, nums) {
  let res = Infinity
  let left = 0
  let sum = 0
  for (let right = 0; right<nums.length; right++) {
    sum+=nums[right]
    while(sum>=target) {
      let len = right-left+1
      res = res>len ? len : res
      sum-=nums[left++]
    }
  }
  return res === Infinity ? 0 : res
};
