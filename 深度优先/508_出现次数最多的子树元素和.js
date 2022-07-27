/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 后序遍历
var findFrequentTreeSum = function(root) {
  let ans = []
  let map = new Map()
  let maxNum = 0
  let dfs = root => {
    if (!root) {
      return 0
    }
    let le = dfs(root.left)
    let ri = dfs(root.right)
    let ss = le+ri+root.val
    if (map.has(ss)) {
      map.set(ss, map.get(ss)+1)
    } else {
      map.set(ss, 1)
    }
    if (map.get(ss) > maxNum) {
      maxNum = map.get(ss)
      ans = []
      ans.push(ss)
    } else if (map.get(ss) === maxNum) {
      ans.push(ss)
    }
    return ss
  }
  dfs(root)
  return ans
};
