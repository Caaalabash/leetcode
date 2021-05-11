// 每行每列均按照升序排列，找到第k小的元素
// 1 <= matrix.length, matrix[i].length <= 300
// 1 <= k <= n2

// 有一种23题的感觉
function kthSmallest(matrix, k) {
  // 小顶堆
  const heap = new Heap([], function(a, b) {
    return this.data[a][0] < this.data[b][0]
  })
  for (let i = 0; i < matrix.length; i++) {
    heap.push(matrix[i])
  }
  for (let i = 0; i < k - 1; i++) {
    const row = heap.pop()
    if (row.length > 1) {
      heap.push(row.slice(1))
    }
  }
  return heap.peak()[0]
}

// heap
class Heap {
  constructor(data = [], less) {
    this.data = data
    this.length = this.data.length
    this.less = less || ((a, b) => this.data[a] < this.data[b])
    if (this.length) {
      for (let p = (this.length - 2) >> 1; p >= 0; p--) {
        this._down(p)
      }
    }
  }
  peak() {
    return this.data[0]
  }
  push(val) {
    this.data.push(val)
    this.length++
    this._up(this.length-1)
  }
  pop() {
    if (!this.length) {
      return undefined
    }
    this._swap(0, this.length - 1)
    const popItem = this.data.pop()
    this.length--
    if (this.length) {
      this._down(0)
    }
    return popItem
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  _up(i) {
    if (i <= 0) {
      return
    }
    const pIndex = (i - 1) >> 1
    if (this.less(i, pIndex)) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  _down(i) {
    let leftIndex = i * 2 + 1
    if (leftIndex >= this.length) {
      return
    }
    if (leftIndex + 1 < this.length && this.less(leftIndex+1, leftIndex)) {
      leftIndex++
    }
    if (this.less(leftIndex, i)) {
      this._swap(leftIndex, i)
      this._down(leftIndex)
    }
  }
}
