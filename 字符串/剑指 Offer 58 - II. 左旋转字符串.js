var reverseLeftWords = function(s, n) {
  let arr = s.split('')
  let piece = arr.splice(0, n)
  arr = arr.concat(piece)
  return arr.join('')
};
