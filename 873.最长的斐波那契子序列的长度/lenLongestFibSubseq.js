// 注意子序列的概念
// 3 <= arr.length <= 1000
// 1 <= arr[i] < arr[i+1] <= 10^9 （递增无重复）

// 显然是一道动态规划求解问题：重复子问题、最优子结构、无后效性

//【Result】：最长斐波那契式的子序列的长度

// 惯性思维：定义dp[i]为以arr[i]结尾的【Result】
// 但是当 arr[k] + arr[j] = arr[i] 成立时，不能保证存在 arr[t]，使得arr[t] + arr[k] = arr[j
// 一维缺乏必要的信息，至少需要明确两个元素

// 那么：定义dp[i][j]为以arr[i] arr[j]结尾的【Result】
// 初始值，dp[i][j] = 2, 因为已经包含了arr[i]和arr[j]这2个元素了，即便最小的【Result】都是3
// 寻找k，使得arr[k] + arr[i] === arr[j]，那么得到状态转移方程：
// dp[i][j] = Max{ arr[k] + arr[i] === arr[j] }(dp[k][i] + 1)

// 朴素解法
function lenLongestFibSubseq(arr) {
    let result = 0

    // 初始化二维DP，并赋初始值为2; 建立数组值-数组索引的映射，方便寻找 k
    const length = arr.length
    const dp = new Array(length)
    const map = {}
    for (let i = 0; i < length; i++) {
        dp[i] = new Array(length).fill(2)
        map[arr[i]] = i
    }
    // 遍历解空间（注意i，j的取值范围）
    for (let i = 1; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            const arrK = arr[j] - arr[i]
            // 优化点1：arrK in map的判断需要在后面
            if (arrK < arr[i] && arrK in map) {
                // 由于i，j确定时，k每行唯一，所以这里不用Math.max
                dp[i][j] = dp[map[arrK]][i] + 1
                result = Math.max(result, dp[i][j])
            }
        }
    }

    return result > 2 ? result : 0
}

// 优化方法
function lenLongestFibSubseq1(arr) {
    let result = 0

    // 初始化二维DP，并赋初始值为2：通过将二维数组平铺，简化代码，后面dp[i][j] 转换为 dp[i * length + j]
    const length = arr.length
    const dp = new Array(length * length).fill(2)
    // 建立数组值-数组索引的映射，方便寻找 k
    const map = {}
    for (let i = 0; i < length; i++) {
        map[arr[i]] = i
    }

    // 遍历解空间
    for (let i = 1; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            const arrK = arr[j] - arr[i]
            // 需要保证arrK 小于 arr[i]
            if (arrK < arr[i] && arrK in map) {
                dp[i * length + j] = dp[map[arrK] * length + i] + 1
                result = Math.max(result, dp[i * length + j])
            }
        }
    }

    return result > 2 ? result : 0
}
