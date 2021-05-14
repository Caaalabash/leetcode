// 每行每列均按照升序排列，找到第k小的元素
// 1 <= matrix.length, matrix[i].length <= 300
// 1 <= k <= n2

// 有一种23题的感觉
function kthSmallest(matrix, k) {
  // 小顶堆
  const heap = new Heap([], (a, b) => {
    return a[0] < b[0]
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

// 堆的实现
class Heap {
  constructor(data = [], less) {
    this.data = data
    this.less = less || ((a, b) => a < b)
    // 对初始数组进行堆化操作：从最后一个父节点开始，依次下沉
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
  // 删除指定值的操作，通常堆是不含这个操作的，针对特定题目，添加上这个操作
  remove(val) {
    let index = -1
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        index = i
        break
      }
    }
    if (index === -1) return false
    this._swap(index, this.length - 1)
    this.data.pop()
    this._up(index)
    this._down(index)
    return true
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  // 递归上浮
  _up(i) {
    if (i <= 0) return
    const pIndex = (i - 1) >> 1
    if (this.less(this.data[i], this.data[pIndex])) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  // 递归下沉
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
