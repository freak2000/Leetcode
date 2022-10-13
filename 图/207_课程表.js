/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => [])
  let visited = new Array(numCourses).fill(0)
  let path = new Array(numCourses).fill(0)
  let hasCircle = false
  let dfs = (index) => {
    if (path[index]) {
      hasCircle = true
    }
    if (visited[index] || hasCircle) {
      return
    }
    visited[index] = 1
    path[index] = 1
    for (let item of graph[index]) {
      dfs(item)
    }
    path[index] = 0
  }
  for (let item of prerequisites) {
    graph[item[0]].push(item[1])
  }
  for (let i = 0; i<numCourses; i++) {
    dfs(i)
    if (hasCircle) {
      return false
    }
  }
  return true
};
console.log(canFinish(2, [[1,0], [0,1]]))
