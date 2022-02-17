var findLength = function(nums1, nums2) {
  let ans = 0
  let m = nums1.length, n = nums2.length
  let record = new Array(m+2).fill(0).map(() => new Array(n+2).fill(0))
  for (let i = m-1; i>=0; i--){
    for (let j = n-1; j>=0; j--) {
      record[i][j] = nums1[i] === nums2[j] ?  record[i+1][j+1] + 1 : 0
      ans = Math.max(ans, record[i][j])
    }
  }
  return ans
};
