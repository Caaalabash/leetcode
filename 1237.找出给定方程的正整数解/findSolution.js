// customfunction(x, y) = z，返回可能的x y, 其中 1 <= x, y <= 1000，并且函数单增
// 首先暴力，时间复杂度是O(mn) m是x取值范围，n是y取值范围
function findSolution(customfunction, z) {
  const result = []

  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= 1000; j++) {
      if (customfunction.f(i, j) === z) {
        result.push([i, j])
      }
    }
  }

  return result
}

// 根据单增的特性，二分法，时间复杂度是O(mlogn)
function findSolution(customfunction, z) {
  const result = []

  for (let i = 1; i <= 1000; i++) {
    // 固定一维度，对另一维度进行二分法
    let left = 1
    let right = 1000
    while (left <= right) {
      const mid = (left + right) >> 1
      const val = customfunction.f(i, mid)
      if (val === z) {
        result.push([i, mid])
        break
      }
      if (val < z) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return result
}

// 双指针：时间复杂度为O(m+n)
// 假设 x1 < x2,且 f(x1, y1) = f(x2, y2) = z, 显然有 y1 > y2
// 因此固定 x 指针，y 指针从最大值向前移动直到值 f(x,y) <= z，x++，重复这个过程
function findSolution(customfunction, z) {
  const result = []

  for (let x = 1, y = 1000; x <= 1000 && y >= 1; x++) {
    while (y >= 1 && customfunction.f(x, y) > z) {
      y--
    }
    if (y >= 1 && customfunction.f(x, y) === z) {
      result.push([x, y])
    }
  }

  return result
}

// 双指针+二分法结合
function findSolution(customfunction, z) {
  const result = []
  let lastY = 1000

  for (let x = 1; x <= 1000; x++) {
    let left = 1
    let right = lastY
    while (left <= right) {
      const mid = (left + right) >> 1
      const val = customfunction.f(x, mid)
      if (val === z) {
        result.push([x, mid])
        lastY = mid - 1
        break
      } else if (val > z) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }

  return result
}