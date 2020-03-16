package problem0980

// 1起始2结束0通道-1障碍
// 1 0 0 0
// 0 0 0 0
// 0 0 2 -1
// 找到满足以下条件的路径总数：从1开始，到2结束，中间全是0
func uniquePathsIII(grid [][]int) int {
	var (
		result    int
		zeroCount int
		delta     = [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
		backTrack func(row int, col int, zeroCount int)
	)
	startX, startY, rowCount, colCount := 0, 0, len(grid), len(grid[0])
	for i := 0; i < rowCount; i++ {
		for j := 0; j < colCount; j++ {
			if grid[i][j] == 0 {
				zeroCount++
			} else if grid[i][j] == 1 {
				startX, startY = i, j
			}
		}
	}
	backTrack = func(row int, col int, zeroCount int) {
		for i := 0; i < 4; i++ {
			dx := row + delta[i][0]
			dy := col + delta[i][1]
			if 0 <= dx && dx < rowCount && 0 <= dy && dy < colCount {
				if zeroCount == 0 && grid[dx][dy] == 2 {
					result++
					return
				}
				if grid[dx][dy] == 0 {
					grid[dx][dy] = -1
					backTrack(dx, dy, zeroCount-1)
					grid[dx][dy] = 0
				}
			}
		}
	}
	backTrack(startX, startY, zeroCount)
	return result
}
