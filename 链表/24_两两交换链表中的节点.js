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
  let newHead = new ListNode(0, head)
  let cur = newHead
  while(cur.next && cur.next.next) {
    let node1 = cur.next
    let node2 = cur.next.next
    let node3 = cur.next.next.next
    node1.next = node3
    node2.next = node1
    cur.next = node2
    cur = node1
  }
  return newHead.next
};
