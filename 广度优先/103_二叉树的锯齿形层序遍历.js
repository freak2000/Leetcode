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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }
  let ans = [], res = []
  res.push(root)
  let flag = 1
  while (res.length) {
    let len = res.length
    ans.push([])
    for (let i = 0; i<len; i++) {
      let node = res.shift()
      ans[ans.length-1].push(node.val)
      node.left && res.push(node.left)
      node.right && res.push(node.right)
    }
    flag === -1 && ans[ans.length-1].reverse()
    flag*=-1
  }
  return ans
};
