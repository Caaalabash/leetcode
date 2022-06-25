function exist(board, word) {
    const n = board.length
    const m = board[0].length
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]
    const visit = new Array(n).fill(0).map(() => new Array(m).fill(false))
    const check = (i, j, k) => {
        if (
            (i < 0 || i >= n || j < 0 || j >= m || k > word.length) ||
            (visit[i][j]) ||
            (board[i][j] !== word.charAt(k))
        ) {
            return false
        }
        if (k === word.length - 1) {
            return true
        }
        visit[i][j] = true
        for (const dir of direction) {
            if (check(i + dir[0], j + dir[1], k + 1)) {
                return true
            }
        }
        visit[i][j] = false
        return false
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (check(i, j, 0)) {
                return true
            }
        }
    }
    return false
}