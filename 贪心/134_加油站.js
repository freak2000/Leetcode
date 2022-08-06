var canCompleteCircuit = function(gas, cost) {
    let cur = 0
    let total = 0
    let j = 0
    for (let i = 0; i<gas.length; i++) {
        cur = cur + gas[i] - cost[i]
        total = total + gas[i] - cost[i]
        if (cur < 0) {
            j = i+1
            cur = 0
        }
    }
    if (total < 0) {
        return -1
    }
    return j
};
