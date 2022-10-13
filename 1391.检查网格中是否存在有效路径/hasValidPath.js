// grid[i][j]能够与grid[i-1][j]建立连接关系的映射表
const topMap = new Map([
    [2, new Set([2, 3, 4])],
    [5, new Set([2, 3, 4])],
    [6, new Set([2, 3, 4])],
])
// grid[i][j]能够与grid[i][j-1]建立连接关系的映射表
const leftMap = new Map([
    [1, new Set([1, 4, 6])],
    [3, new Set([1, 4, 6])],
    [5, new Set([1, 4, 6])],
])
// 通过并查集判断 grid[0][0] 与 grid[m-1][n-1] 是否处于同一个连通块
function hasValidPath(grid) {
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
        const fx = find(x)
        const fy = find(y)
        if (fx === fy) {
            return
        }
        fa[fx] = fy
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 检查上方
            if (i > 0 && topMap.has(grid[i][j]) && topMap.get(grid[i][j]).has(grid[i - 1][j])) {
                union(i * n + j, (i - 1) * n + j)
            }
            // 检查左侧
            if (j > 0 && leftMap.has(grid[i][j]) && leftMap.get(grid[i][j]).has(grid[i][j - 1])) {
                union(i * n + j, i * n + j - 1)
            }
        }
    }
    return find(0) === find(m * n - 1)
}