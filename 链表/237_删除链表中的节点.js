// 既然不能先删除自己，那就把自己整容成儿子，再假装自己就是儿子来养活孙子
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
