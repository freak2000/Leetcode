var canConstruct = function(ransomNote, magazine) {
  let map = new Map()
  for (let item of magazine) {
    if (!map.get(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item)+1)
    }
  }
  for (let item of ransomNote) {
    if (!map.get(item)) {
      return false
    } else {
      map.set(item, map.get(item) - 1)
    }
  }
  return true
};
