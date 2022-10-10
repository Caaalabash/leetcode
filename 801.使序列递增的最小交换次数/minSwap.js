// 动态规划
// 由于题目保证用例可以实现操作，那么位置i一定满足两种情况中的一种：
// condition1. 不需要交换：nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]
// condition2. 可以交换：nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]
// 设 dp[i][0] 表示到位置 i 为止不进行交换的【题目求解值】
// 设 dp[i][1] 表示到位置 i 为止进行交换的【题目求解值】
//
// if (condition1) {
//   // 此时顺序位满足要求，要么当前位置i和前一位置i-1都不交换，要么同时交换，此时有(对应都不交换、都交换)
//   dp[i][0] = dp[i - 1][0]
//   dp[i][1] = dp[i - 1][1] + 1
// }
// if (condition2) {
//   // 交叉位满足要求，此时当前位置i和前一位置i-1只能有一个发生交换，此时有(对应前一位置交换、当前位置交换)
//   dp[i][0] = min(dp[i - 1][0], dp[i - 1][1])
//   dp[i][1] = min(dp[i - 1][1], dp[i - 1][0] + 1)
// }
// 当 i = 0时，显然有
// dp[i][0] = 0, dp[i][1] = 1
function minSwap(nums1, nums2) {
    const n = nums1.length
    const f = new Array(n)
    f[0] = [0, 1]
    for (let i = 1; i < n; i++) {
        f[i] = [n + 10, n + 10]
    }
    for (let i = 1; i < n; i++) {
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            f[i][0] = f[i - 1][0]
            f[i][1] = f[i - 1][1] + 1
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            f[i][0] = Math.min(f[i][0], f[i - 1][1])
            f[i][1] = Math.min(f[i][1], f[i - 1][0] + 1)
        }
    }
    return Math.min(f[n - 1][0], f[n - 1][1])
}

// TODO：滚动数组压缩写法