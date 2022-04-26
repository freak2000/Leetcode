var intersection = function(nums1, nums2) {
  let ans = []
  for(let item of nums1) {
    if (nums2.includes(item) && !ans.includes(item)) {
      ans.push(item)
    }
  }
  return ans
};
