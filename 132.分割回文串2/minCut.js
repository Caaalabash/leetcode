// 本题核心：判断回文、分割

// 对于分割：设dp[i], 为 s[0:i] 的最少分割次数
// 考虑最后一个分割位置 j (0 <= j < i), 使得 s[j + 1, i] 是回文字符串
// 那么有：dp[i] = min(dp[j]) + 1，其中 0 <= j < i && s[j + 1, i]是回文字符串
// 初始值：dp[i] = 0, 因为如果本身是一个回文串时，分割次数为0

// 对于判断回文，也可以使用动态规划
// 设 dp[i][j] 代表 s[i:j] 是否为回文串
// 显然有状态转移方程：dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
// 初始值 dp[i][j] = true, 其中 i >= j

// 时间复杂度O(n^2)
// 空间复杂度O(n^2)
function minCut(s) {
    const N = s.length
    // 预处理
    const dp = new Array(N)
    for (let i = 0; i < N; i++) {
        // 逻辑坑点：为什么全部初始化为true
        // dp[i + 1][j - 1]会出现 i >= j 的情况，此时取值需要为true
        dp[i] = new Array(N).fill(true)
    }
    for (let i = N - 1; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
        }
    }
    // 分割
    const dp1 = new Array(N).fill(Number.MAX_VALUE)
    for (let i = 0; i < N; i++) {
        // 如果是回文字符串，不用分割
        if (dp[0][i]) {
            dp1[i] = 0
        } else {
            for (let j = 0; j < i; j++) {
                if (dp[j + 1][i]) {
                    dp1[i] = Math.min(dp1[i], dp1[j] + 1)
                }
            }
        }
    }
    return dp1[N - 1]
}