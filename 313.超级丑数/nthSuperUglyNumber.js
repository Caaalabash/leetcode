// primes以升序排列

// 从结果上来说，这题不适合最小堆
function nthSuperUglyNumber(n, primes) {
  // 最小堆
  const heap = new Heap([1])
  const existMap = { 1: true }

  for (let i = 0; i < n-1; i++) {
    const min = heap.pop()
    for (const prime of primes) {
      const val = min * prime
      if (!(val in existMap)) {
        existMap[val] = true
        heap.push(val)
      }
    }
  }

  return heap.peak()
}

// ---- 默写heap环节
class Heap {
  constructor(data = [], less) {
    this.data = []
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
    this._up(this.length - 1)
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
      this._swap(i, leftIndex)
      this._down(leftIndex)
    }
  }
}
