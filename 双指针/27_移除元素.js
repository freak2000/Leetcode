var removeElement = function(nums, val) {
  let j = 0
  for (let item of nums) {
    if (item !== val) {
      nums[j++] = item
    }
  }
  return j
};
