var buildTree = function(inorder, postorder) {
  let build = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
    if (postStart > postEnd) {
      return null
    }
    let val = postorder[postEnd]
    let index = map.get(val)
    let node = new TreeNode(val)
    node.left = build(inorder, inStart, index-1, postorder, postStart, index-inStart+postStart-1)
    node.right = build(inorder, index+1, inEnd, postorder, index-inStart+postStart, postEnd-1)
    return node
  }
  let map = new Map()
  for (let i = 0; i<inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return build(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1)
};
