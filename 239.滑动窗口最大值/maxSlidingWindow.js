// 滑动窗口的最大值
// 1 <= k <= nums.length
// -10^4 <= nums[i] <= 10^4

// 基础版本：O(nk)的时间复杂度
function maxSlidingWindow(nums, k) {
    const result = []
    let left = 0
    let right = k-1
    for (;right < nums.length; right++) {
        let curMax = -10001
        // 此处需要 O(k)
        for (let i = left; i <= right; i++) {
            curMax = Math.max(curMax, nums[i])
        }
        result.push(curMax)
        left++
    }
    return result
}

// 固定大小窗口+单增队列
// 如何在O(1)的时间内算出窗口的最大值
function maxSlidingWindow(nums, k) {
  const queue = []
  // 单调栈/队列模版
  // 维护前k个数的单调队列
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
  }

  const result = [nums[queue[0]]]
  let right = k

  while (right < nums.length) {
    while (queue.length && nums[right] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(right)
    while (queue[0] <= right - k) {
      queue.shift()
    }
    result.push(nums[queue[0]])
    right++
  }

  return result
}
