// 递归法
var getDecimalValue = function(head) {
  let double = 1
  let res = 0
  let getVal = head => {
    if (!head) {
      return 0
    }
    res = getVal(head.next) + double*head.val
    double*=2
    return res
  }
  return getVal(head)
};

// 迭代法
var getDecimalValue = function(head) {
  let res = 0
  let cur = head
  while(cur) {
    res = res*2 + cur.val
    cur = cur.next
  }
  return res
};
