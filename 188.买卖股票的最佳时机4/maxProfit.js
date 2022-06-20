// 与123不同的是，这里最多可以完成k笔交易
// 似乎是从121 -> 123 -> 188一个通用化的过程

// 显然，第一个状态为：第几次交易；第二个状态为：买入/卖出，求累计最大收益
// 所以设：dp[i][0] 和 dp[i][1] 表示 第 i 笔交易买入/卖出时的累计最大收益
function maxProfit(k, prices) {
    if (k <= 0 || prices.length <= 1) {
        return 0
    }
    const dp = new Array(k)
    for (let i = 0; i < k; i++) {
        dp[i] = [Number.MIN_SAFE_INTEGER, 0]
    }
    for (let i = 0; i < prices.length; i++) {
        dp[0][0] = Math.max(dp[0][0], -prices[i])
        dp[0][1] = Math.max(dp[0][1], prices[i] + dp[0][0])
        for (let j = 1; j < k; j++) {
            dp[j][0] = Math.max(dp[j][0], dp[j - 1][1] - prices[i])
            dp[j][1] = Math.max(dp[j][1], prices[i] + dp[j][0])
        }
    }
    return dp[k - 1][1]
}