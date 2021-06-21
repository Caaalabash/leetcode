// [1, 4, 8, 9] => 6
// 每天存在两种状态：手上有股票、手上没有股票
// 用dp[i][0]表示第i天交易完成后手里没有股票的最大利润
// 用dp[i][1]表示第i天交易完成后手里有股票的最大利润
// 考虑dp[i][0]的状态转移方程 => 前一天有股票，今天卖了 / 前一天没有股票，今天没操作
//   => dp[i][0] = Max(dp[i-1][0], dp[i-1][1] + price[i] - fee)
// 考虑dp[i][1]的状态转移方程 => 前一天没股票，今天买了 / 前一天有股票，今天没操作
//   => dp[i][1] = Max(dp[i-1][1], dp[i-1][0] - price[i])
// 初始值 dp[0][0] = 0 dp[0][1] = -price[1]
// 最终结果一定是 dp[n][0] 因为dp[n][1] 都没卖出去
function maxProfit(prices, fee) {
    const dp = Array.from({ length: prices.length }, () => [0, 0])
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
    }
    return dp[prices.length - 1][0]
}

// 滚动数组优化
function maxProfit1(prices, fee) {
    let a = 0
    let b = -prices[0]
    const dp = Array.from({ length: prices.length }, () => [0, 0])
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        [a, b] = [Math.max(a, b + prices[i] - fee), Math.max(b, a - prices[i])]
    }
    return a
}
