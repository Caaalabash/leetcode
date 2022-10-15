// 二分图性质：如果两个集合中的点分别染成黑色和白色，可以发现二分图中的每一条边都一定是连接一个黑色点和一个白色点
// 先DFS
const UNCOLORED = 0
const RED = 1
const GREEN = 2

function isBipartite(graph) {
    const n = graph.length
    const colors = new Array(n).fill(UNCOLORED)

    const dfs = (i, color) => {
        colors[i] = color
        const sibingsColor = color === RED ? GREEN : RED
    
        for (const sibling of graph[i]) {
            if (colors[sibling] === UNCOLORED) {
                if (!dfs(sibling, sibingsColor)) {
                    return false
                }
            } else if (colors[sibling] !== sibingsColor) {
                return false
            }
        }

        return true
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === UNCOLORED && !dfs(i, RED)) {
            return false
        }
    }

    return true
}

// 并查集
// 对于点i，将graph[i]进行union，如果union过程中发现属于同一个连通块，这不是二分图
function isBipartite(graph) {
    const n = graph.length
    const fa = new Array(n).fill(0).map((_, index) => index)
    const find = x => {
        if (fa[x] !== x) {
            fa[x] = find(fa[x])
        }
        return fa[x]
    }
    const union = (x, y) => {
        const fx = find(x)
        const fy = find(y)
        if (fx === fy) {
            return
        }
        fa[fx] = fy
    }
    for (let i = 0; i < n; i++) {
        if (graph[i].length === 0) {
            continue
        }
        // 将点i的所有可达点进行union
        for (let j = 1; j < graph[i].length; j++) {
            union(graph[i][0], graph[i][j])
        }
        // 判断 点i 和 可达点的代表元 是否在同一个连通块
        if (find(i) === find(graph[i][0])) {
            return false
        }
    }
    return true
}
