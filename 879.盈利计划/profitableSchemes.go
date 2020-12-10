package problem0879

// dp[i][j][k] = x代表: 前i个种犯罪在人数不超过j的条件下至少获利k的方案数
// 对于第i个犯罪项目：
// 不选择它：dp[i][j][k] = dp[i-1][j][k]
// 要选择它：dp[i][j][k] = dp[i-1][j-group[i-1]][k-profit[i-1]]
// 择优操作：+
// 边界情况：dp[i][j][0] = 1 啥也不干
// G [1, 100]
// P [0, 100]
// group[i] [1, 100]
// profit[i] [0, 100]
func profitableSchemes(G int, P int, group []int, profit []int) int {
	N := len(profit)
	dp := make([][][]int, N+1)
	for i := range dp {
		dp[i] = make([][]int, G+1)
		for j := range dp[i] {
			dp[i][j] = make([]int, P+1)
			dp[i][j][0] = 1
		}
	}

	for i := 1; i <= N; i++ {
		for j := 1; j <= G; j++ {
			for k := 0; k <= P; k++ {
				dp[i][j][k] = dp[i-1][j][k]
				if j >= group[i-1] {
					if k-profit[i-1] > 0 {
						dp[i][j][k] += dp[i-1][j-group[i-1]][k-profit[i-1]]
					} else {
						dp[i][j][k] += dp[i-1][j-group[i-1]][0]
					}
				}
				dp[i][j][k] %= 1000000007
			}
		}
	}
	return dp[N][G][P]
}

// 状态压缩
func profitableSchemes1(G int, P int, group []int, profit []int) int {
	N := len(profit)
	dp := make([][]int, G+1)
	for j := range dp {
		dp[j] = make([]int, P+1)
		dp[j][0] = 1
	}

	for i := 1; i <= N; i++ {
		for j := G; j >= group[i-1]; j-- {
			for k := 0; k <= P; k++ {
				if k-profit[i-1] > 0 {
					dp[j][k] += dp[j-group[i-1]][k-profit[i-1]]
				} else {
					dp[j][k] += dp[j-group[i-1]][0]
				}
				dp[j][k] %= 1000000007
			}
		}
	}
	return dp[G][P]
}
