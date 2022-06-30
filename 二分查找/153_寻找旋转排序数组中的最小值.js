var findMin = function(nums) {
  let len = nums.length
  let le = 0
  let ri = len-1
  let ans = nums[0]
  while (le<=ri) {
    let mid = Math.floor(le + (ri-le)/2)
    if (nums[mid] >= nums[0]) {
      le = mid+1
    } else {
      ans = nums[mid]
      ri = mid-1
    }
  }
  return ans
};
