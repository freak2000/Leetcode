var wordPattern = function(pattern, s) {
  let arr = s.split(' ')
  if (arr.length !== pattern.length) return false
  let len = pattern.length
  let map = new Map()
  let set = new Set()
  for (let i = 0; i<len; i++) {
    if (!map.has(pattern[i])) {
      if (!set.has(arr[i])) {
        map.set(pattern[i], arr[i])
        set.add(arr[i])
      } else {
        return false
      }
    } else if (map.get(pattern[i]) !== arr[i]) {
      return false
    }
  }
  return true
};
