var getIntersectionNode = function(headA, headB) {
  let newa = headA
  let newb = headB
  while(newa) {
    while(newb) {
      if (newb === newa) {
        return newa
      }
      newb = newb.next
    }
    newa = newa.next
    newb = headB
  }
  return null
};

var getIntersectionNode = function(headA, headB) {
  let set = new Set()
  let newa = headA
  let newb = headB
  while (newa) {
    set.add(newa)
    newa = newa.next
  }
  while (newb) {
    if (set.has(newb)) {
      return newb
    }
    newb = newb.next
  }
  return null
};
