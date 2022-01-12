var deleteDuplicates = function(head) {
  let cur = head
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    if (!cur.next || cur.val !== cur.next.val) {
      cur = cur.next
    }
  }
  return head
};
