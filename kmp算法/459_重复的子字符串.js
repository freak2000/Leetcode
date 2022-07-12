var repeatedSubstringPattern = function(s) {
  let len = 1
  while(len<=s.length/2) {
    let piece = s.slice(0, len)
    if (piece.repeat(Math.floor(s.length/len)) === s) {
      return true
    }
    len++
  }
  return false
};

// 利用kmp算法
var repeatedSubstringPattern = function(s) {
  if (!s.length) {
    return false
  }
  let j = -1
  let next = []
  next.push(j)
  for (let i = 1; i<s.length; i++) {
    while (j>=0 && s[i] !== s[1+j]) {
      j = next[j]
    }
    if (s[j+1] === s[i]) {
      j++
    }
    next.push(j)
  }
  console.log(next)
  if (next[next.length-1] !== -1 && !(s.length%(s.length-next[next.length-1]-1))) {
    return true
  }
  return false
};
