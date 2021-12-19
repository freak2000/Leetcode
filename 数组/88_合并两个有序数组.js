var merge = function(nums1, m, nums2, n) {
  nums1.splice(m,nums1.length-m,...nums2)
  nums1.sort((a,b) => a-b )
};
// 用splice方法来将nums1的第m个元素以后的元素替换成nums2
