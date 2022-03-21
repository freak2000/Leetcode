var connect = function(root) {
  if (!root) {
    return root
  }
  let connectNodes = (leftNode, rightNode) => {
    if (!leftNode) {
      return
    }
    leftNode.next = rightNode
    connectNodes(leftNode.left, leftNode.right)
    connectNodes(rightNode.left, rightNode.right)
    connectNodes(leftNode.right, rightNode.left)
  }
  connectNodes(root.left, root.right)
  return root
};
