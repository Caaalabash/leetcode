// 设：数组和为sum，数组最大元素为maxNum

// 简单的过滤
// 0. nums.length < 2，return false
// 1. sum为奇数，return false
// 2. maxNum > sum/2，return false

// 然后进入 0-1 背包套路
// dp[i][j]: 前[0, i)个元素和为 j，能否分割成两个子集，使得两个子集的元素和相等
// 初始值：
//   dp[0][nums[0]] = true    选第一个，和为第一个 = true
//   dp[i][0] = true          不选，和为0        = true
// 状态转移方程
//   dp[i][j] = dp[i-1][j] (j < nums[i])
//   dp[i][j] = dp[i-1][j-nums[i]] (j > nums[i])
// dp数组初始化为 (n) * (target + 1)，求dp[n-1][target]
function canPartition(nums) {
  const n = nums.length
  if (n < 2) {
    return false
  }
  let sum = 0
  let maxNum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    maxNum = nums[i] > maxNum ? nums[i] : maxNum
  }
  const target = sum / 2
  if (target % 1 !== 0) {
    return 0
  }
  if (maxNum > target) {
    return 0
  }
  // 直接使用优化空间的dp求解
  const dp = new Array(target + 1).fill(false)
  dp[0] = true
  for (let i = 1; i < n; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] |= dp[j - nums[i]]
    }
  }
  return dp[target]
}