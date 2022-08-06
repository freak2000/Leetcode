var lemonadeChange = function(bills) {
    let num5 = 0
    let num10 = 0
    for (let item of bills) {
        if (item === 5) {
            num5++
        } else if (item === 10) {
            num5--
            num10++
        } else {
            if (num10) {
                num10--
                num5--
            } else {
                num5-=3
            }
        }
        if (num5 < 0 || num10 < 0) {
            return false
        }
    }
    return true
};
