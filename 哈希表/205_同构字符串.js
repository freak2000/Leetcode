var isIsomorphic = function(s, t) {
  let len = s.length
  let map = new Map()
  let set = new Set()
  for (let i = 0; i<len; i++) {
    if (!map.has(s[i])) {
      if (!set.has(t[i])) {
        map.set(s[i], t[i])
        set.add(t[i])
      } else {
        return false
      }
    } else if (map.get(s[i]) !== t[i]) {
      return false
    }
  }
  return true
};
