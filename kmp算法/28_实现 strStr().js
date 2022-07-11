// 利用原生方法
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};

// kmp算法
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0
  }
  let next = []
  let j = 0
  next.push(0)
  for (let i = 1; i<needle.length; i++) {
    while (j>0 && needle[i] !== needle[j]) {
      j = next[j-1]
    }
    if (needle[i] === needle[j]) {
      j++
    }
    next.push(j)
  }
  j = 0
  for (i = 0; i<haystack.length; i++) {
    while (j > 0 && needle[j] !== haystack[i]) {
      j = next[j-1]
    }
    if (needle[j] === haystack[i]) {
      j++
    }
    if (j === needle.length) {
      return (i-needle.length+1)
    }
  }
  return -1
};
