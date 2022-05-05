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


var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length-1
  while(left<right) {
    let mid = Math.floor((left+right)/2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid-1
    } else {
      left = mid+1
    }
  }
  if (left === right) {
    return nums[left] >= target ? left : left+1
  }
  return left
};
