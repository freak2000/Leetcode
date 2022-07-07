var reverseString = function(s) {
  let len = s.length
  let le = 0
  let ri = len-1
  while (le<ri) {
    [s[le], s[ri]] = [s[ri], s[le]]
    ri--
    le++
  }
  return s
};
