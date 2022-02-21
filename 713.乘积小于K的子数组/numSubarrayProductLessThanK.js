// 给定一个正整数数组 nums和整数 k 。
// 请找出该数组内乘积小于 k 的连续的子数组的个数。

// 核心：
// 1. 使用双指针，或者说滑动窗口
// 2. 确定移动方式之后，搞清楚 right - left + 1的含义
// 3. 搞清楚边界条件
function numSubarrayProductLessThanK(nums, k) {
    if (k <= 1) {
        return 0
    }
    let result = 0
    let product = 1
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]
        while (product >= k) {
            product /= nums[left]
            left++
        }
        // 以索引right为结尾的子数组
        result += right - left + 1
    }
    return result
}