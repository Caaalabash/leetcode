// 需要一个最大堆
function frequencySort(s) {
  const byteMap = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in byteMap) {
      byteMap[s[i]]++
    } else {
      byteMap[s[i]] = 1
    }
  }
  const heap = new Heap(Object.entries(byteMap), function(a, b) {
    return this.data[a][1] > this.data[b][1]
  })
  let result = ''
  while (heap.length) {
    const p = heap.pop()
    result += p[0].repeat(p[1])
  }
  return result
}

// heap默写
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
    if (i <= 0) return
    const pIndex = (i - 1) >> 1
    if (this.less(i, pIndex)) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  _down(i) {
    let leftIndex = i * 2 + 1
    if (leftIndex >= this.length) return
    if (leftIndex + 1 < this.length && this.less(leftIndex+1, leftIndex)) {
      leftIndex++
    }
    if (this.less(leftIndex, i)) {
      this._swap(leftIndex, i)
      this._down(leftIndex)
    }
  }
}
