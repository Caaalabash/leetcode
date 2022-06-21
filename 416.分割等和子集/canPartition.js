// 01背包问题
// 设dp[i][j]为：前[0, i]个元素和为j，能否求出【题目问题】
// 显然有
//   dp[i][j] = dp[i - 1][j] (不取i)
//   dp[i][j] = dp[i - 1][j - nums[i]] (取i)
// 初始值有
//   dp[0][nums[0]] = true (取第一个，和为nums[0])
//   dp[i][0] = true (不取，和为0)

// 直接写01背包的优化方程
// dp[j] = dp[j] || dp[j - nums[i]]
// dp[0] = true
function canPartition(nums) {
    // 排除数组长度不够、和为奇数、最大值超过数组一半的情况
    const n = nums.length
    if (n <= 1) {
        return false
    }
    let sum = 0
    let max = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        max = Math.max(max, nums[i])
    }
    if (sum % 2 !== 0) {
        return false
    }
    const target = sum / 2
    if (max > target) {
        return false
    }
    // dp优化方程
    const dp = new Array(target + 1).fill(0)
    dp[0] = true
    for (let i = 1; i < n; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] |= dp[j - nums[i]]
        }
    }
    return dp[target]
}