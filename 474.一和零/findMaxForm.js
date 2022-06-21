// 经典的背包问题可以使用二维动态规划求解，两个维度分别是物品和容量。
// 这道题有两种容量，因此需要使用三维动态规划求解，三个维度分别是字符串、0 的容量和 1 的容量。
// 定义三位数组 dp[k][i][j]：在前 k 个字符串中，使用 i 个 0 和 j 个 1的情况下最多可以得到的字符串数量
// 最终的答案为 dp[strs.length][m][n]

// 如果不能选第 k 个字符串：
//   dp[k][i][j] = dp[k - 1][j][k]
// 如果能选第 k 个字符串：
//   dp[k][i][j] = Max(dp[k - 1][i][j], dp[k - 1][i - 0的数量][j - 1的数量] + 1)
function findMaxForm(strs, m, n) {
    const dp = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }

    for (const str of strs) {
        const {zero, one} = getMeta(str)
        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= one; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1)
            }
        }
    }

    return dp[m][n]
}

function getMeta(str) {
    let zero = 0
    let one = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') zero++
        else one++
    }
    return {zero, one}
}