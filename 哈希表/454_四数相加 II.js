var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let len = nums1.length
  let res = 0
  let map = new Map()
  for (let i = 0; i<len; i++) {
    for (let j = 0; j<len; j++) {
      if (!map.has(nums1[i] + nums2[j])) {
        map.set(nums1[i] + nums2[j], 1)
      } else {
        map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j])+1)
      }
    }
  }
  for (let i = 0; i<len; i++) {
    for (let j = 0; j<len; j++) {
      if (map.has(0-nums3[i]-nums4[j])) {
        res += map.get(0-nums3[i]-nums4[j])
      }
    }
  }
  return res
};
