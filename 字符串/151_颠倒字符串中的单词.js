var reverseWords = function(s) {
  let arr = s.split(' ')
  arr = arr.filter(item => item !== '')
  arr = arr.reverse()
  return arr.join('')
};


var reverseWords = function(s) {
  return s.split(' ').filter(item => item !== '').reverse().join(' ')
};
