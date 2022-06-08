// 本题和 516、 940题有点相通之处
// 1.涉及到"不同的子序列"，就一定需要考虑重复的场景
// 2.涉及到取模，就一定要考虑负数的场景

// dp[i][j] 表示 s[i,j] 范围内不同的回文子序列个数，最后需要返回 dp[0][N - 1]
// 如果 s[i] === s[j]:
// 当区间[i+1, j-1]有 0 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 + 2
// 当区间[i+1, j-1]有 1 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 + 1
// 当区间[i+1, j-1]有 >= 2 个字符等于 x 时：
//     dp[i][j] = dp[i+1][j-1] * 2 - dp[l+1][r-1]
// 如果 s[i] !== s[j]:
//     dp[i][j] = dp[i][j-1] + dp[i+1][j] - dp[i+1][j-1] (容斥原理）
// 显然有初始值 dp[i][i] = 1
function countPalindromicSubsequences(s) {
    const N = s.length
    const mod = 1e9 + 7
    const dp = new Array(N)
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N).fill(0)
        dp[i][i] = 1
    }
    // 根据状态转移方程，i层需要倒序遍历
    for (let i = N - 2; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            if (s[i] !== s[j]) {
                dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1]
            } else {
                dp[i][j] = dp[i + 1][j - 1] * 2 + 2
                // 对区间 [i+1,j-1] 进行分析，判断区间内 和 s[i] 相等的数量
                let l = i + 1
                let r = j - 1
                while (l <= r && s[l] !== s[i]) l++
                while (l <= r && s[r] !== s[i]) r--
                if (l === r) {
                    dp[i][j] -= 1
                } else if (l < r) {
                    dp[i][j] -= dp[l + 1][r - 1] + 2
                }
            }
            // mod
            dp[i][j] = dp[i][j] > 0 ? dp[i][j] % mod : dp[i][j] + mod
        }
    }
    return dp[0][N - 1]
}