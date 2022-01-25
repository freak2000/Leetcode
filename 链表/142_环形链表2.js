var detectCycle = function(head) {
  if (!head || !head.next) {
    return null
  }
  let slow = head
  let fast = head
  while (fast) {
    slow = slow.next
    if (fast.next) {
      fast = fast.next.next
    } else {
      return null
    }
    if (fast === slow) {
      let cur = head
      while (cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return slow
    }
  }
  return null
};
