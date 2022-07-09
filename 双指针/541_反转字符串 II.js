/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let arr = s.split('')
  let len = arr.length
  let time = Math.floor(len/(k*2))
  let rest = len%(k*2)
  let i
  let rev = (start, num) => {
    let left = start
    let right = start+num-1
    while(left<=right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++
      right--
    }
  }
  for (i = 0; i<=time; i++) {
    rev(i*k*2, k)
  }
  if (rest < k) {
    rev(i*k*2, len - i*k*2)
  } else {
    rev(i*k*2, k)
  }
  return arr.join('')
};

var reverseStr = function(s, k) {
  let len = s.length
  let arr = s.split('')
  for (let i = 0; i<len; i+=2*k) {
    let le = i
    let ri = i+k >= len ? len-1 : i+k-1
    // console.log(le,ri)
    while(le<ri) {
      [arr[le], arr[ri]] = [arr[ri], arr[le]]
      le++
      ri--
    }
  }
  return arr.join('')
};
