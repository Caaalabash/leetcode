// 动态规划
// 题目要求等价于：选出最多数量的区间。使得他们互不重叠
// 首先按照端点（左右都可以）从小到大进行排序

// 设 dp[i] 为「以 intervals[i] 为最后一个区间，可以选出的最多数量的区间」
// 状态转移方程：
// dp[i] = Max(dp[j]) + 1，其中， j < i && intervals[j][1] <= intervals[i][0]
// 初始值：
// dp[i] = 1

// O(n^2)，超时
function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const len = intervals.length
    const dp = new Array(len).fill(1)

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return len - Math.max(...dp)
}

// 贪心选择性质：局部最优解可以得到全局最优解
function eraseOverlapIntervals(intervals) {
    // 按照右边界排序，右边界结束的越早，留给后面的区间的空间就越大，不重合的区间个数就越多
    intervals.sort((a, b) => a[1] - b[1])

    const len = intervals.length
    let right = intervals[0][1]
    let result = 1

    for (let i = 1; i < len; i++) {
        // 不重叠
        if (intervals[i][0] >= right) {
            result++
            right = intervals[i][1]
        }
    }

    return len - result
}