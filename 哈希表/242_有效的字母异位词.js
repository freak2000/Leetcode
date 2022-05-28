var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let map = new Map()
  for (let item of s) {
    if (!map.get(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  }
  for (let item of t) {
    if (!map.get(item)) {
      return false
    } else {
      map.set(item, map.get(item) - 1)
    }
  }
  return true
};
