// LCS
// 状态定义：dp[i][j] 表示 text1[0:i) 和 text2[0:j) 的 LCS
// 边界情况：dp[0][j] = dp[i][0] = 0
// 时间复杂度：O(mn)
// 空间复杂度：O(mn)
function longestCommonSubsequence(text1, text2) {
    const l1 = text1.length
    const l2 = text2.length

    const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[l1][l2]
}