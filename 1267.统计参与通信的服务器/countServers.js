function countServers(grid) {
    const m = grid.length
    const n = grid[0].length
    const fa = new Array(m * n).fill(0).map((_, index) => index)
    const size = new Array(m * n).fill(1)
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
        if (size[fx] > size[fy]) {
            fa[fy] = fx
            size[fx] += size[fy]
            size[fy] = 0
        } else {
            fa[fx] = fy
            size[fy] += size[fx]
            size[fx] = 0
        }
    }
    // 同一行or同一列就可以通信
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue
            // union行
            for (let k = 0; k < m; k++) {
                if (k !== i && grid[k][j] === 1) {
                    union(i * n + j, k * n + j)
                }
            }
            // union列
            for (let k = 0; k < n; k++) {
                if (k !== j && grid[i][k] === 1) {
                    union(i * n + j, i * n + k)
                }
            }
        }
    }
    return size.reduce((arr, val) => arr += val > 1 ? val : 0, 0)
}