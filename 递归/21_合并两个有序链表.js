var mergeTwoLists1 = function(list1, list2) {
  if(!list2) {
    return list1
  }
  else if (!list1) {
    return list2
  }
  else if (list2.val>list1.val) {
    list1.next = mergeTwoLists1(list1.next, list2)
    return list1
  }
  else {
    list2.next = mergeTwoLists1(list1, list2.next)
    return list2
  }
};

// 递归法

 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }

var mergeTwoLists2 = function(list1, list2) {
    let ans = new ListNode(0)
    let newHead = ans
    while (list1 && list2) {
        if (list1.val>list2.val) {
            newHead.next = list2
            list2 = list2.next

        } else {
            newHead.next = list1
            list1 = list1.next
        }
        newHead = newHead.next
    }
    newHead.next = list1===null? list2:list1
    return ans.next
};

// 迭代法
