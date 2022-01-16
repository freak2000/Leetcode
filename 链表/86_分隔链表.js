var partition = function(head, x) {
  // 构建以比x的值要小的节点组成的链表
  let sl = new ListNode(0)
  let shead = sl
  // 构建以比x的值要大的节点组成的链表
  let bl = new ListNode(0)
  let bhead = bl
  while(head) {
    if (head.val < x) {
      sl.next = head
      sl =sl.next
    } else {
      bl.next = head
      bl = bl.next
    }
    head = head.next
  }
  sl.next = bhead.next
  bl.next = null
  return shead.next
};
