/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 暴力解法，逐个遍历，复杂度为O(n)
var searchInsert1 = function(nums, target) {
  let len = nums.length
  for (let i = 0; i<len; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
  return len
};


var searchInsert2 = function(nums, target) {
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



var searchInsert3 = function(nums, target) {
  let left = 0
  let right = nums.length-1
  while(left <= right) {
    let mid = Math.floor((left+right)/2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid-1
    } else {
      left = mid+1
    }
  }
  return left
};
