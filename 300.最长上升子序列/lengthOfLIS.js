// LIS
// 通常会想：dp[i][j] 代表 nums[i:j] 的 LIS的长度，但是这样推导不出来
// 正确定义：dp[i] 代表以 nums[i] 结尾的 LIS的长度
// 显然有初始值: dp[i] = 1
// 状态转移方程：dp[i] = max(dp[j]) + 1 (0 <= j < i && nums[j] < nums[i])

// 时间复杂度 O(n^2)
// 空间复杂度 O(n)
function lengthOfLIS(nums) {
    const l = nums.length
    const dp = new Array(l).fill(1)
    let result = 0

    for (let i = 0; i < l; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + 1
        result = Math.max(result, dp[i])
    }

    return result
}


// 二分
// 时间复杂度O(nlogn)
// 空间复杂度O(n)
function lengthOfLIS(nums) {
    const n = nums.length
    if (n <= 1) {
        return n
    }
    const d = [nums[0]]

    for (let i = 1; i < n; i++) {
        if (nums[i] > d[d.length - 1]) {
            d.push(nums[i])
            continue
        }
        let l = 0
        let r = d.length - 1
        while (l < r) {
            const mid = (l + r) >> 1
            if (d[mid] < nums[i]) {
                l = mid + 1
            } else {
                r = mid
            }
        }
        d[l] = nums[i]
    }
    return d.length
}

// 求LIS的一个解
function oneOfLIS(nums) {
    const n = nums.length
    if (n <= 1) {
        return nums
    }
    const prev = nums.slice()
    const result = [0] // 记录索引

    for (let i = 1; i < n; i++) {
        if (nums[result[result.length - 1]] < nums[i]) {
            prev[i] = result[result.length - 1]
            result.push(i)
            continue
        }
        let left = 0
        let right = result.length - 1
        while (left < right) {
            const mid = (left + right) >> 1
            if (nums[result[mid]] < nums[i]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (left > 0) {
            prev[i] = result[left - 1]
        }
        result[left] = i
    }
    let len = result.length
    let val = result[len - 1]
    while (len-- > 0) {
        result[len] = val
        val = prev[val]
    }
    return result
}
