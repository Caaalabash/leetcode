// 容易想到：dp[i][j] = s的前i个字符 与 p的前j个字符 是否匹配 （存在空字符的情况）

// 如果 s[i] === p[j] || p[j] === '?'，显然有：
//   dp[i][j] = dp[i-1][j-1]
// 如果 p[j] === '*'，此时的选择为：是否使用这个通配符
//   dp[i][j] = dp[i-1][j] (使用) || dp[i][j-1] (不使用)

// 初始值
// dp[0][0] => true，均为空字符串，能匹配成功
// dp[i][0] => false，空模式，均不能匹配成功
// dp[0][j] => 只有当前 j 个均为 '*' 能匹配成功

// 时空复杂度均为O(mn)
function isMatch(s, p) {
    const m = s.length
    const n = p.length
    const dp = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false)
    }
    dp[0][0] = true
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = true
        } else {
            break
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
            }
        }
    }
    return dp[m][n]
}