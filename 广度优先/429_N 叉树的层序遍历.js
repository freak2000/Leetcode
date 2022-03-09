var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let ans = [], reserve = []
  reserve.push(root)
  while (reserve.length) {
    let len = reserve.length
    ans.push([])
    for (let i = 0; i<len; i++) {
      let node = reserve.shift()
      ans[ans.length-1].push(node.val)
      reserve.push(...node.children)
    }
  }
  return ans
};
