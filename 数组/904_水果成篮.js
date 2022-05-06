var totalFruit = function(fruits) {
  let left = 0
  let res = 0
  let map = new Map()
  for (let right = 0; right<fruits.length; right++) {
    if (!map.has(fruits[right])) {
      map.set(fruits[right], 1)
    } else {
      map.set(fruits[right], map.get(fruits[right])+1)
    }
    if (map.size < 3) {
      let len = right - left+1
      res = res < len ? len : res
    }
    while(map.size === 3) {
      map.set(fruits[left], map.get(fruits[left])-1)
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      left++
    }
  }
  return res
};
