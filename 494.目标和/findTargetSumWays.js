// 数组元素和为 sum，添加减号的元素和为neg，则添加加号的元素和为sum-neg
// 可得 (sum-neg) - neg = target ===> neg = (sum - target) / 2
// 本题转换为：在数组 nums 中选取若干元素，使得这些元素之和等于 neg 的方案数
function findTargetSumWays(nums, target) {
  const sum = nums.reduce((acc, i) => (acc += i), 0)
  if (sum - target < 0 || (sum - target) % 2 === 1) return 0
  const realTarget = (sum - target) / 2
  // 初始化dp数组n+1的原因：在考虑初始值的时候，没有方案也是一种方案
  // dp[i][j] = 选取前i个数，其和为j的方案数量，需要求dp[n][realTarget]
  const n = nums.length
  const dp = Array.from({ length: n + 1 },
    () => Array.from({ length: realTarget + 1 },
      () => 0)
  )
  // 如果没有任何元素可选，和为0，方案数为1
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= realTarget; j++) {
      dp[i][j] = dp[i-1][j]
      if (j >= nums[i-1]) {
        dp[i][j] += dp[i-1][j-nums[i-1]]
      }
    }
  }
  return dp[n][realTarget]
}

function findTargetSumWays1(nums, target) {
  const sum = nums.reduce((acc, i) => (acc += i), 0)
  if (sum - target < 0 || (sum - target) % 2 === 1) return 0
  const realTarget = (sum - target) / 2
  // 初始化dp数组n+1的原因：在考虑初始值的时候，没有方案也是一种方案
  // dp[i][j] = 选取前i个数，其和为j的方案数量，需要求dp[n][realTarget]
  const n = nums.length
  const dp = Array.from({ length: realTarget + 1 }, () => 0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = realTarget; j >= nums[i-1]; j--) {
      dp[j] += dp[j-nums[i-1]]
    }
  }
  return dp[realTarget]
}