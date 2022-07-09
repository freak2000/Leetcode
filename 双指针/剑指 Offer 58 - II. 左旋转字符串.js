// 利用原生的方法
var reverseLeftWords = function(s, n) {
  let arr = s.split('')
  let piece = arr.splice(0, n)
  arr = arr.concat(piece)
  return arr.join('')
};


// 双指针
var reverseLeftWords = function(s, n) {
  let len = s.length
  let reverse = (arr, start, end) => {
    while (start<end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  let arr = s.split('')
  reverse(arr, 0, n-1)
  reverse(arr, n, len-1)
  reverse(arr, 0, len-1)
  return arr.join('')
};
