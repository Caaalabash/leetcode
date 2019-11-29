package problem0062

// M x N的网格，每次只能右/下移动，从左上角到右下角有多少种路径
// 步骤一: 定义数组元素的含义 => dp[i][j]的含义为，当从左上角走到(i, j)时，一共有dp[i][j]种路径
// 步骤二: 找出数组元素之间的关系 => 抵达dp[i][j]的路径有有两种dp[i-1][j]走一步和dp[i][j-1]z走一步, 所以dp[i][j] = dp[i-1][j] + dp[i][j-1]
// 步骤三: 找出初始值 => 初始值不仅仅局限于单个值，可以理解为"第一步就能看出的答案"，例如
//        1. 处于同一行时: dp[0][all] = 1
//        2. 处于同一列时: dp[all][0] = 1
func uniquePaths(m int, n int) int {
	if m < 1 || n < 1 {
		return 0
	}
	dp := make([][]int, m)
	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
		dp[i][0] = 1
	}
	for i := 0; i < n; i++ {
		dp[0][i] = 1
	}
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}
	return dp[m-1][n-1]
}
