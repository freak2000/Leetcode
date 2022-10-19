var titleToNumber = function(columnTitle) {
  let ans = 0
  for (let i = 0; i<columnTitle.length; i++) {
    ans = ans*26 + (1+columnTitle[i].charCodeAt() - 'A'.charCodeAt())
  }
  return ans
};
