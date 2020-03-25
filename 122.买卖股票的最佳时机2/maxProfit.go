package problem0122

// 从第i天开始，与第i-1天的股价比较，如果有上升，就将利润计入总利润
// [1,2,3,4]，这四天股价依次上升，按照贪心算法，最大利润是：
// max = (prices[3]-prices[2]) + (prices[2]-prices[1]) + (prices[1]-prices[0]) = prices[3] - prices[0]
// 贪心算法在每一步总是做出在当前看来最好的选择：
// 1. 最好根据题意确定，可能是最大，可能是最小
// 2. 它不需要从前面的状态转移过来，后面的选择不会对前面的选择有影响
// 这道题贪心的地方在于：今天的股价 - 昨天的股价是正数，就贪了
func maxProfit(prices []int) int {
	if len(prices) <= 1 {
		return 0
	}
	result := 0
	for i := 1; i < len(prices); i++ {
		if diff := prices[i] - prices[i-1]; diff > 0 {
			result += diff
		}
	}
	return result
}
