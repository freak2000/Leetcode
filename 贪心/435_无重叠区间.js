var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let i = 0
    let range = 0
    while (i < intervals.length) {
        let end = intervals[i][1]
        while (i<intervals.length && end > intervals[i][0]) {
            i++
        }
        range++
    }
    return intervals.length - range
};
