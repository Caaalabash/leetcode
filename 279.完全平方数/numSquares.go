package problem0279

// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。
// 你需要让组成和的完全平方数的个数最少。
// 输入：n = 12
// 输出：3
// 解释：12 = 4 + 4 + 4

// 容易想到dp[i]代表正整数i的最少个数
// dp[i] = min(dp[i-j*j]) + 1, i-j*j >= 0
func numSquares(n int) int {
	dp := make([]int, n+1)
	for i := 1; i <= n; i++ {
		dp[i] = i
		for j := 2; i-j*j >= 0; j++ {
			dp[i] = min(dp[i], dp[i-j*j]+1)
		}
	}
	return dp[n]
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
