// Q3 1590
// 用动态规划
// 由于存在两个人的操作、两种取法，正常的定义dp数组比较困难
// 不妨设：dp[i][j]表示当剩下的石子堆为从下标i到下标j时，当前玩家与另一个玩家的石子数量差的最大值
// 那么考虑边界和初始值：
// i > j时，无意义
// i = j时，只剩一堆石子，当前玩家取走，那么有初始值 dp[i][i] = piles[i]
// i < j时，初始值 dp[i][j] = 0
// 考虑状态转移方程：
// i < j时，有 dp[i][j] = Math.max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])
// 最后判断 dp[0][piles.length - 1] 的大小，大于0则alice胜利
function stoneGame(piles) {
    const n = piles.length
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        dp[i][i] = piles[i]
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = Math.max(
                piles[i] - dp[i + 1][j],
                piles[j] - dp[i][j - 1]
            )
        }
    }

    return dp[0][n - 1] > 0
}