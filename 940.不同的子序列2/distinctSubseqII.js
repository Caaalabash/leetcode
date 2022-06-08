// 容易想到：dp[i] 代表 s[0-i] 的 不同子序列数量
// 状态转移方程：dp[i + 1] = dp[i] * 2 - dp[last[s[i]]]
// 时间复杂度O(n)
// 空间复杂度O(n)

// 1. 注意取mod的逻辑
// 2. 将空字符串视为子序列，最后再减去，【为什么需要空字符串？如果不要，能写出来吗？】
function distinctSubseqII(s) {
    const mod = 1e9 + 7
    const N = s.length
    const last = new Map()
    const dp = new Array(N + 1)
    dp[0] = 1

    for (let i = 0; i < N; i++) {
        dp[i + 1] = dp[i] * 2 % mod
        if (last.has(s[i])) {
            dp[i + 1] -= dp[last.get(s[i])]
        }
        dp[i + 1] %= mod
        last.set(s[i], i)
    }

    dp[N]--
    if (dp[N] < 0) {
        dp[N] += mod
    }
    return dp[N]
}