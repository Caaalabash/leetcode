package problem0279

// 给定正整数n，找到最少的个数的完全平方数，使得它们的和为n，返回这个个数
// 步骤一：确定数组含义 => dp[n]代表组成数组n的最少完全平方数的个数
// 步骤二：确定数组元素之间的关系 => dp[n] = min(dp[n], dp[n-j*j])
// 步骤三：确定初始值 => 从这一步可以找到第二步的结论 dp[n] = dp[j]
// 3 --> 3
// 4 --> 1
// 8 --> 2
// 9 --> 1
// 12 --> 3, 从12来说，拆分成9+3，答案为4，拆分成4+4+4, 答案为3
// 也就是说"当前正整数n的去掉一个完全平方数后的子问题结果+1，但是去掉哪一个完全平方数才能获得最佳结果，需要自己遍历"
func numSquares(n int) int {
	dp := make([]int, n+1)
	for i := 0; i < n+1; i++ {
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
