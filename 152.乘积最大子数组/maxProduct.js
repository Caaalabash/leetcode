// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 既然能返回乘积，那这里就不考虑溢出的问题
// 考虑动态规划的做法：
// dp[i]表示以第 i 个元素为结尾的乘积最大子数组的乘积
// dp[i] = Math.max(dp[i-1] * nums[i], nums[i]) ==> 滚动数组优化

// 但是存在负负得正的情况，因此需要两个dp数组
function maxProduct(nums) {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    let result = Number.MIN_VALUE
    let max = 1
    let min = 1
    for (let i = 0; i < nums.length; i++) {
        // 如果当前值是个负数，那么会导致最大的变最小的，最小的变最大的。因此交换两个的值
        if (nums[i] < 0) {
            [max, min] = [min, max]
        }
        // 滚动数组优化：dp[i] = Math.max(dp[i - 1] * nums[i], nums[i])
        max = Math.max(max * nums[i], nums[i])
        // 滚动数组优化：dp[i] = Math.min(dp[i - 1] * nums[i], nums[i])
        min = Math.min(min * nums[i], nums[i])
        result = Math.max(result, max)
    }
    return result
}