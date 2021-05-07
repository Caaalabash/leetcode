// 给你一个整数数组 nums 和一个整数 target
// 请你统计并返回 nums 中能满足其最小元素与最大元素的 和 小于或等于 target 的 非空子序列的数目。
// 由于答案可能很大，请将结果对 10^9 + 7 取余后返回。

// 由于是子序列，不要求连续，所以可以排序
function numSubseq(nums, target) {
  nums.sort((a, b) => a < b ? -1 : 1)
  // 预处理计算出幂值表
  const pow = [1]
  for (let i = 1; i < nums.length; i++) {
    pow[i] = (pow[i-1] << 1) % 1000000007
  }
  let count = 0
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[left] + nums[right] > target) {
      right--
    } else {
      // 如果区间[l, r]满足l + r <= target, 只要含有l的子序列全都满足
      count = (count + pow[right - left]) % 1000000007
      left++
    }
  }
  return count
}
