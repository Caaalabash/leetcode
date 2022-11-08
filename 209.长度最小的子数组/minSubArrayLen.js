// 暴力两次for循环：O(n^2)
// 二分法（前缀和是单增的，内层循环用二分法替代：O(nlogn)
// 滑动窗口：O(n)
function minSubArrayLen(target, nums) {
    const n = nums.length
    let sum = 0
    let left = 0
    let right = 0
    let result = Number.MAX_VALUE

    while (right < n) {
        sum += nums[right]
        while (sum >= target) {
            result = Math.min(result, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }

    return result === Number.MAX_VALUE ? 0 : result
}