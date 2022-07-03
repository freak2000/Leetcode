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
// 用双重循环来构建滑动窗口
var minSubArrayLen = function(target, nums) {
  let le = 0
  let sum = 0
  let ans = Infinity
  // 用for循环控制右指针的移动
  for (let ri = 0; ri < nums.length; ri++) {
    sum+=nums[ri]
    // 控制滑动窗口左指针
    while(sum>=target) {
      ans = ans<ri-le+1 ? ans : ri-le+1
      sum-=nums[le++]
    }
  }
  return ans === Infinity ? 0 : ans
};
