function canPartition(nums) {
  // 排除的一些条件
  // 1. nums.length < 2
  // 2. sum(nums)为奇数
  // 3. max(nums) > sum/2
  const n = nums.length
  if (n < 2) {
    return false
  }
  let sum = 0
  let maxNum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    maxNum = nums[i] > maxNum ? nums[i] : maxNum
  }
  if (sum % 2 === 1) {
    return false
  }
  const target = sum / 2
  if (maxNum > target) {
    return false
  }
  // 动态规划的背包问题
  // dp[i][j]：从数组的 [0, i] 这个子区间内挑选一些正整数，使得这些数的和恰好等于 j => 求出 dp[n-1][target]
  const dp = Array.from({ length: n }, () => Array.from({ length: target + 1 }, () => false))
  // 初始值
  // dp[i][0] = true
  // dp[0][nums[0]] = true
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true
  }
  dp[0][nums[0]] = true
  // 比较nums[i]（当前要选择的物品）与j（背包容量）的关系
  // 如果j < nums[i] => dp[i][j] = dp[i-1][j]
  // 如果j >= nums[i] => dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
      }
    }
  }
  return dp[n-1][target]
}

// 空间压缩
function canPartition1(nums) {
  const n = nums.length
  if (n < 2) {
    return false
  }
  let sum = 0, maxNum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    maxNum = nums[i] > maxNum ? nums[i] : maxNum
  }
  if (sum % 2 === 1) {
    return false
  }
  const target = sum / 2
  if (maxNum > target) {
    return false
  }
  const dp = Array.from({ length: target + 1 }).fill(false)
  dp[0] = true
  for (let i = 0; i < n; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[target]
}