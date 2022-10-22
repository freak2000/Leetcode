/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase()
  s = s.replace(/[^a-z0-9]/g, '')
  let ri = s.length-1
  let le = 0
  while (le <= ri) {
    if (s[le] !== s[ri]) {
      return false
    }
    le++
    ri--
  }
  return true
};
