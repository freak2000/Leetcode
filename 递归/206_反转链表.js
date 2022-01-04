var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }
  let newHead = new reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};
// 递归法

var reverseList = function(head) {
  let cur = head
  let pre = null
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
// 迭代法
