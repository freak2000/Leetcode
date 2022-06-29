/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function(nums, target) {
  // 找到数组中第一个大于target的值的下标
  let binarySearch = target => {
    let left = 0
    let right = nums.length-1
    let ans = nums.length
    // 当左右指针重合，说明已经获取了数组中第一个大于target的值的下标
    while (left<=right) {
      let mid = Math.floor((left+right)/2)
      // 在这种情况下，nums[mid]的值是已经确定的大于target的最小的下标的值，所以赋值给ans
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

var searchRange2 = function(nums, target) {
  let len = nums.length
  // 找到数组中最后一个小于target的值的下标
  let bs = target => {
    let ans = -1
    let le = 0
    let ri = len-1
    while (le <= ri) {
      let mid = Math.floor((le+ri)/2)
      if (nums[mid] < target) {
        ans = mid
        le = mid + 1
      } else {
        ri = mid - 1
      }
    }
    return ans
  }
  let left = bs(target)+1
  let right = bs(target+1)
  if (left<=right && nums[left] === nums[right]) {
    return [left, right]
  }
  console.log([left, right])
  return [-1, -1]
};
