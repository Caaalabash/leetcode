// 到达所有点所需要的最小点集 = 入度为 0 的点
function findSmallestSetOfVertices(n, edges) {
    const result = []
    const appeared = new Set(edges.map(i => i[1]))
    for (let i = 0; i < n; i++) {
        if (!appeared.has(i)) {
            result.push(i)
        }
    }
    return result
}