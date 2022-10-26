// 前缀和+暴力求所有区间超时
function shortestSubarray(nums, k) {
    if (nums.length === 1) {
        return nums[0] >= k ? 1 : -1
    }
    // 计算前缀和
    const sumArr = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        sumArr[i] = sumArr[i - 1] + nums[i]
    }
    sumArr.unshift(0)
    let windowSize = 1
    // 此处超时，O(n^2)时间复杂度
    while (windowSize <= nums.length) {
        for (let i = 0; i <= nums.length - windowSize; i++) {
            if (sumArr[i + windowSize] - sumArr[i] >= k) {
                return windowSize
            }
        }
        windowSize++
    }
    return -1
}

// 单调队列
function shortestSubarray(nums, k) {
    const n = nums.length
    // 这样定义前缀和更佳：sumArr[right] - sumArr[left] = 区间[left, right)的和
    const sumArr = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i]
    }
    let result = Infinity
    const queue = []
    // 遍历前缀和数组，用一个单调队列取维护满足条件的区间的左边界下标
    for (let i = 0; i <= n; i++) {
        // 满足条件即出队
        while (queue.length && sumArr[i] - sumArr[queue[0]] >= k) {
            result = Math.min(result, i - queue.shift())
        }
        // 维护一个单增的单调队列
        while (queue.length && sumArr[queue[queue.length - 1]] >= sumArr[i]) {
            queue.pop()
        }
        queue.push(i)
    }
    return result === Infinity ? -1 : result
}