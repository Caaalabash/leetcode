function islandPerimeter(grid) {
    const row = grid.length
    const col = grid[0].length
    const dir = [-1, 0, 1, 0, -1]
    let result = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    const ii = i + dir[k]
                    const jj = j + dir[k + 1]
                    // 越界 or 是水域，该边有效
                    if (ii < 0 || ii >= row || jj < 0 || jj >= col || grid[ii][jj] === 0) {
                        result++
                    }
                }
            }
        }
    }
    return result
}