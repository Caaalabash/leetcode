// 最大连续1的个数3
// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
// 返回仅包含 1 的最长（连续）子数组的长度。
// 1 <= A.length <= 20000
// 0 <= K <= A.length

// 前缀和 + 滑动窗口
function longestOnes(nums, k) {
  let result = 0
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (nums[right] === 0) {
      k--
    }
    while (k < 0) {
      if (nums[left] === 0) {
        k++
      }
      left++
    }
    result = Math.max(result, right - left + 1)
    right++
  }

  return result
}
