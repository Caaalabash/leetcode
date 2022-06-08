// 切入点是点积
// dp[i][j] 代表 nums1[:i] 和 nums2[:j] 子序列的最大点积
// 对于nums[i]和nums[j]，有五种选择:
//   【仅选择i, j】【选择i，j，且继续向前选】【选择i，不选择j】【选择j，不选择i】【i、j都不选择】
// 所以能得到状态转移方程
// dp[i][j] = Max(dp[i-1][j-1] + nums[i]*nums[j], nums[i]*nums[j], dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
// 其中，dp[i-1][j-1] 会在 dp[i-1][j] or dp[i][j-1] 中被计算到，可以省略

// 最终：
// dp[i][j] = Max(dp[i-1][j-1] + X(ij), X(ij), dp[i-1][j], dp[i][j-1])
function maxDotProduct(nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
    }

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            const xij = nums1[i] * nums2[j]
            dp[i][j] = xij
            if (i > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
            }
            if (j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j - 1])
            }
            if (i > 0 && j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + xij)
            }
        }
    }
    return dp[m - 1][n - 1]
}

// 写法上的优化，初始化时，多一列
function maxDotProduct(nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-10000001))

    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            const dot = nums1[i - 1] * nums2[j - 1]
            dp[i][j] = Math.max(
                dot,
                dp[i - 1][j - 1] + dot,
                dp[i - 1][j],
                dp[i][j - 1]
            )
        }
    }
    return dp[m][n]
}