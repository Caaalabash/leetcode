// 最高频元素的频数
// 元素的 频数 是该元素在一个数组中出现的次数。
// 给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。
// 执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。

// 滑动窗口
// 容易想到，首先排序数组
// 找到某一段区间内，每个值与该区间内最后一个值相差的总和，不超过目标k的最大值
function maxFrequency(nums, k) {
    nums.sort((a, b) => a-b)
    let result = 1
    let left = 0
    let count = 0

    for (let right = 1; right < nums.length; right++) {
        // 区间[l, r]之间的元素全部变成nums[r]所需要的增量操作数
        count += (nums[right] - nums[right-1]) * (right - left)
        // 如果操作数超过了限制K，就要减去最小元素的次数
        while (count > k) {
            count -= nums[right] - nums[left]
            left++
        }
        result = Math.max(result, right-left+1)
    }

    return result
}