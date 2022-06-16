// 观察矩形
// 1 2
// 3 4
// 能够发现当pos[i] + pos[j]为偶数时，向上移动，为奇数时，向下移动
function findDiagonalOrder(mat) {
    const m = mat.length
    const n = mat[0].length
    const result = []

    let i = 0, j = 0, index = 0

    while (index < m * n) {
        result.push(mat[i][j])
        if ((i + j) % 2 === 0) {
            if (j === n - 1) {
                i++
            } else if (i === 0) {
                j++
            } else {
                i--
                j++
            }
        } else {
            // 右下移动，移不动右移
            if (i === m - 1) {
                j++
            } else if (j === 0) {
                i++
            } else {
                i++
                j--
            }
        }
        index++
    }
    return result
}