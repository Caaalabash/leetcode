// 可以用 LCS 的代码改一改吗？
// rabbibt 和 rabbit 的 结果为1，所以 LCS 复制过来改改显然不太行

// 设 dp[i][j] 为字符串 s[0:i] 和 t[0:j] 的子序列个数，但是这样不能表示空串
// 需要让 dp[0][j] / dp[i][0] 能表示空字符串，所以初始化 dp 数组的时候，需要增加一位长度

// 考虑边界情况
// 空字符串是任何字符串的子序列：dp[i][0] = 1
// 非空字符串不是空字符串的子序列：dp[0][j] = 0

// 当 s[i] === s[j] 时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
// 当 s[i] !== s[j] 时，dp[i][j] = dp[i - 1][j]
function numDistinct(s, t) {
    const m = s.length
    const n = t.length
    if (n > m) {
        return 0
    }
    const dp = new Array(m + 1)
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1).fill(0)
        dp[i][0] = 1
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) continue
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[m][n]
}