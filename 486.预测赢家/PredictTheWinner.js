// 预测玩家1能否成为赢家

// dp[i][j] 表示在下标范围 [i, j] 中，当前玩家与另一个玩家的分数之差的最大值，注意当前玩家不一定是先手。
// 显然有：
// (1) i = j时，dp[i][j] = nums[i]
// (2) i > j时，dp[i][j] = 0
// (3) i < j时，存在两种情况
//   (3.1) 先手选择L，让后手进入 dp[L+1, R] 的回合
//   (3.2) 先手选择R，让后手进入 dp[L, R-1] 的回合
//   得出 dp[i][j] = Max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
function PredictTheWinner(nums) {
    const length = nums.length
    const dp = Array.from({ length }, () => Array.from({ length }, () => 0))
    for (let i = 0; i < length; i++) {
        dp[i][i] = nums[i]
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
        }
    }
    return dp[0][length - 1] >= 0
}