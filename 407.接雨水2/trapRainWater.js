// 从最外层的一圈开始，判断每个元素能不能向内拓展
function trapRainWater(heightMap) {
  // 排除不可能接到水的情况，长度/宽度不足3
  let row = heightMap.length
  if (row < 3) {
    return 0
  }
  let col = heightMap[0].length
  if (col < 3) {
    return 0
  }
  // 创建一个二维数组，代表是否已经被遍历过
  const visit = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  )
  // 创建一个小顶堆，并将周围的一圈放进堆中
  const heap = new Heap([], (a, b) => a.val < b.val)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j === 0 || i === 0 || i === row - 1 || j === col - 1) {
        heap.push({
          r: i,
          c: j,
          val: heightMap[i][j]
        })
        visit[i][j] = true
      }
    }
  }

  const dir = [-1, 0, 1, 0, -1]
  let result = 0

  while (heap.length) {
    const { r, c, val } = heap.pop()
    // 遍历四个方向
    for (let i = 0; i < dir.length - 1; i++) {
      const offsetR = r - dir[i]
      const offsetC = c - dir[i+1]
      if (offsetR >= 0 && offsetR < row && offsetC >= 0 && offsetC < col && !visit[offsetR][offsetC]) {
        // 一旦下一个点的高度小于当前最小高度，则记录差值（就是接水的数量）
        if (heightMap[offsetR][offsetC] < val) {
          result += val - heightMap[offsetR][offsetC]
        }
        visit[offsetR][offsetC] = true
        // 维护这个圈
        heap.push({
          r: offsetR,
          c: offsetC,
          val: Math.max(heightMap[offsetR][offsetC], val)
        })
      }
    }
  }
  return result
}


// heap
class Heap {
  constructor(data = [], less) {
    this.data = data
    this.less = less || ((a, b) => a < b)

    if (this.length) {
      for (let p = (this.length - 2) >> 1; p >= 0; p--) {
        this._down(p)
      }
    }
  }
  get length() {
    return this.data.length
  }
  peak() {
    return this.data[0]
  }
  push(val) {
    this.data.push(val)
    this._up(this.length - 1)
  }
  pop() {
    if (!this.length) {
      return
    }
    this._swap(0, this.length - 1)
    const popItem = this.data.pop()
    this._down(0)
    return popItem
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  _up(i) {
    if (i <= 0) return
    const pIndex = (i - 1) >> 1
    if (this.less(this.data[i], this.data[pIndex])) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  _down(i) {
    let leftIndex = i * 2 + 1
    if (leftIndex >= this.length) {
      return
    }
    if (leftIndex + 1 < this.length && this.less(this.data[leftIndex+1], this.data[leftIndex])) {
      leftIndex++
    }
    if (this.less(this.data[leftIndex], this.data[i])) {
      this._swap(leftIndex, i)
      this._down(leftIndex)
    }
  }
}
