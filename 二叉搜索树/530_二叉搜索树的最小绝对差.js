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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let ans = Infinity
    let pre = null
    let cur = root
    let stack = []
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            let node = stack.pop()
            cur = node
            console.log(cur.val)
            if (pre && cur.val-pre.val < ans) {
                // console.log(cur.val, pre.val)
                ans = cur.val - pre.val
            }
            pre = cur
            cur = cur.right
        }
    }
    return ans
};