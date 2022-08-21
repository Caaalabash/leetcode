function maxAreaOfIsland(grid) {
    const m = grid.length
    const n = grid[0].length
    const dirs = [-1, 0, 1, 0, -1]
    let result = 0
    let tempResult = 0

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return
        grid[i][j] = 0
        tempResult++
        for (let k = 0; k < 4; k++) {
            dfs(i + dirs[k], j + dirs[k + 1])
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                tempResult = 0
                dfs(i, j)
                result = Math.max(result, tempResult)
            }
        }
    }
    return result
}
