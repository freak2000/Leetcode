var searchBST = function(root, val) {
  if (!root) {
    return root
  }
  if (root.val > val) {
    return searchBST(root.left, val)
  } else if(root.val <val){
    return searchBST(root.right, val)
  } else {
    return root
  }
};
