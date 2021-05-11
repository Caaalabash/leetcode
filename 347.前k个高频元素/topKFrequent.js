// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]

// 统计频率，然后将频次放进堆中
function topKFrequent(nums, k) {
  const counter = nums.reduce((map, num) => {
    if (!(num in map)) {
      map[num] = 1
    } else {
      map[num]++
    }
    return map
  }, {})
  const arr = Object.entries(counter).map(set => ({ value: +set[0], priority: set[1] }))
  const heap = new Heap(arr, function (a, b) {
    return this.data[a].priority > this.data[b].priority
  })

  const result = []
  for (let i = 0; i < k; i++) {
    result.push(heap.pop().value)
  }
  return result
}

// 默写heap
class Heap {
  constructor(data = [], less) {
    this.data = data
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
    this._up(this.length-1)
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
    if (this.length <= 0) {
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
      this._swap(leftIndex, i)
      this._down(leftIndex)
    }
  }
}
