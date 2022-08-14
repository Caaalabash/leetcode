// 利用DFS/BFS在图中判圈
// 核心思路是：在加入一条边前，搜索在当前图上，能否从u搜索到v，如果可以，说明已经连通，即找到环
function findRedundantConnection(edges) {
    const n = edges.length
    const graph = new Array(n).fill(0).map(() => [])
    let visited = {}
    let hasCycle = false

    const dfs = (u, v) => {
        visited[u] = true
        for (const j of graph[u]) {
            if (j === v) {
                hasCycle = true
                return
            }
            if (!visited[j]) {
                dfs(j, v)
            }
        }
    }
    for (const edge of edges) {
        const u = edge[0] - 1
        const v = edge[1] - 1
        dfs(u, v)
        if (hasCycle) return edge
        visited = {}
        graph[u].push(v)
        graph[v].push(u)
    }
    return []
}

function findRedundantConnection(edges) {
    const n = edges.length
    const graph = new Array(n).fill(0).map(() => [])
    let visited = {}
    let hasCycle = false

    const bfs = (u, v) => {
        const q = [u]
        while (q.length) {
            const last = q.pop()
            visited[last] = true
            for (const j of graph[last]) {
                if (j === v) {
                    hasCycle = true
                    return
                }
                if (!visited[j]) {
                    q.push(j)
                }
            }
        }
    }

    for (const edge of edges) {
        const u = edge[0] - 1
        const v = edge[1] - 1
        bfs(u, v) // 在准备加入u,v前，dfs or bfs搜索图中u是否已经与v连通
        if (hasCycle) return edge
        visited = {} // 每次搜索后要重置visited
        graph[u].push(v)
        graph[v].push(u)
    }
    return []
}