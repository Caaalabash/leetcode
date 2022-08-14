// DFS
function countComponents(n, edges) {
    // 邻接表构建无向图
    const graph = new Array(n).fill(0).map(() => [])
    for (const edge of edges) {
        graph[edge[0]].push(edge[1])
        graph[edge[1]].push(edge[0])
    }
    // DFS
    const visited = {}
    const dfs = i => {
        visited[i] = true
        for (const j of graph[i]) {
            if (!visited[j]) {
                dfs(j)
            }
        }
    }
    // 遍历
    let result = 0
    for (let i = 0; i < graph.length; i++) {
        if (visited[i]) continue
        dfs(i)
        result++
    }
    return result
}

// BFS
function countComponents(n, edges) {
    // 邻接表构建无向图
    const graph = new Array(n).fill(0).map(() => [])
    for (const edge of edges) {
        graph[edge[0]].push(edge[1])
        graph[edge[1]].push(edge[0])
    }
    // BFS
    const visited = {}
    const bfs = i => {
        visited[i] = true
        const q = [i]
        while (q.length) {
            const list = graph[q.pop()]
            for (const j of list) {
                if (!visited[j]) {
                    q.push(j)
                    visited[j] = true
                }
            }
        }
    }
    // 遍历
    let result = 0
    for (let i = 0; i < graph.length; i++) {
        if (visited[i]) continue
        bfs(i)
        result++
    }
    return result
}

