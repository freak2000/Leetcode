// 后续遍历，二叉树最大深度的变形
var diameterOfBinaryTree = function(root) {
  let ans = 0
  let maxDept = root => {
    if (!root) {
      return 0
    }
    let leftNum = maxDept(root.left)
    let rightNum = maxDept(root.right)
    let sum = leftNum + rightNum
    ans = Math.max(ans, sum)
    return Math.max(leftNum, rightNum) + 1
  }
  maxDept(root)
  return ans
};
