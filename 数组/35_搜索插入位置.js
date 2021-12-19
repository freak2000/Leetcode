/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let right = nums.length-1
  let left = 0
  let ans = nums.length
  while (left <= right) {
    let middle = Math.floor((left+right)/2)
    if (nums[middle]>=target) {
      ans = middle
      right = middle-1
    } else {
      left = middle+1
    }
  }
  console.log(ans)
};

searchInsert([1, 3, 5, 7], 6)

