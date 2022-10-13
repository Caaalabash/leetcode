// 在二维数组中检测是否存在相同值形成的环
// 常用的判断无向图中是否有环的方法有 DFS、BFS，此处可以用并查集的方式判断无向图中是否有环：
// 进行union操作时，如果发现以及属于同一连通块，则说明有环
function containsCycle(grid) {
    const m = grid.length
    const n = grid[0].length
    const fa = new Array(m * n).fill(0).map((_, index) => index)
    const find = x => {
        if (fa[x] !== x) {
            fa[x] = find(fa[x])
        }
        return fa[x]
    }
    const union = (x, y) => {
        const px = find(x)
        const py = find(y)
        if (px === py) {
            return true
        }
        fa[px] = py
        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 检查与上方的连接
            if (i > 0 && grid[i][j] === grid[i - 1][j]) {
                if (union(i * n + j, (i - 1) * n + j)) {
                    return true
                }
            }
            // 检查与左侧的连接
            if (j > 0 && grid[i][j] === grid[i][j - 1]) {
                if (union(i * n + j, i * n + j - 1)) {
                    return true
                }
            }
        }
    }
    return false
}