// 最多有m个0和n个1 => 视为0,1背包问题
// dp[i][j] = 使用 i 个 0 和 j 个 1的最大子集大小
// 很容易推出： dp[i][j] = Max(dp[i - strs[i]的0的数量][j - strs[i]的1的数量] + 1, dp[i][j])
function findMaxForm(strs, m, n) {
  const dp = new Array(m + 1)
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (const str of strs) {
    const { zero, one } = getMeta(str)
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1)
      }
    }
  }
  return dp[m][n]
}

function getMeta(str) {
  let zero = 0
  let one = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') zero++
    else one++
  }
  return { zero, one }
}