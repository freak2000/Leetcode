var findClosest = function(words, word1, word2) {
  let index1 = Infinity
  let index2 = Infinity
  let ans = Infinity
  for (let i = 0; i<words.length; i++) {
    if (words[i] === word1) {
      index1 = i
    } else if (words[i] === word2) {
      index2 = i
    }
    if (ans > Math.abs(index1 - index2)) {
      ans = Math.abs(index1 - index2)
    }
  }
  return ans
};
