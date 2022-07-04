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


// 双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lena = 0
  let lenb = 0
  let cura = headA
  let curb = headB
  while (cura) {
    lena++
    cura = cura.next
  }
  while(curb) {
    lenb++
    curb = curb.next
  }
  if (lena > lenb) {
    [headB, headA] = [headA, headB]
  }
  let gap = Math.abs(lena - lenb)
  curb = headB
  while (gap--) {
    curb = curb.next
  }
  cura = headA
  while (curb && cura) {
    if (cura === curb) {
      return curb
    }
    curb = curb.next
    cura = cura.next
  }
  return null
};
