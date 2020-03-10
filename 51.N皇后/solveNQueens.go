package problem0051

func solveNQueens(n int) [][]string {
	var (
		result     [][]string
		chessBoard = make([][]string, n)
		backTrack  func(row int)
	)
	// 初始化棋盘
	for i := 0; i < n; i++ {
		chessBoard[i] = make([]string, n)
		for j := 0; j < n; j++ {
			chessBoard[i][j] = "."
		}
	}
	// 每行必有一个皇后，那就按行遍历
	backTrack = func(row int) {
		if row == n {
			temp := make([]string, n)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					temp[i] += chessBoard[i][j]
				}
			}
			result = append(result, temp)
			return
		}
		for col := 0; col < n; col++ {
			if !isValid(chessBoard, row, col) {
				continue
			}
			chessBoard[row][col] = "Q"
			backTrack(row + 1)
			chessBoard[row][col] = "."
		}
	}
	backTrack(0)
	return result
}

// 检查指定位置放皇后是否合法，只检查上方，因为下方没有填充
func isValid(chessBoard [][]string, row, col int) bool {
	size := len(chessBoard)
	// 检查上方列
	for i := 0; i < row; i++ {
		if chessBoard[i][col] == "Q" {
			return false
		}
	}
	// 检查右上方
	for i, j := row-1, col+1; i >= 0 && j < size; i, j = i-1, j+1 {
		if chessBoard[i][j] == "Q" {
			return false
		}
	}
	// 检查左上方
	for i, j := row-1, col-1; i >= 0 && j >= 0; i, j = i-1, j-1 {
		if chessBoard[i][j] == "Q" {
			return false
		}
	}
	return true
}
