// 使用后序遍历和哈希表，判断是否有与当前二叉树重复的
var findDuplicateSubtrees = function(root) {
  let ans = []
  let map = new Map()
  let lrd = root => {
    if (!root) {
      return '*'
    }
    let left = lrd(root.left)
    let right = lrd(root.right)
    // 序列化二叉树
    let str = left + '&' + right + '&' + root.val
    if (map.get(str) === 1) {
      map.set(str, 2)
      ans.push(root)
    } else {
      map.set(str, map.get(str) ? map.get(str)+1 : 1)
    }
    return str
  }
  lrd(root)
  return ans
};
