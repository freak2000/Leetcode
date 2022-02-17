var kthSmallest = function(root, k) {
  let num = []
  let get = root => {
    if (!root) {
      return
    }
    get(root.left)
    num.push(root.val)
    get(root.right)
  }
  get(root)
  num.sort(function(a,b){return a-b})
  return num[k-1]
};
