// 寻找2个字符串中的最长公共子序列
// 设dp[i][j]为text1[0:i)，text2[0:j)的最长公共子序的长度
// 为什么右侧是开区间？
// 因为需要考虑到i = 0 or j = 0的边界情况

function longestCommonSubsequence(text1, text2) {
    const l1 = text1.length
    const l2 = text2.length

    const dp = new Array(l1 + 1)
    for (let i = 0; i < l1 + 1; i++) {
        dp[i] = new Array(l2 + 1).fill(0)
    }

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