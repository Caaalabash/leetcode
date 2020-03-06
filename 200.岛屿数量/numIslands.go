package problem0200

// 遍历二维数组 -> 发现岛屿就DFS探索(处理边界)
func numIslands(grid [][]byte) int {
	var (
		result int
		dfs    func(i, j int)
	)
	dfs = func(i, j int) {
		if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) || grid[i][j] != '1' {
			return
		}
		grid[i][j] = '0'
		dfs(i, j+1)
		dfs(i, j-1)
		dfs(i-1, j)
		dfs(i+1, j)
	}
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == '1' {
				result++
				dfs(i, j)
			}
		}
	}
	return result
}
