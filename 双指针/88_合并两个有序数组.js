// 用splice方法来将nums1的第m个元素以后的元素替换成nums2
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m,nums1.length-m,...nums2)
  nums1.sort((a,b) => a-b )
};

// 双指针法
var merge = function(nums1, m, nums2, n) {
  let indexs = m+n-1
  let index1 = m-1
  let index2 = n-1
  while (index1 >= 0 || index2 >= 0) {
    if (index1 === -1) {
      nums1[indexs--] = nums2[index2--]
    } else if (index2 === -1) {
      nums1[indexs--] = nums1[index1--]
    } else if (nums1[index1] >= nums2[index2]) {
      nums1[indexs--] = nums1[index1--]
    } else {
      nums1[indexs--] = nums2[index2--]
    }
  }
};

