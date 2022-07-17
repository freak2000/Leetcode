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

var connect = function(root) {
  let queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i<len; i++) {
      let node = queue.shift()
      if (i<len-1) {
        node.next = queue[0]
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return root
};
