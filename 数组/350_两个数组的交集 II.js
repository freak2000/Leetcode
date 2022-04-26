var intersect = function(nums1, nums2) {
  let ans = []
  for (let item of nums1) {
    let index = nums2.indexOf(item)
    if (index !== -1) {
      ans.push(item)
      nums2.splice(index, 1)
    }
  }
  return ans
};
