var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1])
    let ans = 0
    let i = 0
    while (i<points.length){
        let j = points[i][1]
        while (i<points.length && points[i][0] <= j) {
            i++
        }
        ans++
    }
    return ans
};
