var largestValues = function(root) {
  let ans = []
  let queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let len = queue.length
    let max = -Infinity
    for (let i = 0; i<len; i++) {
      let node = queue.shift()
      max = Math.max(max, node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    ans.push(max)
  }
  return ans
};
