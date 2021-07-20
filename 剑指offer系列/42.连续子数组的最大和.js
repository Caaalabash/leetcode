// 简单动态规划

// 同53题目
// 状态：dp[i]代表着以nums[i]结尾的最大的子序列和
// 状态转移方程：dp[i] = Math.max(dp[i-1] + nums[i], nums[i]) => 滚动数组优化空间
// 初始值：dp[0] = nums[0]
function maxSubArray(nums) {
  let prev = nums[0]
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    result = Math.max(result, prev)
  }
  return result
}