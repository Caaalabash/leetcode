// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。
// 如果不存在满足条件的子数组，则返回 0 。
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^9
// 0 <= limit <= 10^9

// 滑动窗口 + 单调栈
// 使用栈顶到栈底单减的队列queMin维护最小值
// 使用栈顶到栈底单增的队列queMax维护最大值
// 这样我们只需要计算两个队列的队首的差值，即可知道当前窗口是否满足条件
function longestSubarray(nums, limit) {
  const queMin = []
  const queMax = []
  let left = 0
  let right = 0
  let result = 0
  while (right < nums.length) {
    while (queMax.length && nums[right] > queMax[queMax.length - 1]) {
      queMax.pop()
    }
    while (queMin.length && nums[right] < queMin[queMin.length - 1]) {
      queMin.pop()
    }
    queMax.push(nums[right])
    queMin.push(nums[right])
    while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
      if (nums[left] === queMin[0]) {
        queMin.shift()
      }
      if (nums[left] === queMax[0]) {
        queMax.shift()
      }
      left++
    }
    result = Math.max(result, right - left + 1)
    right++
  }
  return result
}

