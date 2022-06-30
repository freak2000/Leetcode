/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let le = 0
  let ri = n
  while(le <= ri) {
    let mid = Math.floor(le + (ri - le)/2)
    if (!guess(mid)) {
      return mid
    } else if (guess(mid) === 1) {
      le = mid+1
    } else {
      ri = mid-1
    }
  }
};
