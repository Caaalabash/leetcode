// 注意条件中有："保证每次出现字符 * 时，前面都匹配到有效的字符"，因此无需考虑"**"这样的问题

// 容易想到 dp[i][j] 表示 s[0, i) 与 p[0, j) 是否可以匹配
// 考虑 p 的第 j 个字符的匹配情况

// 如果 p[j] 不是 *
//   dp[i][j] = (s[i] === p[j] || p[j] === '.') ? dp[i-1][j-1] : false
// 如果 p[j] 是 *
//   dp[i][j] = (s[i] === p[j-1] || p[j-1] === '.')
//      ? dp[i-1][j] || dp[i][j-2]    ==> 当 s[i] 与 p[j-1] 能匹配上，分成两种情况，选择不匹配、选择继续向前匹配
//      : dp[i][j-2]                  ==> 当 s[i] 与 p[j-1] 匹配不上，自然看 p[j-2] 的状态

// 初始值 dp[0][0] = true, 两个空字符串可以匹配
function isMatch(s, p) {
    const m = s.length
    const n = p.length
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
    dp[0][0] = true

    // dp[0][j] 需要继续更新
    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p.charAt(j - 1) === '*') {
                // * 最早出现在第二个位置，所以 j - 2在这里是合理的
                dp[i][j] = dp[i][j - 2]
                if (i > 0 && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.')) {
                    dp[i][j] |= dp[i - 1][j]
                }
            } else {
                if (i > 0 && (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.')) {
                    dp[i][j] = dp[i - 1][j - 1]
                }
            }
        }
    }
    return dp[m][n]
}