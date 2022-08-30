function getAncestors(n, edges) {
    const graph = new Array(n).fill(0).map(() => [])
    const inDeg = new Array(n).fill(0)
    const result = new Array(n).fill(0).map(() => new Set())
    const queue = []

    // 邻接表构图
    for (const edge of edges) {
        graph[edge[0]].push(edge[1])
        inDeg[edge[1]]++
    }
    // 入度0入队
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        const parent = queue.shift()
        for (const child of graph[parent]) {
            result[parent].forEach(val => result[child].add(val))
            result[child].add(parent)
            if (--inDeg[child] === 0) {
                queue.push(child)
            }
        }
    }
    return result.map(set => [...set].sort((a, b) => a < b ? -1 : 1))
}