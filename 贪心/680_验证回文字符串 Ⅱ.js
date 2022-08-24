/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let map = new Map()
    for (let item of s) {
        if (map.has(item)) {
            map.set(item, map.get(item)+1)
        } else {
            map.set(item, 1)
        }
    }
    console.log(map)
    let flag = 0
    for (let item of map) {
        console.log(item[1])
        if (item[1] % 2 === 1) {
            flag++
        }
    }
    return flag<=2
};
