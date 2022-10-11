function matrixReshape(mat, r, c) {
    const m = mat.length
    const n = mat[0].length
    if (m * n !== r * c) {
        return mat
    }
    const result = new Array(r).fill(0).map(() => [])
    let rowIndex = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i * n + j) >= c && (i * n + j) % c === 0) {
                rowIndex++
            }
            result[rowIndex].push(mat[i][j])
        }
    }
    return result
}