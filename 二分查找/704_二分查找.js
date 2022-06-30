var search = function(nums, target) {
  let len = nums.length
  let le = 0
  let ri = len-1
  while (le<=ri) {
    let mid= Math.floor((le+ri)/2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      ri = mid-1
    } else {
      le = mid+1
    }
  }
  return -1
};
