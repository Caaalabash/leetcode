function closedIsland(grid) {
    const m = grid.length
    const n = grid[0].length
    const fa = new Array(m * n + 1).fill(0).map((_, index) => index)
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
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                continue
            }
            // 边界上的陆地与 mn 进行 union
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                union(i * n + j, m * n)
            }
            if (i < m - 1 && grid[i + 1][j] === 0) {
                union(i * n + j, (i + 1) * n + j)
            }
            if (j < n - 1 && grid[i][j + 1] === 0) {
                union(i * n + j, i * n + j + 1)
            }
        }
    }
    const set = new Set()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                continue
            }
            set.add(find(i * n + j))
        }
    }
    set.delete(find(m * n)) 
    return set.size
}
