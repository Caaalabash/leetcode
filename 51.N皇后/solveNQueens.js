function solveNQueens(n) {
	const result = []
	const chessBoard = new Array(n).fill(0).map(() => new Array(n).fill('.'))
	const backTrack = row => {
		if (row === n) {
			result.push(chessBoard.map(row => row.join('')))
			return
		}
		for (let i = 0; i < n; i++) {
			if (!isValid(chessBoard, row, i)) {
				continue
			}
			chessBoard[row][i] = 'Q'
			backTrack(row + 1)
			chessBoard[row][i] = '.'
		}
	}
	backTrack(0)
	return result
}

// 检查chessBoard[i][j]是否符合
function isValid(chessBoard, x, y) {
	// 纵向
	for (let i = 0; i < x; i++) {
		if (chessBoard[i][y] === 'Q') {
			return false
		}
	}
	// 左上方
	for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
		if (chessBoard[i][j] === 'Q') {
			return false
		}
	}
	// 右上方
	for (let i = x - 1, j = y + 1; i >= 0 && j < chessBoard.length; i--, j++) {
		if (chessBoard[i][j] === 'Q') {
			return false
		}
	}
	return true
}