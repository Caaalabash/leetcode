// 暴力，侥幸没有超时
function goodIndices(nums, k) {
    const n = nums.length
    const result = []
    outer:
    for (let i = k; i < n - k; i++) {
        // i之前k个非递增
        let prev = nums[i - k]
        for (let j = k - 1; j > 0; j--) {
            if (nums[i - j] > prev) {
                continue outer
            }
            prev = nums[i - j]
        }
        prev = nums[i + 1]
        // i之后k个非递减
        for (let j = 2; j <= k; j++) {
            if (nums[i + j] < prev) {
                continue outer
            }
            prev = nums[i + j]
        }
        result.push(i)
    }
    return result
}

// 递推 + 枚举
// 维护f[i]表示第i个下标为结尾的非递增连续子数组最长是多少 (<=)
// 维护g[i]表示第i个下标为开头的非递减连续子数组最少是多少 (>=)
// 好下标满足 f[i-1] >= k && g[i+1] >= k
function goodIndices(nums, k) {
    const n = nums.length
    const f = new Array(n).fill(1)
    const g = new Array(n).fill(1)
    const result = []
    for (let i = 1; i < n; i++) {
        if (nums[i] <= nums[i - 1]) {
            f[i] = f[i - 1] + 1
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= nums[i + 1]) {
            g[i] = g[i + 1] + 1
        }
    }
    for (let i = k; i < n - k; i++) {
        if (f[i - 1] >= k && g[i + 1] >= k) {
            result.push(i)
        }
    }
    return result
}