// 数据流中的中位数
class MedianFinder {
  constructor() {
    // 维护两个堆
    // 最大堆 存储输入数字中较小的一半，其长度最多只能比最小堆多1，这样便于在奇数个时返回中位数
    // 最小堆 存储输入数字中较大的一般
    this.minHeap = new Heap([], function (a, b) {
      return this.data[a] < this.data[b]
    })
    this.maxHeap = new Heap([], function (a, b) {
      return this.data[a] > this.data[b]
    })
  }
  addNum(num) {
    if (!this.maxHeap.length || num < this.maxHeap.peak()) {
      this.maxHeap.push(num)
    } else {
      this.minHeap.push(num)
    }
    // 保持平衡
    if (this.maxHeap.length - this.minHeap.length > 1) {
      this.minHeap.push(this.maxHeap.pop())
    }
    if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop())
    }
  }
  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peak() + this.minHeap.peak()) / 2
    }
    return this.maxHeap.peak()
  }
}


// ------- 堆 --------
class Heap {
  constructor(data = [], less) {
    this.data = data
    // 可以通过new Heap().length获取内部数组长度
    this.length = this.data.length
    // less(i, j) 位置i的元素是否应该排在位置j的元素之前
    this.less = less || ((a, b) => this.data[a] < this.data[b])

    if (this.data.length) {
      for (let pIndex = (this.length - 2) >> 1; pIndex >= 0; pIndex--) {
        this._down(pIndex)
      }
    }
  }
  push(val) {
    this.data.push(val)
    this.length++
    this._up(this.length - 1)
  }
  pop() {
    if (this.length === 0) {
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
  peak() {
    return this.data[0]
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  // 递归上浮：不断与其父节点比大小
  _up(i) {
    if (i <= 0) {
      return
    }
    const parentIndex = (i - 1) >> 1
    if (this.less(i, parentIndex)) {
      this._swap(i, parentIndex)
      this._up(parentIndex)
    }
  }
  // 递归下沉：不断与其两个子节点比大小
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
