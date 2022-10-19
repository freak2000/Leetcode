/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let graph = new Array(n+1).fill().map(() => [])
  for (let item of times) {
    graph[item[0]][item[1]] = item[2]
  }
  let distance = new Array(n+1).fill(Infinity)
  distance[k] = 0
  let used = new Array(n+1).fill(false)

  for (let i = 0; i<=n; i++) {
    let x = 0
    for (let y = 1; y<=n; y++) {
      if (!used[y] && (!x || distance[y] < distance[x])) {
        x = y
      }
    }
    if (!x) break
    used[x] = true
    for (let y = 1; y<=n; y++) {
      if (graph[x][y] >= 0) {
        distance[y] = Math.min(distance[y], distance[x]+graph[x][y])
      }
    }
  }
  distance = distance.slice(1, n+1)
  let ans = Math.max(...distance)
  return ans === Infinity ? -1 : ans
};
