// 第一种的递归法，自定义一个递归的反转函数，并且调用，代码量较多，但是用时较少
var reversePrint = function(head) {
  let res = []
  let reverse = (head) => {
    if (!head) {
      return []
    }
    reverse(head.next)
    res.push(head.val)
    return res
  }
  return reverse(head)
};

// 第二种方法，也是递归，利用了js中的concat方法，代码量叫少，但是用时度多
var reversePrint = function(head) {
  return head ? reversePrint(head.next).concat(head.val) : []
};
