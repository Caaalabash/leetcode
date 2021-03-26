// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 每次只能向下或者向右移动一步。

// 状态：dp[i][j]代表完成(i+1) * (j+1)的网格的最小路径和
// 状态转移方程：dp[i][j] = Min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
// 初始值：
//   对于第一行：dp[0][j] = dp[0][j-1] + grid[0][j]
//   对于第一列：dp[i][0] = dp[i-1][0] + grid[i][0]
//   dp[0][0] = grid[0][0]
// 结果：dp[grid.length-1][grid[0].length-1]
function minPathSum(grid) {
    const dp = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => Number.MAX_VALUE))
    dp[0][0] = grid[0][0]
    // 第一列
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }
    // 第一行
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j]
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
        }
    }
    return dp[grid.length-1][grid[0].length-1]
}

// 状态压缩（投影）技巧：将dp[i][j]的状态数组压缩为dp[j]，空间复杂度从 O(N^2) 降低到 O(N)。
// 特征：状态转移方程需要的都是dp[i][j]相邻的状态
// 本题中需要dp[i][j-1]和dp[i-1][j]两个相邻状态
// (i-1, j-1) (i, j-1)
// (i, j-1)   (i, j)
// 在遍历过程中，
function minPathSum(grid) {
    const dp = Array.from({ length: grid.length }, () => Number.MAX_VALUE)
    dp[0] = grid[0][0]
    // 第一行
    for (let j = 1; j < grid[0].length; j++) {
        dp[j] = dp[j-1] + grid[0][j]
    }
    for (let i = 1; i < grid.length; i++) {
        dp[0] += grid[i][0]
        for (let j = 1; j < grid[0].length; j++) {
            dp[j] = Math.min(dp[j-1], dp[j]) + grid[i][j]
        }
    }
    return dp[grid[0].length-1]
}