// 动态规划
// 设dp[i]为以nums[i]结尾的最长优雅子数组长度，显然有初始值 dp[i] = 1
function longestNiceSubarray(nums) {
    const n = nums.length
    const dp = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        let valid = true
        let breakIndex = -1
        for (let k = 1; k <= dp[i - 1]; k++) {
            if ((nums[i] & nums[i - k]) !== 0) {
                valid = false
                breakIndex = k
                break
            }
        }
        if (valid) {
            dp[i] = Math.max(dp[i], dp[i - 1] + 1)
        } else {
            dp[i] = Math.max(dp[i], breakIndex)
        }
    }
    return Math.max(...dp)
}

// 滑动窗口
// 优雅子数组的所有元素按位与均为0
// 使用 or 记录和
function longestNiceSubarray(nums) {
    let result = 0
    for (let left = 0, right = 0, or = 0; right < nums.length; right++) {
        while ((or & nums[right]) > 0) {
            or ^= nums[left++]
        }
        or |= nums[right]
        result = Math.max(result, right - left + 1)
    }
    return result
}