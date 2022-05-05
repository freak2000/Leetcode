/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 找到数组中第一个大于target的值的下标
  let binarySearch = target => {
    let left = 0
    let right = nums.length-1
    let ans = nums.length
    while (left<=right) {
      let mid = Math.floor((left+right)/2)
      if (nums[mid] > target) {
        ans = mid
        right = mid-1
      } else {
        left = mid+1
      }
    }
    return ans
  }
  let le = binarySearch(target-1)
  let ri = binarySearch(target)-1
  if (le<=ri && nums[le] === nums[ri]) {
    return [le, ri]
  }
  return [-1, -1]
};
