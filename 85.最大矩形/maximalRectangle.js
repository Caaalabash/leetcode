// 考虑用动态规划解决此题

// 可以用 dp[i][j] 表示 [i,j] 点向左最大连续1的个数
// 显然有 dp[i][j] = dp[i][j - 1] + (matrix[i][j] === 1 ? 1 : 0)
function maximalRectangle(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const dp = new Array(m)

    let result = 0

    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0
                continue
            }
            dp[i][j] = 1
            if (j > 0) {
                dp[i][j] += dp[i][j - 1]
            }
            // 此时可以更新最大矩形的值
            let width = dp[i][j]
            for (let k = i; k >= 0; k--) {
                width = Math.min(width, dp[k][j])
                if (width === 0) {
                    break
                }
                result = Math.max(result, width * (i - k + 1))
            }
        }
    }
    return result
}