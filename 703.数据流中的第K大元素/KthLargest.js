class KthLargest {
  constructor(k, nums) {
    this.k = k
    // 排序后截取最大的k个
    nums.sort((a, b) => a > b ? -1 : 1)
    nums = nums.slice(0, k)
    this.heap = new Heap(nums, (a, b) => a < b)
  }
  // 维护一个大小为k的小顶堆
  add(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val)
    } else {
      if (val > this.heap.peak()) {
        this.heap.push(val)
        this.heap.pop()
      }
    }
    return this.heap.peak()
  }
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
