// 遍历每个格子，以这个格子为起点，上下左右四个方向前进，如果满足条件可以继续前进
// 设 dp[i][j] 为 grid[i][j] 为起点的路径数量
function countPaths(grid) {
    const MOD = 1e9 + 7
    const dirs = [-1, 0, 1, 0, -1]
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(-1))

    const dfs = (i, j) => {
        if (dp[i][j] !== -1) return dp[i][j]

        let res = 1
        for (let k = 1; k < 5; k++) {
            const di = i + dirs[k]
            const dj = j + dirs[k - 1]
            if (0 <= di && di < m && 0 <= dj && dj < n && grid[di][dj] > grid[i][j]) {
                res = (res + dfs(di, dj)) % MOD
            }
        }

        return dp[i][j] = res
    }

    let result = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result = (result + dfs(i, j)) % MOD
        }
    }

    return result
}