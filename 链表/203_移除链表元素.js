var removeElements = function(head, val) {
  if (!head) {
    return head
  } else if (head.val !== val) {
    head.next = removeElements(head.next, val)
    return head
  } else {
    head.next = removeElements(head.next, val)
    return head.next
  }
};

var removeElements = function(head, val) {
  let res = new ListNode(0)
  res.next = head
  let cur = res
  while(cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return res.next
};
