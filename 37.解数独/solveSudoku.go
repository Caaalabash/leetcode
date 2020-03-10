package problem0037

func solveSudoku(board [][]byte) {
	var (
		rowUsed   = [9][10]bool{}
		colUsed   = [9][10]bool{}
		boxUsed   = [3][3][10]bool{}
		backTrack func(row, col int) (done bool)
	)
	// 初始化
	for row := 0; row < 9; row++ {
		for col := 0; col < 9; col++ {
			num := board[row][col] - '0'
			if 1 <= num && num <= 9 {
				rowUsed[row][num], colUsed[col][num], boxUsed[row/3][col/3][num] = true, true, true
			}
		}
	}
	backTrack = func(row int, col int) (done bool) {
		// 从左到右从上到下
		if col == 9 {
			row, col = row+1, 0
			if row == 9 {
				return true
			}
		}
		if board[row][col] == '.' {
			for num := 1; num <= 9; num++ {
				// 数字使用过
				if rowUsed[row][num] || colUsed[col][num] || boxUsed[row/3][col/3][num] {
					continue
				}
				rowUsed[row][num], colUsed[col][num], boxUsed[row/3][col/3][num] = true, true, true
				board[row][col] = byte(48 + num)
				if backTrack(row, col+1) {
					return true
				}
				board[row][col] = '.'
				rowUsed[row][num], colUsed[col][num], boxUsed[row/3][col/3][num] = false, false, false
			}
		} else {
			return backTrack(row, col+1)
		}
		return false
	}
	backTrack(0, 0)
}
