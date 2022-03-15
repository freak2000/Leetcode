// 双指针法
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0
  let ans = 0
  let len = nums.length
  let left = 0
  let mul = 1
  // 记录每一个以快指针结尾的元素的符合要求的值
  for (let right = 0; right <= len-1; right++) {
    mul *= nums[right]
    while (mul >= k) {
      mul = mul/nums[left++]
    }
    ans += right - left + 1
  }
  return ans
};
