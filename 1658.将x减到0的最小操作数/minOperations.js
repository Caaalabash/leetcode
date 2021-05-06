// 给你一个整数数组 nums 和一个整数 x 。
// 每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。
// 请注意，需要 修改 数组以供接下来的操作使用。
// 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
// 1 <= x <= 109

// 滑动窗口
function minOperations(nums, x) {
  // 求数组和
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  const windowSumTarget = sum - x
  // 如果目标元素和小于0，直接返回
  if (windowSumTarget < 0) {
    return -1
  }
  // 寻找一个连续窗口，窗口内元素和 = sum - x
  let left = 0
  let right = 0
  let operateCount = Number.MAX_VALUE
  let windowSum = 0
  while (right < nums.length) {
    windowSum += nums[right]
    while (windowSum > windowSumTarget) {
      windowSum -= nums[left]
      left++
    }
    if (windowSum === windowSumTarget) {
      operateCount = Math.min(operateCount, nums.length - (right - left + 1))
    }
    right++
  }
  return operateCount === Number.MAX_VALUE ? -1 : operateCount
}
