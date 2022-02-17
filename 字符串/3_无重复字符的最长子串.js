var lengthOfLongestSubstring = function(s) {
  let ans = 0
  let len = s.length
  let map = new Map()
  let tem = 0
  for (let i = 0; i<len; i++) {
    if (i) {
      map.delete(s[i-1])
    }
    while(tem<len) {
      if (!map.get(s[tem])) {
        map.set(s[tem], 1)
        tem++
      } else {
        break
      }
    }
    ans = Math.max(ans, tem-i)
  }
  return ans
};
