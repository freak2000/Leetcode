var uniquePathsWithObstacles = function(obstacleGrid) {
    let ans = new Array(obstacleGrid.length).fill(7).map(() => new Array(obstacleGrid[0].length).fill(0))
    for (let i = 0; i<obstacleGrid[0].length && !obstacleGrid[0][i]; i++) {
        ans[0][i] = 1
    }
    for (let j = 0; j<obstacleGrid.length && !obstacleGrid[j][0]; j++) {
        ans[j][0] = 1
    }
    for (let i = 1; i<obstacleGrid.length; i++) {
        for(let j = 1; j<obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                continue
            }
            ans[i][j] = ans[i-1][j] + ans[i][j-1]
        }
    }
    return ans[obstacleGrid.length-1][obstacleGrid[0].length-1]
};
