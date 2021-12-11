// dp[i]: 以nums[i]结尾的最长严格递增子序列的长度
// 详细的可以参考673题
function lengthOfLIS(nums) {
    const l = nums.length
    const dp = new Array(l).fill(1)
    let maxLen = 0

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j]
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i]
        }
    }

    return maxLen
}
