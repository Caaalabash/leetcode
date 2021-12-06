// [Result]: 凑成金额n的总组合数量。
// 组合定义：Combination，顺序无影响。
// dp[i]定义：金额i的[Result]，需要求出dp[amount]
// 初始值：dp[0] = 1
// 状态转移方程： dp[i] += dp[i - each(coins)]
function change(amount, coins) {
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
}