var binaryTreePaths = function(root) {
  if (!root) return []
  let set = []
  let str = []
  let dfs = root => {
    if (!root) return
    if (!root.left && !root.right) {
      str.push(root.val)
      let ss = str.join('->')
      set.push(ss)
      str.pop()
      return
    }
    str.push(root.val)
    dfs(root.left)
    dfs(root.right)
    str.pop()
    return
  }
  dfs(root)
  return set
};
