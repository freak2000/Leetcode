/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let map = new Map()
  map.set(1, 'A')
  map.set(2, 'B')
  map.set(3, 'C')
  map.set(4, 'D')
  map.set(5, 'E')
  map.set(6, 'F')
  map.set(7, 'G')
  map.set(8, 'H')
  map.set(9, 'I')
  map.set(10, 'J')
  map.set(11, 'K')
  map.set(12, 'L')
  map.set(13, 'M')
  map.set(14, 'N')
  map.set(15, 'O')
  map.set(16, 'P')
  map.set(17, 'Q')
  map.set(18, 'R')
  map.set(19, 'S')
  map.set(20, 'T')
  map.set(21, 'U')
  map.set(22, 'V')
  map.set(23, 'W')
  map.set(24, 'X')
  map.set(25, 'Y')
  map.set(0, 'Z')
  let ans = ''
  while (columnNumber) {
    let temp = columnNumber%26
    ans = map.get(temp) + ans
    columnNumber -= temp === 0 ? 26:temp
    columnNumber/=26
  }
  return ans
};
