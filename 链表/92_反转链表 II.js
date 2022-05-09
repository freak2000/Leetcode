/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let newHead = new ListNode(0, head)
  let leftn = newHead
  let indexLeft = 0
  let rightn = newHead
  let indexRight = 0
  while(indexLeft < left-1) {
    indexLeft++
    leftn = leftn.next
  }
  while(indexRight < right) {
    indexRight++
    rightn = rightn.next
  }
  let ll = leftn.next
  let rr = rightn.next
  leftn.next = null
  rightn.next = null
  let ss = reverse(ll)
  leftn.next = ss
  ll.next = rr
  return newHead.next
};

let reverse = head => {
  let pre = null
  let cur = head
  while(cur) {
    let ne = cur.next
    cur.next = pre
    pre = cur
    cur = ne
  }
  return pre
}
