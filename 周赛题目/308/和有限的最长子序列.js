// 排序 + 前缀和 + 二分
function answerQueries(nums, queries) {
    nums.sort((a, b) => a < b ? -1 : 1)
    const preSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        preSum[i] = preSum[i - 1] + nums[i]
    }
    const result = []
    for (let i = 0; i < queries.length; i++) {
        const r = find(preSum, queries[i])
        if (r === -1) {
            result.push(0)
        } else {
            result.push(r + 1)
        }
    }
    return result
}

// 找到索引，使得nums[k] <= target
function find(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    if (nums[left] > target) {
        left--
    }
    return left
}