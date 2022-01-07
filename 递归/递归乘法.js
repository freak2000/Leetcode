var multiply = function(A, B) {
  if (B<2) {
    return A
  }
  return A+multiply(A, B-1)
};
