// 冥冥之中，感觉它是0-1背包问题
// 设dp[i][j][k] = 参与前 [0, i] 项工作，投入的人力不超过 j，获利为 k 的方案数量
// 初始值：dp[i][j][0] = 1 ==> 啥也不干，获利为0，方案数量为1
// 状态转移方程：
//   对于第i个项目，干他：dp[i][j][k] = dp[i-1][j-group[i]][k-profit[i]]
//   对于第i个项目，不干他：dp[i][j][k] = dp[i-1][j][k]
// 初始化dp数组 （项目数+1）* （人数+1）* （最小利润+1），求得dp[profit.length][n][minProfit]
function profitableSchemes(n, minProfit, group, profit) {
  const p = profit.length
  const dp = new Array(p + 1)
  for (let i = 0; i < p + 1; i++) {
    dp[i] = new Array(n + 1)
    for (let j = 0; j < n + 1; j++) {
      dp[i][j] = new Array(minProfit + 1)
      for (let k = 0; k < minProfit + 1; k++) {
        dp[i][j][k] = k === 0 ? 1 : 0
      }
    }
  }
  for (let i = 1; i < p + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      for (let k = 0; k < minProfit + 1; k++) {
        dp[i][j][k] = dp[i - 1][j][k]
        if (j >= group[i - 1]) {
          if (k >= profit[i - 1]) {
            dp[i][j][k] += dp[i - 1][j - group[i - 1]][k - profit[i - 1]]
          } else {
            dp[i][j][k] += dp[i - 1][j - group[i - 1]][0]
          }
        }
        dp[i][j][k] %= 1000000007
      }
    }
  }
  return dp[p][n][minProfit]
}


// dp[i][j][k]仅与dp[i-1][j][k]有关，压缩掉i维度，j,k维度都需要逆序遍历
function profitableSchemes(n, minProfit, group, profit) {
  const p = profit.length
  const dp = new Array(n + 1)
  for (let j = 0; j < n + 1; j++) {
    dp[j] = new Array(minProfit + 1)
    for (let k = 0; k < minProfit + 1; k++) {
      dp[j][k] = k === 0 ? 1 : 0
    }
  }
  for (let i = 1; i < p + 1; i++) {
    const usePeople = group[i - 1]
    const earn = profit[i - 1]
    for (let j = n; j >= group[i - 1]; j--) {
      // 本层不反转也可
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] = (dp[j][k] + dp[j - usePeople][Math.max(0, k - earn)]) % 1000000007
      }
    }
  }
  return dp[n][minProfit]
}