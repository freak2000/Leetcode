var isPalindrome = function(head) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  for(le=0, ri=arr.length-1; ri>le; le++, ri--) {
    if(arr[le] !== arr[ri]) {
      return 0
    }
  }
  return 1
};
