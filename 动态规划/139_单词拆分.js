let set = new Set([5])
var wordBreak = function(s, wordDict) {
  if (set.has(s)) return true
  let ans = false
  for (let item of wordDict) {
    if (item === s.slice(0, item.length)) {
      set.add(item)
      if (item.length === s.length) {
        return true
      }
      if (wordBreak(s.slice(item.length), wordDict)){
        return true
      }
    }
  }
  console.log(ans)
  return ans
};
set.clear()
console.log(set)


wordBreak('a','b')
