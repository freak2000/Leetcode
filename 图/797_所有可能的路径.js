/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let ans = []
  let dfs = (index) => {
    if (index === graph.length-1) {
      ans.push([...stack])
    }
    for (let item of graph[index]) {
      stack.push(item)
      dfs(item)
      stack.pop()
    }
  }
  let stack = []
  stack.push(0)
  dfs(0)
  return ans
};
