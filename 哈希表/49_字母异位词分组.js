var groupAnagrams = function(strs) {
  let map = new Map()
  for (item of strs) {
    let arr = Array.from(item)
    arr.sort()
    let list = map.get(arr.toString()) ? map.get(arr.toString()):[]
    list.push(item)
    map.set(arr.toString(), list)
  }
  return Array.from(map.values())
};
