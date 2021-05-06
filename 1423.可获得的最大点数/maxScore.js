// 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
// 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
// 你的点数就是你拿到手中的所有卡牌的点数之和。
// 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length

// 滑动窗口
// 反过来想：维护一个 cardPoints.length-k 的窗口，使得其和最小
function maxScore(cardPoints, k) {
  const totalSum = cardPoints.reduce((acc, val) => acc += val, 0)
  const windowSize = cardPoints.length - k
  // 选取前 windowSize 个作为初始值
  let sum = 0
  for (let i = 0; i < windowSize; i++) {
    sum += cardPoints[i]
  }
  let minSum = sum
  // 开始向右滑动
  for (let i = windowSize; i < cardPoints.length; i++) {
    sum += cardPoints[i] - cardPoints[i - windowSize]
    minSum = Math.min(minSum, sum)
  }
  return totalSum - minSum
}
