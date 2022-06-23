// 最后肯定要卖出股票的！
// 所以用两个状态：一个记录买入的最低价格，一个记录相对于买点的最大利润
function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0
    }
    let buy1 = -prices[0]
    let sell1 = 0

    for (let i = 1; i < prices.length; i++) {
        buy1 = Math.max(buy1, -prices[i])
        sell1 = Math.max(sell1, prices[i] + buy1)
    }

    return sell1
}