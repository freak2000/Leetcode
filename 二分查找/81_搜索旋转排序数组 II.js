/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let len = nums.length
  let le = 0
  let ri = len-1
  while(le<=ri) {
    let mid = Math.floor(le + (ri-le)/2)
    if (nums[mid] === target) {
      return 1
    }
    if (nums[le] === nums[mid] && nums[ri] === nums[mid]) {
      le++
      ri--
      continue
    }
    if (nums[mid] >= nums[le]) {
      if (target >= nums[le] && target < nums[mid]) {
        ri = mid-1
      } else {
        le = mid+1
      }
    } else {
      if (target <= nums[ri] && target > nums[mid]) {
        le = mid+1
      } else {
        ri = mid - 1
      }
    }
  }
  return false
};
