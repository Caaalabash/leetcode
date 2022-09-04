function numSpecial(mat) {
    const rows = mat.length
    const cols = mat[0].length
    let result = 0

    for (let i = 0; i < rows; i++) {
        outer:
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) continue
            let valid = true
            // 检查列
            for (let ii = 0; ii < rows; ii++) {
                if (ii === i) continue
                if (mat[ii][j] === 1) {
                    valid = false
                    continue outer
                }
            }
            // 检查行
            for (let jj = 0; jj < cols; jj++) {
                if (jj === j) continue
                if (mat[i][jj] === 1) {
                    valid = false
                    continue outer
                }
            }
            if (valid) result++
        }
    }

    return result
}

// 补充
var numSpecial = function(mat) {
    const m = mat.length, n = mat[0].length;
    const rowsSum = new Array(m).fill(0);
    const colsSum = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowsSum[i] += mat[i][j];
            colsSum[j] += mat[i][j];
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
                res++;
            }
        }
    }
    return res;
};