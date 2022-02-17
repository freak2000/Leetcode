var findKthLargest = function(nums, k) {
  let ss = nums.slice(0).sort(function (a, b) { return a-b})
  return ss[nums.length-k]
};
