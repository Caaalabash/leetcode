// LIS
// 通常会想：dp[i][j] 代表 nums[i:j] 的 LIS的长度，但是这样推导不出来
// 正确定义：dp[i] 代表以 nums[i] 结尾的 LIS的长度
// 显然有初始值: dp[i] = 1
// 状态转移方程：dp[i] = max(dp[j]) + 1 (0 <= j < i && nums[j] < nums[i])

// 时间复杂度 O(n^2)
// 空间复杂度 O(n)
function lengthOfLIS(nums) {
    const l = nums.length
    const dp = new Array(l).fill(1)
    let result = 0

    for (let i = 0; i < l; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + 1
        result = Math.max(result, dp[i])
    }

    return result
}
