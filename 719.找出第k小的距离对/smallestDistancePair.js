function smallestDistancePair(nums, k) {
  // 维护一个大小为k的最大堆
  const heap = new Heap([], (a, b) => a > b)
  const existMap = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j])
      if (diff in existMap) {
        continue
      }
      if (heap.length < k) {
        heap.push(diff)
      } else {
        if (diff < heap.peak()) {
          heap.pop()
          heap.push(diff)
        }
      }
    }
  }
  return heap.peak()
}

// 堆
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
