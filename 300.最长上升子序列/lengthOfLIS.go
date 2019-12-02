package problem0300

// 数组含义	dp[i]的定义是【以nums[i]结尾的最长上升子序列的长度】, 搞清楚这点很关键, [5,9,3] => dp[2]值为1, 代表的是以3结尾的上升子序列长度为1
// 初始值	dp[i] = 1, 每个元素自身构成
// 转移方程	dp[i] = max(dp[i], dp[j]+1)
// 答案		max(dp)
func lengthOfLIS(nums []int) int {
	dp := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		dp[i] = 1
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
	}
	result := 0
	for i := 0; i < len(nums); i++ {
		result = max(result, dp[i])
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
