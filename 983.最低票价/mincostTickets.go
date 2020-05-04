package problem0983

// 旅行的日期将以一个名为days的数组给出，days将按顺序严格递增
// 火车票的花费将以一个名为costs数组给出，包含三个元素，分别为1、7、30天时长的通行证
// 求旅行全部日期的最低消费

// 第i天不出行，那么第i天就啥也不干，延续第i-1天的花费
// 第i天要出行，需要在1、7、30天的火车票中选择一张
// 如果我们选择1日票，就需要看前1日的价格加上1日票的价格
// 如果我们选择7日票，就需要看前7日的价格加上7日票的价格
// 如果我们选择30日票，就需要看前30日的价格加上30日票的价格
// 所以dp[i] = min(dp[i-1]+cost[0], dp[i-7]+cost[1], dp[i-30]+cost[2])
// dp[i]等于出行到第i天的花费
func mincostTickets(days []int, costs []int) int {
	dp := make([]int, days[len(days)-1]+1)

	for k, v := range days {
		if k != 0 {
			for i := days[k-1] + 1; i < v; i++ {
				dp[i] = dp[days[k-1]]
			}
		}
		dp[v] = min(min(costs[0]+dp[max(v-1, 0)], costs[1]+dp[max(v-7, 0)]), costs[2]+dp[max(v-30, 0)])
	}

	return dp[days[len(days)-1]]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}