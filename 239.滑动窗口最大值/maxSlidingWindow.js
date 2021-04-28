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