package problem198

// 动态规划:
// 由于不可以在相邻的房间闯入，所以在当前位置n房屋可以盗窃的最大值只有两种可能：
// (1)n-1房屋可盗窃的最大值
// (2)n-2房屋可盗窃的最大值 + 当前房屋的值
// 得到动态规划方程: dp[n] = MAX(dp[n-1], dp[n-2]+num)
func rob(nums []int) int {
	prevMax, curMax := 0, 0
	for _, v := range nums {
		temp := curMax
		if prevMax+v > curMax {
			curMax = prevMax + v
		}
		prevMax = temp
	}
	return curMax
}
