/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    let str = String(n).split('').map(v=> +v)
    let index = Infinity
    for (let i = str.length-1; i>0; i--) {
        if (str[i] < str[i-1]) {
            index = i
            str[i-1] = str[i-1] - 1
        }
    }
    for (let i = index; i<str.length; i++) {
        str[i] = '9'
    }
    return +str.join('')
};
