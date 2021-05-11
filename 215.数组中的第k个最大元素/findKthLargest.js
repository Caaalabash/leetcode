// 在未排序的数组中找到第K个最大的元素
// 1 ≤ k ≤ 数组的长度

function findKthLargest(nums, k) {
  // 建立最大堆
  const heap = new Heap(nums, (a, b) => nums[a] > nums[b])
  // pop 掉 k-1 个最大值
  for (let i = 0; i < k - 1; i++) {
    heap.pop()
  }
  // 当前最大值即是第k个最大元素
  return heap.peak()
}

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
    this._down(0)
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
