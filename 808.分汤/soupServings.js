// 概率P = (A先分配完的概率) + (AB同时分配完的概率/2)

// 误差值:
// 题目提到“返回值在 10^-6 (即0.000001) 的范围将被认为是正确的”
// 综合四种分配方式，可以得出A和B的分配比为(100+75+50+25):(0+25+50+75) = 5:3
// 所以当N足够大时，概率P为1
// 因此还需要求出一个常数C，当 N>=C 时，概率P >= 0.999999
// if n >= c return 1.0
// 关于C值的计算，可以不考虑数学逻辑，直接写出dp解法后尝试出来，答案中什么数值都有，这边计算出来是5551
// 显然，不管合理与否，这个值越小，执行效率越高- -

// 归一化：
// 将分配比例缩小 25 倍，可以降低 dp 数组空间消耗
//   四种分配方式变为： [4, 0] [3, 1] [2, 2] [1, 3]
//   N变为： N = Math.ceil(N / 25)，因为 0 也是一种分配方式，不能丢弃

// dp定义：
// dp[i][j] 代表 A 剩余 i 毫升，B 剩余 j 毫升时，所求的概率 P

// 状态转移方程：
// dp[i][j] = 0.25 * ( dp[i-4][j] + dp[i-3][j-1] + dp[i-2][j-2] + dp[i-1][j-3] )

// 边界条件：
// dp[0][0] = 0.5 => AB已经同时分配完，概率P为0.5
// dp[i][0] = 0 => B已经先分配完，概率P为0
// dp[0][j] = 1 => A已经先分配完，概率P为1
function soupServings(n) {
    // 较大n，直接返回1.0
    if (n >= 5551) {
        return 1.0
    }
    // 归一化
    n = Math.ceil(n / 25)
    // 求dp[n][n]
    const dp = []
    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) dp[i][j] = 0.5
            else if (i === 0) dp[0][j] = 1
            else if (j === 0) dp[i][0] = 0
            else {
                dp[i][j] = 0.25 * (
                    dp[Math.max(i-4, 0)][j] +
                    dp[Math.max(i-3, 0)][Math.max(j-1, 0)] +
                    dp[Math.max(i-2, 0)][Math.max(j-2, 0)] +
                    dp[Math.max(i-1, 0)][Math.max(j-3, 0)]
                )
            }
        }
    }
    return dp[n][n]
}