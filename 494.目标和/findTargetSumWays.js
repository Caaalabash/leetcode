// 由于 (sum - 作为正数的数字和) - 作为正数的数字和 = target
// 所以目标和为 target 转换为目标和为 (sum - target) / 2
// 每个元素的状态也从"添加加号"、"添加减号" 变成了 "选"、"不选"
// 问题转换为01背包问题
function findTargetSumWays(nums, target) {
  // 排除基本情况
  const sum = nums.reduce((acc, i) => acc += i, 0)
  if (target > sum) {
    return 0
  }
  const realTarget = (sum - target) / 2
  if (realTarget % 1 !== 0) {
    return 0
  }
  // 直接使用优化空间的dp求解
  const dp = new Array(realTarget + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= nums.length; i++) {
    for (let j = realTarget; j >= nums[i - 1]; j--) {
      dp[j] += dp[j - nums[i - 1]]
    }
  }
  return dp[realTarget]
}
