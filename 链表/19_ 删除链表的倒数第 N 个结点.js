// 计算链表长度并迭代
var removeNthFromEnd = function(head, n) {
  let count = head
  let len = 0
  while (count) {
    len++
    count = count.next
  }
  let newHead = new ListNode(0)
  newHead.next = head
  let cur = newHead
  let num = 0
  while (cur) {
    if (num === len-n)
    {
      cur.next = cur.next.next
      break
    }
    num++
    cur = cur.next
  }
  return newHead.next
};
