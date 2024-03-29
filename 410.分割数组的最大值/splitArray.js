// DP
// 存在两个状态：数组长度、分割的数组数，因此需要二维DP
// 设题目需要的解为：【R】
// dp[i][j]: 代表 nums[0:i] 分割成 j 个连续子数组的【R】
// 考虑最后一个分割数组，可以得到状态转移方程
// dp[i][j] = Min(Max(dp[k][j-1]), sum(nums[k+1:i]))，其中 0 <= k < i

// 边界情况
// j >= i的情况：初始化一个较大值即可，不影响计算
// dp[i][1] = sumArr[i + 1]
function splitArray(nums, m) {
    const n = nums.length
    // 前缀和预处理，求出区间数组和
    const sumArr = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i]
    }
    // 初始化二维DP
    const dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m + 1).fill(Number.MAX_SAFE_INTEGER)
        // 当分割成一个子数组时，就是前缀和
        dp[i][1] = sumArr[i + 1]
    }
    // 确定遍历范围
    // i遍历范围：[1, n)
    // j遍历范围：[2, m]
    // k遍历范围：[0, i)，进一步确定 [j-2, i)
    for (let i = 1; i < n; i++) {
        for (let j = 2; j <= m; j++) {
            for (let k = j - 2; k < i; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    Math.max(
                        dp[k][j - 1],
                        sumArr[i + 1] - sumArr[k + 1]
                    )
                )
            }
        }
    }

    return dp[n - 1][m]
}