// 递归法
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  let newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};

// 迭代法
var swapPairs = function(head) {
  let front = new ListNode(0)
  front.next = head
  let temp = front
  while (temp.next && temp.next.next) {
    let slow = temp.next
    let fast = temp.next.next
    temp.next = fast
    slow.next = fast.next
    fast.next = slow
    temp = slow
  }
  return front.next
};
