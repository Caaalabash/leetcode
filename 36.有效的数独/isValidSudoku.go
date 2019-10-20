package problem0036

func isDuplicate(x1, y1, x2, y2 int, board *[][]byte) bool {
	m := make(map[byte]struct{})

	for i := x1; i <= x2; i++ {
		for j := y1; j <= y2; j++ {
			val := (*board)[i][j]
			if val == '.' {
				continue
			}
			if _, ok := m[val]; ok {
				return true
			}
			m[val] = struct{}{}
		}
	}
	return false
}

func isValidSudoku(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		if isDuplicate(i, 0, i, 8, &board) {
			return false
		}
		if isDuplicate(0, i, 8, i, &board) {
			return false
		}
		if isDuplicate(i/3*3, i%3*3, i/3*3+2, i%3*3+2, &board) {
			return false
		}
	}
	return true
}
