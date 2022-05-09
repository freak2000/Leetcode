// var reverseList = function(head) {
//   if (!head || !head.next) {
//     return head
//   }
//   let newHead = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return newHead
// };
// 递归法

var reverseList = function(head) {
  let cur = head
  let pre = null
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  console.log(pre.next+' ')
  return pre
};
// 迭代法

let head = new ListNode(9,new ListNode(3,new ListNode(5, 6)))

reverseList(head)

 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
