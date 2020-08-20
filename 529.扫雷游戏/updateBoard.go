package problem0529

var directions = [][]int{
	{0, -1},
	{0, 1},
	{1, -1},
	{1, 0},
	{1, 1},
	{-1, -1},
	{-1, 0},
	{-1, 1},
}

func updateBoard(board [][]byte, click []int) [][]byte {
	var dfs func(x int, y int)
	dfs = func(x int, y int) {
		mineCount := 0
		for _, direction := range directions {
			nextX := x + direction[0]
			nextY := y + direction[1]
			if nextX < 0 || nextX >= len(board) || nextY < 0 || nextY >= len(board[0]) || board[nextX][nextY] == 'B' {
				continue
			}
			if board[nextX][nextY] == 'M' {
				mineCount++
			}
		}
		if mineCount > 0 {
			board[x][y] = byte(mineCount + '0')
		} else {
			board[x][y] = 'B'
			for _, direction := range directions {
				nextX := x + direction[0]
				nextY := y + direction[1]
				if nextX < 0 || nextX >= len(board) || nextY < 0 || nextY >= len(board[0]) || board[nextX][nextY] == 'B' {
					continue
				}
				dfs(nextX, nextY)
			}
		}
	}

	if board[click[0]][click[1]] == 'M' {
		board[click[0]][click[1]] = 'X'
	} else {
		dfs(click[0], click[1])
	}
	return board
}
