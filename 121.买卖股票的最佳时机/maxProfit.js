function maxProfit(prices) {
  // 无法交易
  if (prices.length <= 1) {
    return 0
  }
  let max = 0
  let minPrice = 100001
  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i]
    if (curPrice < minPrice) {
      minPrice = curPrice
    } else if (curPrice - minPrice > max) {
      max = curPrice - minPrice
    }
  }
  return max
}
