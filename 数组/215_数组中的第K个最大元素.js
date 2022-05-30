var findKthLargest = function(nums, k) {
  let ss = nums.slice(0).sort(function (a, b) { return a-b})
  return ss[nums.length-k]
};

var findKthLargest = function(nums, k) {
  let quickSort  = (left, right) => {
    if (left>right) {
      return
    }
    let num = partition(left, right)
    console.log(num)
    if (num === nums.length - k) {
      return nums[num]
    } else if (num>nums.length - k) {
      return quickSort(left, num-1)
    } else {
      return quickSort(num+1, right)
    }
  }
  let partition = (left , right) => {
    let pivotIndex = left
    let pivotValue = nums[right]
    for (let i = left; i<right; i++) {
      if (nums[i] < pivotValue) {
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]]
        pivotIndex++
      }
    }
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]
    return pivotIndex
  }
  return quickSort(0, nums.length-1)
};
