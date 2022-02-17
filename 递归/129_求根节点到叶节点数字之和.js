var sumNumbers = function(root) {
  let sum = 0
  let tem = 0
  let add = root => {
    if (!root) {
      return
    }
    tem = tem*10+root.val
    if (!root.left && !root.right) {
      sum+=tem
    }
    add(root.left)
    add (root.right)
    tem = (tem - root.val)/10
  }
  add(root)
  return sum
};
