// 冥冥之中，感觉它是0-1背包问题
// 设dp[i][j][k] = 参与前 [0, i] 项工作，投入的人力不超过 j，获利为 k 的方案数量
// 初始值：dp[i][j][0] = 1 ==> 啥也不干，获利为0，方案数量为1
// 状态转移方程：
//   对于第i个项目，干他：dp[i][j][k] = dp[i-1][j-group[i]][k-profit[i]]
//   对于第i个项目，不干他：dp[i][j][k] = dp[i-1][j][k]
// 初始化dp数组 （项目数+1）* （人数+1）* （最小利润+1），求得dp[profit.length][n][minProfit]
function profitableSchemes(n, minProfit, group, profit) {
    const p = profit.length
    const dp = new Array(p + 1)
    for (let i = 0; i < p + 1; i++) {
        dp[i] = new Array(n + 1)
        for (let j = 0; j < n + 1; j++) {
            dp[i][j] = new Array(minProfit + 1)
            for (let k = 0; k < minProfit + 1; k++) {
                dp[i][j][k] = k === 0 ? 1 : 0
            }
        }
    }
    for (let i = 1; i < p + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            for (let k = 0; k < minProfit + 1; k++) {
                dp[i][j][k] = dp[i - 1][j][k]
                if (j >= group[i - 1]) {
                    if (k >= profit[i - 1]) {
                        dp[i][j][k] += dp[i - 1][j - group[i - 1]][k - profit[i - 1]]
                    } else {
                        dp[i][j][k] += dp[i - 1][j - group[i - 1]][0]
                    }
                }
                dp[i][j][k] %= 1000000007
            }
        }
    }
    return dp[p][n][minProfit]
}

// 经典的背包问题可以使用二维动态规划求解，两个维度分别是物品和容量。
// 这道题有两种容量，因此需要使用三维动态规划求解
// 三个维度分别是当前可选择的工作、当前工作人数限制、当前获利状态限制
function profitableSchemes(n, minProfit, group, profit) {
    const MOD = 1e9 + 7
    const len = group.length
    const dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0))
    // 无论当前工作人数是几，我们总能提供一种方案满足最小工作利润为0
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= len; i++) {
        const members = group[i - 1]
        const earn = profit[i - 1]
        for (let j = n; j >= members; j--) {
            for (let k = minProfit; k >= 0; k--) {
                dp[j][k] = (dp[j][k] + dp[j - members][Math.max(0, k - earn)]) % MOD
            }
        }
    }
    return dp[n][minProfit]
}