package problem0174

// dp[i][j]表示在i，j位置骑士需要的最小生命值，倒着来推导
func calculateMinimumHP(dungeon [][]int) int {
	row := len(dungeon)
	col := len(dungeon[0])

	dp := make([][]int, row)
	for i := 0; i < row; i++ {
		dp[i] = make([]int, col)
	}

	for i := row - 1; i >= 0; i-- {
		for j := col - 1; j >= 0; j-- {
			if i == row-1 && j == col-1 { // 终点
				dp[i][j] = max(1, 1-dungeon[i][j])
			} else if i == row-1 { // 最后一行
				dp[i][j] = max(1, dp[i][j+1]-dungeon[i][j])
			} else if j == col-1 {
				dp[i][j] = max(1, dp[i+1][j]-dungeon[i][j])
			} else {
				dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1])-dungeon[i][j])
			}
		}
	}
	return dp[0][0]
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
