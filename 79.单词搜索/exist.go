package problem0079

func exist(board [][]byte, word string) bool {
	for x, lenx := 0, len(board); x < lenx; x++ {
		for y, leny := 0, len(board[0]); y < leny; y++ {
			if check(board, word, x, y, 0) {
				return true
			}
		}
	}
	return false
}

func check(board [][]byte, word string, x int, y int, index int) bool {
	if index == len(word) {
		return true
	}
	if x == len(board) || y == len(board[0]) || x < 0 || y < 0 {
		return false
	}
	if board[x][y] != word[index] {
		return false
	}
	board[x][y] ^= byte(128)
	if check(board, word, x+1, y, index+1) ||
		check(board, word, x, y+1, index+1) ||
		check(board, word, x-1, y, index+1) ||
		check(board, word, x, y-1, index+1) {
		return true
	}
	board[x][y] ^= byte(128)
	return false
}
