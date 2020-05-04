package problem0322

import "math"

// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：5 + 5 + 1
// 容易想到，可以让dp[i]表示达到总金额i需要的硬币个数, 且dp[x]均为1（x属于coins）
// 探索dp[x]和dp[i-x]的关系：
//   amount 0  1 2 3 4 5 6 7 8 9 10 11
//   count  -1 1 1 2 2 1 2 2 3 4 2  3
// 对于dp[10] = 2来说，当x属于coins时，有
// dp[10] = dp[5] + dp[5]
// dp[10] = dp[2] + dp[8]
// dp[10] = dp[1] + dp[9]
// 因此有：dp[i] = min(dp[i-x]) + 1(属于coins)
func coinChange(coins []int, amount int) int {
	dp := make([]int, amount+1)
	for i := 1; i <= amount; i++ {
		dp[i] = -1
		minCount := math.MaxInt32
		for _, x := range coins {
			if x <= i && dp[i-x] != -1 {
				minCount = min(minCount, dp[i-x])
			}
		}
		if minCount != math.MaxInt32 {
			dp[i] = minCount + 1
		}
	}
	return dp[amount]
}
func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
