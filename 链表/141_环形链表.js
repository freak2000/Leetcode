// 用哈希表
var hasCycle = function(head) {
  if (!head) {
    return false
  }
  let cur = head.next
  // 创建map数据结构
  let map = new Map()
  let flag = 1
  while (cur) {
    // 在map里面查到，找到就返回，没有找到就记录入map内
    if (!map.get(cur)) {
      map.set(cur, flag++)
      cur = cur.next
    } else return map.get(cur);
  }
  return false
};

// 快慢指针
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head
  let fast = head.next
  while (fast !== slow) {
    if (!fast || !fast.next) {
      return 0
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
};
