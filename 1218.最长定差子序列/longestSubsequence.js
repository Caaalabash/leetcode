// 最长定差子序列，子序列中相邻元素之间的差定义为 arr[i+1] - arr[i-1] = difference

// 设dp[i]为以nums[i]结尾的最长定差子序列的长度
// 有 dp[i] = MAX(dp[j]) + 1 (0 < j < i && arr[i] - arr[j] === difference)
// 那么解法等于300题，时间复杂度为O(n^2)，在此题中会超时，需要优化状态转移方程

// 偷懒使用300题的超时做法
function longestSubsequence(arr, difference) {
    const l = arr.length
    const dp = new Array(l).fill(1)
    let maxLen = 0

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] - arr[j] === difference) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i]
        }
    }

    return maxLen
}

// 正确做法
// 优化方式非常简单 dp[i] = dp[i - difference] + 1
function longestSubsequence1(arr, difference) {
    // 惊了：不是数组，惯性思维使用dp数组了，本质上它是一个对子问题的缓存
    const dp = {}
    let maxLen = 0

    for (let i = 0; i < arr.length; i++) {
        dp[arr[i]] = (dp[arr[i] - difference] || 0) + 1
        maxLen = Math.max(maxLen, dp[i])
    }

    return maxLen
}