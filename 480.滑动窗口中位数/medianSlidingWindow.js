// 如何求出区间内的中位数，参考295
function medianSlidingWindow(nums, k) {
  const medianFinder = new MedianFinder()
  for (let i = 0; i < k; i++) {
    medianFinder.push(nums[i])
  }
  const result = [medianFinder.findMedian()]
  for (let i = k; i < nums.length; i++) {
    medianFinder.remove(nums[i - k])
    medianFinder.push(nums[i])
    result.push(medianFinder.findMedian())
  }

  return result
}

// ------- MedianFinder -------
class MedianFinder {
  constructor() {
    // 最大堆 存储输入数字中较小的一半
    this.maxHeap = new Heap([], (a, b) => a > b)
    // 最小堆 存储输入数字中较大的一半
    this.minHeap = new Heap([], (a, b) => a < b)
  }
  push(num) {
    if (!this.maxHeap.length || num <= this.maxHeap.peak()) {
      this.maxHeap.push(num)
    } else {
      this.minHeap.push(num)
    }
    this.makeBalance()
  }
  remove(value) {
    if (value <= this.maxHeap.peak()) {
      this.maxHeap.remove(value)
    } else {
      this.minHeap.remove(value)
    }
    this.makeBalance()
  }
  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peak() + this.minHeap.peak()) / 2
    }
    return this.maxHeap.peak()
  }
  // 调整两个堆的平衡性
  makeBalance() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      // 最大堆比最小堆多了两个，pop最大堆的栈顶，push进最小堆
      this.minHeap.push(this.maxHeap.pop())
    } else if  (this.minHeap.length > this.maxHeap.length) {
      // 最小堆比最大堆多，pop最小堆的栈顶，push进最大堆
      this.maxHeap.push(this.minHeap.pop())
    }
  }
}

// ------ heap + 删除功能
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
