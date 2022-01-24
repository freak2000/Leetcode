// 双指针迭代法
var nextLargerNodes = function(head) {
  let res = []
  while (head) {
    let move = head
    while (move) {
      if (move.val > head.val) {
        res.push(move.val)
        break
      }
      move = move.next
      if (!move) {
        res.push(0)
        break
      }
    }
    head = head.next
  }
  return res
};

// 单调栈法，转化为贪心
var nextLargerNodes = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let stack = []
  let res = new Array(arr.length).fill(0)
  for (let i = 0; i<arr.length; i++) {
    while (stack.length && arr[stack[stack.length-1]] < arr[i]) {
      res[stack[stack.length-1]] = arr[i]
      stack.pop()
    }
    stack.push(i)
  }
  return res
};
