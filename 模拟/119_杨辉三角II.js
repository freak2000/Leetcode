/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let ans = []
  for(let i=0; i<=rowIndex; i++) {
    let cur = new Array(i+1).fill(1)
    for(let j = 1;j<=i-1; j++) {
      cur[j] = ans[j-1]+ans[j]
    }
    ans = cur
  }
  return ans
};
