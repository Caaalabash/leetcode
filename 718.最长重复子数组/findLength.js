// 好像可以很自然的推出状态转移方程
// dp[i][j]表示 A[i:] 和 B[j:] 的最长公共前缀
// A[i] = B[j]时，dp[i][j] = dp[i+1][j+1] + 1
// A[i] != B[j]时，dp[i][j] = 0
function findLength(nums1, nums2) {
    const m = nums1.length, n = nums2.length
    const dp = []
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1)
        for (let j = 0; j < n + 1; j++) {
            dp[i][j] = 0
        }
    }
    // Array.from性能真的垃圾
    // const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0))
    let result = 0
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] = nums1[i] === nums2[j]
                ? dp[i + 1][j + 1] + 1
                : 0
            result = Math.max(result, dp[i][j])
        }
    }
    return result
}

// 压缩Z轴
function findLength(nums1, nums2) {
    // 使得nums2长度最小，在用滚动数组压缩空间时，空间使用为O(min(A.length, B.length))
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length, n = nums2.length
    const dp = new Array(n + 1).fill(0)
    let result = 0
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j <= n - 1; j++) {
            dp[j] = nums1[i] === nums2[j]
                ? dp[j+1] + 1
                : 0
            result = Math.max(result, dp[j])
        }
    }
    return result
}