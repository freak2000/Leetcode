var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let ans = []
  let reserve = []
  reserve.push(root)
  while (reserve.length) {
    let len = reserve.length
    ans.push([])
    for (let i = 0; i<len; i++) {
      let node = reserve.shift()
      ans[ans.length-1].push(node.val)
      if (node.left) {
        reserve.push(node.left)
      }
      if (node.right) {
        reserve.push(node.right)
      }
    }
  }
  return ans
};
