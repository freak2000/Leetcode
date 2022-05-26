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
