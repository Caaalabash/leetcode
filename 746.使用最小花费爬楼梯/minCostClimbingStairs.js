// dp[i] = min(dp[i-1], dp[i-2) + cost[i]
function minCostClimbingStairs(cost) {
  let a = cost[0]
  let b = cost[1]
  for (let i = 2; i < cost.length; i++) {
    [a, b] = [b, Math.min(a, b) + cost[i]]
  }
  return Math.min(a, b)
}
