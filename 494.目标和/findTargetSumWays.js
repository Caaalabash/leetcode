// 设：所有添加 - 号的和为 a，所有添加 + 号的和为 b，数组和为sum，数组最大元素为maxNum
// 有：(sum - a) - a = target
// 有：a = (sum - target) / 2
// 问题转换为在 nums 中寻找目标和为 (sum - target) / 2 的数目

// 简单的过滤条件
// 由于0 <= nums[i] <= 1000
// 1. target > sum，return 0
// 2. sum - target为奇数，return 0

// 然后进入 0-1 背包问题的套路
// dp定义：dp[i][j] => 在[0, i]区间中，和为j的方式数
// 初始值：dp[0][0] => 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1
// 因此，dp数组应该初始化为 (nums.length+1) * (realTarget+1) 求dp[nums.length][realTarget]

// 常见的nums[i]变成了nums[i-1]，因为dp数组初始化多了一个
// dp[i][j] = dp[i-1][j-nums[i-1]] (j >= nums[i-1])
// dp[i][j] = dp[i-1][j] (j < nums[i-1])
function findTargetSumWays(nums, target) {
  const sum = nums.reduce((acc, i) => acc += i, 0)
  if (target > sum) {
    return 0
  }
  const realTarget = (sum - target) / 2
  if (realTarget % 1 !== 0) {
    return 0
  }
  // 直接使用优化空间的dp求解
  const dp = new Array(realTarget+1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= nums.length; i++) {
    for (let j = realTarget; j >= nums[i-1]; j--) {
      dp[j] += dp[j - nums[i-1]]
    }
  }
  return dp[realTarget]
}