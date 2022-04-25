var stoneGame = function(piles) {
  let len = piles.length
  let memo = new Array(len).fill([]).map(() => new Array(len).fill(0))
  let dfs = (start, end) => {
    if (memo[start][end]) {
      return memo[start][end]
    }
    if (start === end) {
      memo[start][start] = piles[start]
    } else {
      memo[start][end] = Math.max(piles[start]-dfs(start+1, end), piles[end]-dfs(start, end-1))
    }
    return memo[start][end]
  }
  dfs(0, len-1)
  console.log(memo[0][len-1])
  return memo[0][len-1] > 0
};
