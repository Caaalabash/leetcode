function findCenter(edges) {
  const arr = new Array(edges.length + 1).fill(0)
  for (const entry of edges) {
    arr[entry[0] - 1]++
    arr[entry[1] - 1]++
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === edges.length) {
      return i + 1
    }
  }
  return -1
}

// 由于题目给的限定条件非常充足，取前两个数组找交集就可以了
function findCenter(edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1]
}