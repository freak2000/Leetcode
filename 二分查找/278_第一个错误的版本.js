var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let le = 0
    let ri = n
    let ans = 0
    while (le <= ri) {
      let mid = Math.floor(le + (ri - le)/2)
      if (isBadVersion(mid)) {
        ans = mid
        ri = mid-1
      } else {
        le = mid+1
      }
    }
    return ans
  };
};
