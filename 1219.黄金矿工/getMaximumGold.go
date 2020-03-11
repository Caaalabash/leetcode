package problem1219

var (
	dx = []int{1, 0, -1, 0}
	dy = []int{0, 1, 0, -1}
)

func getMaximumGold(grid [][]int) int {
	var (
		result    int
		backTrack func(row int, col int, gold int)
	)
	backTrack = func(row int, col int, gold int) {
		t := grid[row][col]
		gold += t
		if gold > result {
			result = gold
		}
		grid[row][col] = 0
		for i := 0; i < 4; i++ {
			x, y := row+dx[i], col+dy[i]
			if 0 <= x && x < len(grid) && 0 <= y && y < len(grid[0]) && grid[x][y] != 0 {
				backTrack(x, y, gold)
			}
		}
		grid[row][col] = t
	}
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] != 0 {
				backTrack(i, j, 0)
			}
		}
	}
	return result
}
