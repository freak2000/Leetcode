// 方法1，不用虚拟头结点
var removeElements1 = function(head, val) {
  if (!head) return head
  while (head && head.val === val) {
    head = head.next
  }
  let cur = head
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};

// 方法2，利用虚拟头结点
var removeElement2 = function(head, val) {
  let newHead = new ListNode(0, head)
  head = newHead
  while(head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return newHead.next
};

// 方法3，递归
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

