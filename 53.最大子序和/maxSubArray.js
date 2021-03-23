// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 状态：dp[i]代表着以nums[i]结尾的最大的子序列和
// 状态转移方程：dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
// 初始值：dp[0] = nums[0]
// 输出：输出dp数组的最大值即可
function maxSubArray(nums) {
    const dp = Array.from({ length: nums.length }, () => 0)
    let result = nums[0]
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
        result = Math.max(result, dp[i])
    }
    return result
}

// 优化dp数组，将空间复杂度从O(n) 变成 O(1)
function maxSubArray(nums) {
    let prev = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        result = Math.max(result, prev)
    }
    return result
}