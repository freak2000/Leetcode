// 顺序迭代
var getKthFromEnd = function(head, k) {
  let count = head
  let num = 0
  while (count) {
    num++
    count = count.next
  }
  while (num !== k) {
    head = head.next
    num--
  }
  return head
};
