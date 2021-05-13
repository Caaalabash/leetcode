function rearrangeBarcodes(barcodes) {
  // 词频统计
  const counter = {}
  for (let i = 0; i < barcodes.length; i++) {
    if (barcodes[i] in counter) {
      counter[barcodes[i]]++
    } else {
      counter[barcodes[i]] = 1
    }
  }
  // 根据词频构建最大堆
  const heap = new Heap(Object.entries(counter), (a, b) => {
    return a[1] > b[1]
  })
  const result = new Array(barcodes.length)
  let i = 0
  while (heap.length) {
    let [value, frequency] = heap.pop()
    while (frequency > 0) {
      result[i] = value
      i += 2
      if (i >= barcodes.length) i = 1
      frequency--
    }
  }
  return result
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
