var topKFrequent = function(nums, k) {
  let map = new Map()
  for (let item of nums) {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  }
  let arr = [...map].sort((a, b) => b[1] - a[1] )
  let res = []
  for (let i= 0; i<k; i++) {
    res.push(arr[i][0])
  }
  return res
};
