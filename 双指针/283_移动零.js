// 双指针法
var moveZeroes = function(nums) {
  let j = 0
  for(let item of nums) {
    if (item !== 0) {
      nums[j++] = item
    }
  }
  for (let i = j; i<=nums.length-1; i++) {
    nums[i] = 0
  }
  return nums
};
