// 最长等差数列
// 设：dp[i] = 以 nums[i] 结尾的等差子序列的长度
// 考虑到 dp[i] 与 dp[i - 1] 的关系时，会发现无法计算等差值是多少，因此需要另一个状态存储等差值

// 那么设：dp[i][j] = 以 nums[i] 结尾的等差子序列的最小长度，等差值为 j
// 注意，等差值会为负值，所以对于每个j，都加上 500 的偏移量（题目数据范围），使之为正数
// 有：dp[i][j] = Min(dp[k][j] + 1)，其中 nums[i] - nums[k] = j && 0 <= k < i

// 考虑初始值：初始化为1
function longestArithSeqLength(nums) {
    const n = nums.length
    const dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(1001).fill(1)
    }

    let ans = 0

    for (let i = 1; i < n; i++) {
        for (let k = 0; k < i; k++) {
            const j = nums[i] - nums[k] + 500
            dp[i][j] = Math.max(dp[i][j], dp[k][j] + 1)
            ans = Math.max(ans, dp[i][j])
        }
    }

    return ans
}