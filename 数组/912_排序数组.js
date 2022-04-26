var sortArray = function(nums) {
  let len = nums.length
  for (let i = 0; i<len-1; i++) {
    for (let j = 0; j<len-i-1; j++) {
      if (nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
};
