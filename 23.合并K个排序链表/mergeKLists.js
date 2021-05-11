// 0 <= lists[i].length <= 500

function mergeKLists(lists) {
  // 需要过滤空链表，然后构建一个最小堆
  const heap = new Heap(lists.filter(i => !!i), function (a, b) {
    return this.data[a].val < this.data[b].val
  })
  // 链表操作
  const dummy = { next: null }
  let cur = dummy
  // 从heap中取出最小的一个item，然后将item.next塞回去
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
