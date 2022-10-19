/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let flag = 0
  let ans = ''
  let aindex = a.length - 1
  let bindex = b.length - 1
  while (aindex>=0 || bindex>=0) {
    let vala = +a[aindex] || 0
    let valb = +b[bindex] || 0
    ans = (flag ^ vala ^ valb) + ans
    flag = valb+vala+flag > 1 ? 1:0
    aindex--
    bindex--
  }
  if (flag) ans = '1' + ans
  return ans
};
