// 状态转移方程 = dp[n] = dp[n-1] + dp[n-2]
// 从状态转移方程可以发现，dp[n]至于前2个数值有关，因此此处可以使用滚动数组将空间复杂度优化为O(1)
function climbStairs(n) {
  if (n < 2) {
    return n
  }
  let a = 1
  let b = 2
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a+b]
  }
  return b
}
