function getLeastNumbers(arr, k) {
  const heap = new Heap(arr)
  const result = []
  for (let i = 0; i < k; i++) {
    result.push(heap.pop())
  }
  return result
}


// 堆实现
class Heap {
  constructor(data = [], less) {
    this.data = data
    this.less = less || ((a, b) => a < b)

    if (this.data.length) {
      for (let p = (this.data.length -2) >> 1; p >= 0; p--) {
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
    this._up(this.data.length - 1)
  }
  pop() {
    if (!this.data.length) return
    this._swap(0, this.data.length - 1)
    const popItem = this.data.pop()
    this._down(0)
    return popItem
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  _up(i) {
    if (i < 1) return
    const pIndex = (i - 1) >> 1
    if (this.less(this.data[i], this.data[pIndex])) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  _down(i) {
    let leftIndex = i * 2 + 1
    if (leftIndex >= this.data.length) return
    if (leftIndex + 1 < this.data.length && this.less(this.data[leftIndex+1], this.data[leftIndex])) {
      leftIndex++
    }
    if (this.less(this.data[leftIndex], this.data[i])) {
      this._swap(i, leftIndex)
      this._down(leftIndex)
    }
  }
}
