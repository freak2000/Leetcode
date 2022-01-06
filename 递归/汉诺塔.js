var hanota = function(A, B, C) {
  let move = (n, a, b, c) => {
    if (n === 1) {
      c.push(a.pop())
      return
    }
    move (n-1, a, c, b)
    move (1, a, b ,c)
    move (n-1, b, a, c)
  }
  move(A.length, A, B, C)
};
