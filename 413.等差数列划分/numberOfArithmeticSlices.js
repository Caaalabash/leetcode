// 设 dp[i] 为 nums[0:i] 中等差子数组的个数
// 如果 nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]：
//     dp[i] = dp[i - 1] + 1 + dp[i - 1] - dp[i - 2]，其中 dp[i - 1] - dp[i - 2] 表示引入 nums[i - 1] 后带来的增量，这些增量nums[i]也能受益
// 否则：
//     dp[i] = dp[i - 1]
function numberOfArithmeticSlices(nums) {
    const N = nums.length
    if (N < 3) return 0

    const dp = new Array(N).fill(0)

    for (let i = 2; i < N; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1  + dp[i - 1] - dp[i - 2]
        } else {
            dp[i] = dp[i - 1]
        }
    }

    return dp[N - 1]
}