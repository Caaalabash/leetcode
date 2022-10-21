// 将n份兼职工作按照结束时间升序排列
// 设dp[i]为索引[0, i]份工作能够获得的最大报酬，那么对于索引i工作有选或者不选两种情况：
// 有dp[i] = max(dp[i - 1], dp[k] + profit[i]), k表示满足结束时间<=第i份工作开始时间的兼职
// 初始状态dp[0] = profit[0]
function jobScheduling(startTime, endTime, profit) {
    const n = profit.length
    const range = startTime.map((t, i) => [t, endTime[i], profit[i]]).sort((a, b) => a[1] < b[1] ? -1 : 1)
    const dp = new Array(n).fill(0)
    dp[0] = range[0][2]
    for (let i = 1; i < n; i++) {
        const startTime = range[i][0]
        let left = 0
        let right = i - 1
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (range[mid][1] <= startTime) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (range[left][1] > startTime) {
            left--
        }
        dp[i] = Math.max(dp[i - 1], (left === -1 ? 0 : dp[left]) + range[i][2])
    }
    return dp[n - 1]
}

// 设dp[i]为索引[0, i)份工作能够获得的最大报酬时，代码会精简一点
// dp[i] = max(dp[i - 1], dp[k] + profit[i - 1])
function jobScheduling(startTime, endTime, profit) {
    const n = profit.length
    const range = startTime.map((t, i) => [t, endTime[i], profit[i]]).sort((a, b) => a[1] < b[1] ? -1 : 1)
    const dp = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        const startTime = range[i - 1][0]
        let left = 0
        let right = i - 1
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (range[mid][1] <= startTime) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        dp[i] = Math.max(dp[i - 1], dp[left] + range[i - 1][2])
    }
    return dp[n]
}