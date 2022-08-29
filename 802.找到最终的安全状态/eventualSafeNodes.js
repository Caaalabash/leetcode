// 根据题意：
// 节点没有出边（终端节点），那么该节点是安全的
// 若一个节点的出边相连的点都是安全的，那么该节点也是安全的

// 将图中所有边反向，得到一个反图，然后在反图上运行拓扑排序
// 关于变量命名: x -> y
// 时间复杂度： O(m+n) n节点数，m边数
// 空间复杂度：O(m+n) 需要m+n的空间记录反图
function eventualSafeNodes(graph) {
    // 反图
    const size = graph.length
    const inverseGraph = new Array(size).fill(0).map(() => [])
    const inDeg = new Array(size).fill(0)
    const queue = []
    const result = []

    for (let x = 0; x < size; x++) {
        for (const y of graph[x]) {
            inverseGraph[y].push(x) // 反图
        }
        inDeg[x] = graph[x].length // 维护入度
    }

    // 入度为0进队列
    for (let i = 0; i < size; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        const y = queue.shift()
        for (const x of inverseGraph[y]) {
            if (--inDeg[x] === 0) {
                queue.push(x)
            }
        }
    }

    for (let i = 0; i < size; i++) {
        if (inDeg[i] === 0) {
            result.push(i)
        }
    }

    return result
}