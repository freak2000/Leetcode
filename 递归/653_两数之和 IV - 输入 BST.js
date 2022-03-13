var findTarget = function(root, k) {
  // 建立一个哈希表，用来存储已经遍历过的数字
  let map = new Map()
  // 深度优先遍历二叉树
  let dfs = root => {
    if (!root) {
      return false
    }
    if (map.has(k-root.val)) return true
    // 把遍历过的数字记录起来
    map.set(root.val, 1)
    return dfs(root.left) || dfs(root.right)
  }
  return dfs(root)
};
