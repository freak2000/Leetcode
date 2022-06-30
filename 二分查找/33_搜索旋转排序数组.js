/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length
  let le = 0
  let ri = len-1
  while (le<=ri) {
    let mid = Math.floor(le + (ri-le)/2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] >= nums[le]) {
      if (target>=nums[le] && target<nums[mid]) {
        ri = mid-1
      } else {
        le = mid+1
      }
    } else {
      if (target > nums[mid] && target <= nums[ri]) {
        le = mid+1
      } else {
        ri = mid-1
      }
    }
  }
  return -1
};
