var sortedSquares = function(nums) {
  nums = nums.map((item, index, array) => item*item)
  nums.sort((a, b) => a-b)
  return nums
};
