/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0
  for (let item of nums) {
    if (nums[count] !== item) {
      nums[++count] = item
    }
  }
  return count+1
};
// 使用双指针法，符合要求的数字全部传入到慢指针的数组中
