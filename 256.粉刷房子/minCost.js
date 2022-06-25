// 相邻的两个房子颜色不能相同，costs顺序红绿蓝

// dp[i][j] = 将第 i 个房子粉刷成 j 色的最小花费
// dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + cost[i][0]
// dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + cost[i][1]
// dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + cost[i][2]
function minCost(cost) {
    const n = cost.length
    const dp = new Array(n).fill(0).map(() => new Array(3).fill(0))
    dp[0] = cost[0]

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0]
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1]
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2]
    }

    return Math.min(...dp[n - 1])
}

// 空间优化
function minCost(cost) {
    const n = cost.length
    let a = cost[0][0]
    let b = cost[0][1]
    let c = cost[0][2]

    for (let i = 1; i < n; i++) {
        [a, b, c] = [Math.min(b, c) + cost[i][0], Math.min(a, c) + cost[i][1], Math.min(a, b) + cost[i][2]]
    }
    return Math.min(a, b, c)
}