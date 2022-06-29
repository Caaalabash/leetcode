function checkXMatrix(grid) {
    const length = grid.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i === j || -i + length - 1 === j) {
                if (grid[i][j] === 0) {
                    return false
                }
            } else if (grid[i][j] !== 0) {
                return false
            }
        }
    }
    return true
}