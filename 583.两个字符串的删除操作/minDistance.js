// 按照惯例
// 设 dp[i][j] 为 word1[:i] 和 word2[:j] 相同的最小步数

// word1[i] === word2[j] 时：
//   dp[i][j] = dp[i-1][j-1]
// word1[i] !== word2[j] 时：
//   dp[i][j] = min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 2)

// 初始值 dp[0][0] = word1[0] === word2[0] ? 0 : 2
function minDistance(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    const dp = new Array(len1)
    for (let i = 0; i < len1; i++) {
        dp[i] = new Array(len2)
    }
    dp[0][0] = word1.charAt(0) === word2.charAt(0) ? 0 : 2
    for (let i = 1; i < len1; i++) {
        if (word1.charAt(i) === word2.charAt(0)) {
            dp[i][0] = i
        } else {
            dp[i][0] = dp[i - 1][0] + 1
        }
    }
    for (let j = 1; j < len2; j++) {
        if (word2.charAt(j) === word1.charAt(0)) {
            dp[0][j] = j
        } else {
            dp[0][j] = dp[0][j - 1] + 1
        }
    }
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (word1.charAt(i) === word2.charAt(j)) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 2
                )
            }
        }
    }
    return dp[len1 - 1][len2 - 1]
}

// 考虑空字符串的写法
// 设 dp[i][j] 为 word1[:i] 和 word2[:j] 相同的最小步数
// dp[0][0] 表示两个空字符串，最小步数为 0
// 显然 dp[i][0] = i; dp[0][j] = j
function minDistance(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    // 初始化dp
    const dp = new Array(len1 + 1)
    for (let i = 0; i <= len1; i++) {
        dp[i] = new Array(len2 + 1).fill(0)
    }
    // 初始值
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = i
    }
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 2
                )
            }
        }
    }
    return dp[len1][len2]
}