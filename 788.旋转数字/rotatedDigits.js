// 好数定义：如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数
// 每个数字旋转180度后对应的有效值
const mirrorMap = {
  0: 0,
  1: 1,
  2: 5,
  3: Number.NaN,
  4: Number.NaN,
  5: 2,
  6: 9,
  7: Number.NaN,
  8: 8,
  9: 6,
}

// 暴力解法，时间复杂度O(NlogN)，空间复杂度O(logN)
function rotatedDigits(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    if (isGoodNumber(i)) result++
  }
  return result
}

function isGoodNumber(val) {
  let totalCount = 0
  let sameCount = 0

  while (val > 0) {
    const remain = val % 10
    if (mirrorMap[remain] === Number.isNaN) {
      return false
    }
    if (remain === mirrorMap[remain]) {
      sameCount++
    }
    totalCount++
    val = Math.floor(val / 10)
  }

  return sameCount !== totalCount
}

// 动态规划版本
// d[i]对应有三个值，1是好数，0是普数，-1是坏数。
function rotatedDigits(n) {
  const d = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1].concat(Array(Math.max(0, n - 9)).fill(0))
  let ans = 0

  for (let i = 0; i <= n; i++) {
    // 10009 => 1000 + 9，这边的逻辑只是单纯的将数字拆分开
    if (d[Math.floor(i / 10)] === -1 || d[i % 10] === -1) {
      d[i] = -1
    } else if (d[Math.floor(i / 10)] === 1 || d[i % 10] === 1) {
      d[i] = 1
      ++ans
    }
  }

  return ans
}