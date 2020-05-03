package problem0064

// 同62题，不同的是，需要找出一条从左上到右下的路径，使得路径上的数字总和为最小
// 步骤一：定义数组元素的含义 => 目的是最小路径和，那么dp[i][j]代表从左上角走到(i, j)时，最小的路径和是dp[i][j]
// 步骤二：找出数组元素之间的关系 => 显然，dp[i][j] = min(dp[i][j-1], dp[i-1][j]) + arr[i][j]，即，当前位置的值 + 前一步两种可能的最小值
// 步骤三：找出初始值 => 同62题
//        1. 对于第一行：dp[0][j] = dp[0][j-1] + arr[0][j]
//        2. 对于第一列：dp[j][0] = dp[j-1][0] + arr[j][0]
func minPathSum(grid [][]int) int {
	for i := 1; i < len(grid); i++ {
		grid[i][0] += grid[i-1][0]
	}
	for j := 1; j < len(grid[0]); j++ {
		grid[0][j] += grid[0][j-1]
	}
	for i := 1; i < len(grid); i++ {
		for j := 1; j < len(grid[0]); j++ {
			grid[i][j] += min(grid[i-1][j], grid[i][j-1])
		}
	}
	return grid[len(grid)-1][len(grid[0])-1]
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
