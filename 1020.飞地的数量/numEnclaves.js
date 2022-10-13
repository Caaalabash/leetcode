function numEnclaves(grid) {
    const m = grid.length
    const n = grid[0].length
    // 开数组时，多1个，让边缘的陆地与 mn 这个虚拟点形成一个连通块
    const fa = new Array(m * n + 1).fill(0).map((_, index) => index)
    // 最简单的并查集实现
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
    let result = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                continue
            }
            // 统计所以陆地数量
            result++
            // 边界点，额外和m*n进行union
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                union(m * n, i * n + j)
            }
            // 检查下方
            if (i < m - 1 && grid[i + 1][j] === 1) {
                union(i * n + j, (i + 1) * n + j)
            }
            // 检查右方
            if (j < n - 1 && grid[i][j + 1] === 1) {
                union(i * n + j, i * n + j + 1)
            }
        }
    }
    // 找到节点mn所在连通块的代表元，遍历grid，矩阵中代表元为 border 的说明不是飞地
    const border = find(m * n)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                continue
            }
            if (find(i * n + j) === border) {
                result--
            }
        }
    }
    return result
}