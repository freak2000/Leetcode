var sortedArrayToBST = function(nums) {
  let build = (le, ri) => {
    if (le > ri) {
      return null
    }
    let mid = Math.floor((ri - le)/2 + le)
    let node = new TreeNode(nums[mid])
    node.left = build(le, mid-1)
    node.right = build(mid+1, ri)
    return node
  }
  return build(0, nums.length-1)
};
