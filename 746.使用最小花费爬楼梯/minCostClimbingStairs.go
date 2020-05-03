package problem0746

// cost 的长度将会在 [2, 1000]
// dp[i] => 恰好到达i位置的最小花费，注意是恰好到达而不是超过
// (平地) 0 1 ，，， i (楼顶)
// 初始值 => dp[0] = cost[0] 从平地走到索引0
//	   	 => dp[1] = cost[1] 从平地走到索引1
// 状态转移方程 dp[i] = min(dp[i-1]+cost[i], dp[i-2]+cost[i])
func minCostClimbingStairs(cost []int) int {
	length := len(cost)
	dp := make([]int, length)
	dp[0] = cost[0]
	dp[1] = cost[1]
	for i := 2; i < length; i++ {
		dp[i] = min(dp[i-1]+cost[i], dp[i-2]+cost[i])
	}
	return min(dp[length-1], dp[length-2])
}

func minCostClimbingStairs1(cost []int) int {
	a, b := cost[0], cost[1]
	for i := 2; i < len(cost); i++ {
		a, b = b, min(a, b)+cost[i]
	}
	return min(a, b)
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
