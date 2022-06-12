// dp[i][j] 代表移动到 grid[i][j] 的最小代价
// 状态转移方程：
// dp[i][j] = min(dp[i - 1][k] + moveCost[grid[i - 1][k]][j] + grid[i][j])
// 初始值：
// do[0][j] = grid[0][j]
// 结果：dp[m - 1][j]
// 空间复杂度O(mn)
// 时间复杂度O(mnn)
function minPathCost(grid, moveCost) {
    const m = grid.length
    const n = grid[0].length

    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(Number.MAX_VALUE)
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = grid[0][j]
    }

    for (let i = 1; i < m; i++) { // 当前行
        for (let j = 0; j < n; j++) { // 当前列
            for (let k = 0; k < n; k++) { // 上一列
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i - 1][k] + moveCost[ grid[i - 1][k] ][j] + grid[i][j]
                )
            }
        }
    }
    let result = Number.MAX_VALUE
    for (let i = 0; i < n; i++) {
        result = Math.min(result, dp[m - 1][i])
    }
    return result
}
