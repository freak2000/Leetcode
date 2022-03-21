/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let left = 0
  let right = nums.length
  let fun = (left, right, nums) => {
    if (left === right) {
      return null
    }
    let max = -Infinity
    let pos = -1
    for (let i = left; i < right; i++) {
      if (nums[i] > max) {
        max = nums[i]
        pos = i
      }
    }
    let node = new TreeNode(max)
    node.left = fun(left, pos, nums)
    node.right = fun(pos+1, right, nums)
    return node
  }
  return fun(left, right, nums)
};
