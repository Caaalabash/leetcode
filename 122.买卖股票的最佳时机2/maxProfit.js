// 由于购买次数没有限制，采取贪心算法
//  这道题贪心的地方在于：今天的股价 - 昨天的股价是正数，就贪了
function maxProfit(prices) {
    let ans = 0
    let n = prices.length

    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1])
    }

    return ans
}