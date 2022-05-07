/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let loop = Math.floor(n/2)
  let x = 0
  let y = 0
  let offset = 1
  let arr = new Array(n).fill([]).map(() => new Array(n).fill(0))
  let num = 1
  while(loop--) {
    let i = x
    let j = y
    // 坚持左闭右开
    for (; j<y+n-offset; j++) {
      arr[i][j] = num++
    }
    for (; i<x+n-offset; i++) {
      arr[i][j] = num++
    }
    for (; j>y; j--) {
      arr[i][j] = num++
    }
    for (; i>x; i--) {
      arr[i][j] = num++
    }
    x++
    y++
    offset+=2
  }
  if (n%2) {
    arr[Math.floor(n/2)][Math.floor(n/2)] = num
  }
  return arr
};
