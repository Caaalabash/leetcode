// 同1054，只是本题存在无解的情况
function reorganizeString(s) {
  const counter = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in counter) {
      counter[s[i]]++
    } else {
      counter[s[i]] = 1
    }
  }
  // 最大堆
  const heap = new Heap(Object.entries(counter), (a, b) => {
    return a[1] > b[1]
  })
  // 按照1054的做法填充
  let result = new Array(s.length)
  let i = 0
  while (heap.length) {
    let [str, frequency] = heap.pop()
    while (frequency > 0) {
      result[i] = str
      i += 2
      if (i >= s.length) i = 1
      frequency--
    }
  }
  // 检查
  for (let i = 1; i < result.length; i++) {
    if (result[i] === result[i-1]) {
      return ''
    }
  }
  return result.join('')
}

// heap
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
