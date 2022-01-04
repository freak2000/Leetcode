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
