var findSecondMinimumValue = function(root) {
  if (!root.left) {
    return -1
  }
  let leval = root.left.val
  let rival = root.right.val
  if (root.val === leval) {
    leval = findSecondMinimumValue(root.left)
  }
  if (root.val === rival) {
    rival = findSecondMinimumValue(root.right)
  }
  if (rival === -1) {
    return leval
  }
  if (leval === -1) {
    return rival
  }
  return Math.min(leval, rival)
};
