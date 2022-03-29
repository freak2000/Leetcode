var isCousins = function(root, x, y) {
  let xp = null
  let yp = null
  let xde = 0
  let yde = 0
  if (x === root.val || y ===root.val) {
    return false
  }
  let dfs = (root, parent, dept) => {
    if (!root) {
      return
    }
    if (x === root.val) {
      xp = parent
      xde = dept
    }
    if (y === root.val) {
      yp = parent
      yde = dept
    }
    dfs(root.left, root, dept+1)
    dfs(root.right, root, dept+1)
  }
  dfs(root, null, 0)
  if (xde === yde && xp !== yp) {
    return true
  }
  return false
};
