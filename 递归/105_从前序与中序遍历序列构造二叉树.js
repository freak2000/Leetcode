var buildTree = function(preorder, inorder) {
  let build = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {
    if (preEnd < preStart) {
      return null
    }
    let val = preorder[preStart]
    let index = map.get(preorder[preStart])
    let node = new TreeNode(val)
    node.left = build(preorder, preStart+1, index-inStart+preStart, inorder, inStart, index-1)
    node.right = build(preorder, index-inStart+preStart+1, preEnd, inorder, index+1, inEnd)
    return node
  }
  let map = new Map()
  for (let i = 0; i<inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return build(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1)
};
