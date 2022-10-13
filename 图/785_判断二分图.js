/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  let color = new Array(graph.length).fill(false)
  let visited = new Array(graph.length).fill(false)
  let ans = true
  let dfs = index => {
    if (visited[index]) return
    visited[index] = true
    for (let item of graph[index]) {
      if (!visited[item]) {
        color[item] = !color[index]
        dfs(item)
      } else {
        if (color[index] === color[item]) {
          ans = false
          return
        }
      }
    }
  }
  for (let i = 0; i<graph.length; i++) {
    dfs(i)
  }
  return ans
};
debugger
console.log(isBipartite([[1,2,3],[0,2],[1,3],[0,2]]))

