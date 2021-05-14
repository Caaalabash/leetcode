function mergeKLists(lists) {
  // 需要过滤空链表，然后构建一个最小堆
  const heap = new Heap(lists.filter(i => !!i), (a, b) => a.val < b.val)
  const dummy = { next: null }
  let cur = dummy

  while (heap.length) {
    const item = heap.pop()
    cur.next = { val: item.val, next: null }
    if (item.next) {
      heap.push(item.next)
    }
    cur = cur.next
  }

  return dummy.next
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
