var maximumProduct = function(nums) {
  let n = nums.length
  nums.sort((a, b) => a-b )
  return Math.max(nums[0]*nums[1]*nums[n-1], nums[n-3]*nums[n-2]*nums[n-1])
};
