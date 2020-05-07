package problem0221

// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
// 用 dp(i,j) 表示以 (i, j) 为右下角，且只包含 1 的正方形的边长最大值
// 这道题有一个巧妙的状态转移方程 dp(i,j) = min(dp(i−1,j), dp(i−1,j−1), dp(i,j−1))+1
func maximalSquare(matrix [][]byte) int {
	dp, maxSide := make([][]int, len(matrix)), 0

	for i := 0; i < len(matrix); i++ {
		dp[i] = make([]int, len(matrix[i]))
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == '0' {
				dp[i][j] = 0
			} else {
				dp[i][j] = 1
				maxSide = 1
			}
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[i]); j++ {
			if dp[i][j] == 1 {
				dp[i][j] = min(min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1
				maxSide = max(maxSide, dp[i][j])
			}
		}
	}
	return maxSide * maxSide
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
