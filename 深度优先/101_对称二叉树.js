var isSymmetric = function(root) {
  let compare = (le, ri) => {
    if (!le || !ri) {
      return ri === le
    }
    return ri.val === le.val && compare(le.left, ri.right) && compare(le.right, ri.left)
  }
  return compare(root.left, root.right)
};
