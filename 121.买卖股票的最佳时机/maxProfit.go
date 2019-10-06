package problem0121

// 动态规划: 最大利润 = max{前一天的最大利润, 今天的价格-之前的最低价格}
func maxProfit(prices []int) int {
	if len(prices) <= 1 {
		return 0
	}
	min, max := prices[0], 0
	for i := 1; i < len(prices); i++ {
		if prices[i]-min > max {
			max = prices[i] - min
		}
		if prices[i] < min {
			min = prices[i]
		}
	}
	return max
}
