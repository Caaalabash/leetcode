package problem0322

// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：5 + 5 + 1
// 容易想到，可以让dp[i]表示达到总金额i需要的硬币个数, 且dp[x]均为1（x属于coins）
// 探索dp[x]和dp[i-x]的关系：
//   amount 0  1 2 3 4 5 6 7 8 9 10 11
//   count  -1 1 1 2 2 1 2 2 3 4 2  3
// 容易观察到dp[i] = dp[x] + dp[i-x], x属于coins且x<i
// 因此有：dp[i] = min(dp[x] + dp[i-x]), x属于coins且x<i
func coinChange(coins []int, amount int) int {
	dp := make([]int, amount+1)
	for i := 1; i <= amount; i++ {
		dp[i] = -1
		for _, x := range coins {
			if x > i || dp[i-x] == -1 {
				continue
			}
			count := dp[i-x] + 1
			if dp[i] == -1 || dp[i] > count {
				dp[i] = count
			}
		}
	}
	return dp[amount]
}
