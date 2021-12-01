// 动态规划
// dp定义：设dp[n]为整数n拆分为至少2个正整数之后的最大乘积
// 初始值： dp[0] = 0  dp[1] = 0
// 状态转移方程 dp[i] = Max{ 1 <= j < i }( Max( j * (i - j),  j * dp[i - j] ) )

// 具体分析：
// 假设将整数 i 拆分成 j 和 i-j，其中 j 不再拆分，对于 i-j 有拆分和不拆分两种决策，可以得到：
// dp[i] = Max(j * (i - j), j * dp[i - j])
// 由于j的取值范围为[1, i)，所以推出上方的状态转移方程

// 本题了解这个解法足够了，动态规划优化解法看起来也是一种数学解法，pass
function integerBreak(n) {
    const dp = new Array(n+1).fill(0)

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(dp[i - j] * j, (i - j) * j))
        }
    }

    return dp[n]
}