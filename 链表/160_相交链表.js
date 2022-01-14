// 哈希表法
var getIntersectionNode = function(headA, headB) {
  let map = new Map()
  let curA = headA
  let curB = headB
  while (curA) {
    map.set(curA, 1)
    curA = curA.next
  }
  while (curB) {
    if (map.get(curB)) {
      return curB
    } else {
      curB = curB.next
    }
  }
  return null
};

// 双指针法
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let curA = headA, curB = headB
  while (curB !== curA) {
    curA = curA === null ? headB:curA.next
    curB = curB === null ? headA:curB.next
  }
  return curB
};
