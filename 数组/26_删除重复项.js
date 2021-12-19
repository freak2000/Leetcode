/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = nums.length
  let j = 0
  for (let i=0; i<length; i++) {
    if (nums[i]!==nums[j]) {
      j+=1
      nums[j] = nums[i]
    }
  }
  return j+1
};
// 使用双指针法，符合要求的数字全部传入到慢指针的数组中
