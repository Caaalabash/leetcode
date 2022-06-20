// dp[i] 表示第 i 天结束后的「累计最大收益」，存在三种状态
// 1. 持有一只股票，受益计算为 dp[i][0]
// 2. 不持有股票，且处于冷冻期，dp[i][1]
// 3. 不持有股票，且不处于冷冻期，dp[i][2]

// 对于dp[i][0]，可能是今天买的，也可能是之前买的，有 dp[i][0] = Max(dp[i - 1][0], dp[i - 1][2] - prices[i])
// 对于dp[i][1]，只能是今天卖的，有dp[i][1] = dp[i - 1][0] + prices[i]
// 对于dp[i][2]，可能是昨天卖的，也可能是之前卖的（不属于冷冻期) dp[i][2] = Max(dp[i - 1][1], dp[i - 1][2])
function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0
    }
    const n = prices.length
    const dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = [0, 0, 0]
    }
    dp[0][0] = -prices[0]

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        dp[i][1] = dp[i - 1][0] + prices[i]
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }

    // 由于最后一天买没有任何意义，所以排除dp[n - 1][0]
    return Math.max(dp[n - 1][1], dp[n - 1][2])
}

// 滚动数组优化
function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0
    }
    const n = prices.length
    let a = -prices[0]
    let b = 0
    let c = 0

    for (let i = 1; i < n; i++) {
        [a, b, c] = [Math.max(a, c - prices[i]), a + prices[i], Math.max(b, c)]
    }

    // 由于最后一天买没有任何意义，所以排除dp[n - 1][0]
    return Math.max(b, c)
}