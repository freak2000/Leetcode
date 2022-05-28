var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  let res = Infinity
  for (let i = 0; i<nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i)
    } else {
      res = Math.min(res, i-map.get(nums[i]))
      map.set(nums[i], i)
    }
  }
  return res<=k
};
