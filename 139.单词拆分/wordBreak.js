// 设 dp[i] 代表 s[0:i] 能否由 wordDict 构成
// 考虑位置 j，使得 s[j+1:i] 存在于 wordDict, 此时，存在状态转移方程
// dp[i] = Some(dp[j]) && wordDict.includes(s[j+1:i])
// 初始状态：直接false
// 空间复杂度 O(n)
// 时间复杂度 O(n^2)
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict)
    const N = s.length
    const dp = new Array(N).fill(false)

    for (let i = 0; i < N; i++) {
        if (wordSet.has(s.slice(0, i + 1))) {
            dp[i] = true
        } else {
            for (let j = 0; j < i; j++) {
                if (wordSet.has(s.slice(j + 1, i + 1)) && dp[j]) {
                    dp[i] = true
                    break
                }
            }
        }
    }
    return dp[N - 1]
}