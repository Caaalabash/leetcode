// 0 <= n <= 1000
// 0 <= m <= 1000
// 二分查找时间复杂度 n*logm
function findNumberIn2DArray(matrix, target) {
  const row = matrix.length
  if (row === 0) {
    return false
  }
  const col = matrix[0].length
  if (col === 0) {
    return false
  }
  for (let i = 0; i < row; i++) {
    if (target < matrix[i][0] || target > matrix[i][col-1]) {
      continue
    }
    // 找到target可能在的col索引
    let left = 0
    let right = col - 1
    while (left < right) {
      // 选择左中位数
      const mid = (left + right) >> 1
      if (matrix[i][mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    if (matrix[i][left] === target) {
      return true
    }
  }
  return false
}

// 线性查找，未曾设想的道路
// O(m+n)
function findNumberIn2DArray(matrix, target) {
  const row = matrix.length
  if (row === 0) {
    return false
  }
  const col = matrix[0].length
  if (col === 0) {
    return false
  }
  let r = 0
  let c = col - 1
  // 从右上角开始查找
  // 如果当前值小了，去下一行
  // 如果当前大了，去前一列
  while (r < row && c >= 0) {
    if (matrix[r][c] === target) {
      return true
    } else if (matrix[r][c] < target) {
      r++
    } else {
      c--
    }
  }
  return false
}
