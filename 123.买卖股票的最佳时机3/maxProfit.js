// 对于股票类型的题目，需要将「买入」视为负受益，「卖出」视为正受益
// 通常都是维护股市中每一天结束后可以获得的累计最大收益，并以此进行状态转移，得到最终的答案

// 在第i天存在五个状态：
// 1.一次交易都没做
// 2.只做了一次买入
// 3.完成了一次买入卖出
// 4.完成了一次买入卖出 + 买入
// 5.完成了两次买入卖出
// 本题中仅需要考虑2-5的状态，因为状态1的受益就是0
function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0
    }
    let buy1 = -prices[0]
    let sell1 = 0
    let buy2 = -prices[0]
    let sell2 = 0

    for (let i = 1; i < prices.length; i++) {
        buy1 = Math.max(buy1, -prices[i])
        sell1 = Math.max(sell1, prices[i] + buy1)
        buy2 = Math.max(buy2, sell1 - prices[i])
        sell2 = Math.max(sell2, prices[i] + buy2)
    }

    return sell2
}