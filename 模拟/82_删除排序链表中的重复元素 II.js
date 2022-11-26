/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let set = new Set()
  let temp = head
  while (temp) {
    if (temp.next && temp.val === temp.next.val) {
      set.add(temp.val)
    }
    temp = temp.next
  }
  let now = new ListNode(0, head)
  while (now.next) {
    if (set.has(now.next.val)) {
      if (now.next === head) {
        head = head.next
      }
      now.next = now.next.next
    } else {
      now = now.next
    }
  }
  return head
};
