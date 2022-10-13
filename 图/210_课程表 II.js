/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let ans = []
  let visited = new Array(numCourses).fill(0)
  let path = new Array(numCourses).fill(0)
  let graph = new Array(numCourses).fill().map(() => [])
  let hasCircle = false
  let dfs = index => {
    if (path[index]) {
      hasCircle = true
    }
    if (visited[index] || hasCircle) {
      return
    }
    path[index] = 1
    visited[index] = 1
    for (let item of graph[index]) {
      dfs(item)
    }
    ans.push(index)
    path[index] = 0
  }
  for (let item of prerequisites) {
    graph[item[1]].push(item[0])
  }
  for (let i = 0; i<numCourses; i++) {
    dfs(i)
    if (hasCircle) {
      return []
    }
  }
  ans.reverse()
  return ans
};
