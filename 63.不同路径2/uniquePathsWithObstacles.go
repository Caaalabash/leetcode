package problem0063

// 和62题的区别在于：增加了对障碍物的判断
// 在设置初始值时，入如果前一个值存在障碍，后面的dp初始值都应该设置为0
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	if obstacleGrid[0][0] == 1 {
		return 0
	}
	m := len(obstacleGrid)
	n := len(obstacleGrid[0])
	dp := make([][]int, m)
	dp[0] = make([]int, n)
	dp[0][0] = 1

	for i := 1; i < m; i++ {
		dp[i] = make([]int, n)
		if obstacleGrid[i][0] != 1 {
			dp[i][0] = dp[i-1][0]
		}
	}
	for i := 1; i < n; i++ {
		if obstacleGrid[0][i] != 1 {
			dp[0][i] = dp[0][i-1]
		}
	}
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if obstacleGrid[i][j] == 0 {
				dp[i][j] = dp[i][j-1] + dp[i-1][j]
			}
		}
	}
	return dp[m-1][n-1]
}
