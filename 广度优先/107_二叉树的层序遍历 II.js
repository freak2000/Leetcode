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
var levelOrderBottom = function(root) {
  let ans = []
  let queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let temp = []
    let len = queue.length
    for (let i = 0; i<len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    ans.push(temp)
  }
  return ans.reverse()
};
