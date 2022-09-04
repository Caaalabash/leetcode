function flipChess(chessboard) {
    chessboard = chessboard.map(i => i.split(''))
    const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    const n = chessboard.length
    const m = chessboard[0].length
    const inBoard = (x, y) => 0 <= x && x < n && 0 <= y && y <= m
    // 接收一个坐标、反转成黑棋的数组、反转成黑棋的数组的循环起始值
    const check = (i, j, reverseList = [], curIndex) => {
        for (const [dx, dy] of dir) {
            const prevLength = reverseList.length
            let ii = i + dx
            let jj = j + dy
            while (inBoard(ii, jj) && chessboard[ii][jj] === 'O') {
                reverseList.push([ii, jj])
                ii += dx
                jj += dy
            }
            if (inBoard(ii, jj) && chessboard[ii][jj] === 'X') {
                for (let k = curIndex; k < reverseList.length; k++) {
                    chessboard[reverseList[k][0]][reverseList[k][1]] = 'X'
                }
            } else {
                reverseList.length = prevLength
            }
        }
        for (let k = curIndex; k < reverseList.length; k++) {
            check(reverseList[k][0], reverseList[k][1], reverseList, reverseList.length)
        }
        return reverseList.length
    }

    let result = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (chessboard[i][j] !== '.') continue
            // 黑棋翻转成白棋的坐标数组
            const reverseList = []
            // 下黑棋
            chessboard[i][j] = 'X'
            // 更新结果
            result = Math.max(result, check(i, j, reverseList, 0))
            // 颜色改回来
            reverseList.forEach(pos => chessboard[pos[0]][pos[1]] = 'O')
            chessboard[i][j] = '.'
        }
    }

    return result
}
