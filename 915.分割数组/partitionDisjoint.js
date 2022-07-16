// 2 <= nums.length <= 10^5
// RANK 1500
function partitionDisjoint(nums) {
    // 维护三个变量：当前遍历的最大值、可能解的最大值、可能解的结束索引
    let max = nums[0]
    let leftMax = nums[0]
    let pos = 0
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        if (nums[i] < leftMax) {
            pos = i
            leftMax = max
        }
    }
    return pos + 1
}

// 正向遍历，维护max[i], 为nums[0:i] 的最大值
// 逆向遍历，维护min[i], 为nums[i:] 的最小值
// 比较max、min数组，如果 max[i] < min[i+1], 答案找到
function partitionDisjoint(nums) {
    const length = nums.length
    const max = new Array(length)
    const min = new Array(length)
    max[0] = nums[0]
    min[length - 1] = nums[length - 1]

    for (let i = 1; i < length; i++) {
        max[i] = Math.max(max[i - 1], nums[i])
    }
    for (let i = length - 2; i >= 0; i--) {
        min[i] = Math.min(min[i + 1], nums[i])
    }
    for (let i = 0; i < length - 1; i++) {
        if (max[i] <= min[i + 1]) {
            return i + 1
        }
    }
    return -1
}