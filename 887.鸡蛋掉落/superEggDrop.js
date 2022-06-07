// 拒绝奇技淫巧，拒绝过于诡异的技巧，因为这些技巧无法举一反三，学了也不划算

// 都能想到，二分法会出现鸡蛋数量不够的情况
// 那如果先用二分查找，等到只剩 1 个鸡蛋的时候再执行线性扫描呢？
// 依旧不是最好方案：100 层，给你 2 个鸡蛋，你在 50 层扔一下，碎了，那就只能线性扫描 1～49 层了，最坏情况下要扔 50 次。

// 本题的状态：鸡蛋数量 K 和楼层数 N
// 本题的选择：去哪层楼扔鸡蛋
// 问题： 要确定 f 确切的值 的 最小操作次数 是多少？


// 动态规划的基本思路：
// 当前状态为 K 个鸡蛋，面对 N 层楼，返回这个状态下的最优结果

// function dp(K, N) {
//     let result = Number.MAX_VALUE
//     for (let i = 0; i <= N; i++) {
//         result = Math.min(result, 在第 i 层扔鸡蛋)
//     }
//     return result
// }

// 在第 i 层扔鸡蛋，有两种结果：碎了 / 没碎，取他俩的最坏情况，最后再取所有楼层的最好情况，得到状态转移方程
// dp[k][n] = 1 + Min[1, n](max(dp[k - 1][i - 1], dp[k][N - i]))

// 时间复杂度：O(knlogn)。我们需要计算 O(kn) 个状态，每个状态计算时需要 O(logn) 的时间进行二分查找
// 空间复杂度：O(kn)。我们需要 O(kn) 的空间存储每个状态的解。
function superEggDrop(k, n) {
    const memo = new Map()
    function dp(k, n) {
        if (k === 1) return n
        if (n === 0) return 0
        if (memo.has(`${k} ${n}`)) {
            return memo.get(`${k} ${n}`)
        }
        let result = Infinity
        // 超时
        // for (let i = 1; i <= n; i++) {
        //     result = Math.min(
        //         result,
        //         Math.max(
        //             dp(k, n - i),
        //             dp(k - 1, i - 1)
        //         ) + 1
        //     )
        // }

        // 对于 dp(k, n - i)，他是单调递减的，对于 dp(k - 1, i - 1)，它是单调递增的 （两者均为离散函数）
        // 那么两者的交点就能满足：两者的最大值最小，这个交点不一定是整数，因此需要这个交点两侧的值

        // 使用二分法
        let left = 1
        let right = n

        while (left + 1 < right) {
            const mid = (left + right) >> 1
            const t1 = dp(k - 1, mid - 1) // 单增
            const t2 = dp(k, n - mid) // 单减

            if (t1 < t2) {
                left = mid
            } else if (t2 < t1) {
                right = mid
            } else {
                left = right = mid
            }
        }

        result = 1 + Math.min(
            result,
            Math.max(dp(k - 1, left - 1), dp(k, n - left)),
            Math.max(dp(k - 1, right - 1), dp(k, n - right))
        )
        memo.set(`${k} ${n}`, result)
        return result
    }
    return dp(k, n)
}