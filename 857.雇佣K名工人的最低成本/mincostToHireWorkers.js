// 对工资组中的每名工人，应当按其工作质量与同组其他工人的工作质量的比例来支付工资

function mincostToHireWorkers(quality, wage, k) {
  // 计算"时薪"并升序排列，排在前面的意味着便宜
  // 排序后的第 i 名工人可以在它之前任选 K - 1 名工人
  // 工资总和为: ratio * sum(quality[c1] + quality[c2] + ... + quality[c{k-1}] + quality[i])
  const employeeInfo = quality.map((q, index) => ({
    q,
    w: wage[index],
    ratio: wage[index] / q,
  })).sort((a, b) => a.ratio < b.ratio ? -1 : 1)
  // 使用大根堆来维护k个最小值，使得sumQ尽可能小
  const heap = new Heap([], (a, b) => a > b)
  let result = Number.MAX_VALUE
  let sumQ = 0

  for (let employee of employeeInfo) {
    heap.push(employee.q)
    sumQ += employee.q
    if (heap.length > k) {
      sumQ -= heap.pop()
    }
    if (heap.length === k) {
      result = Math.min(result, employee.ratio * sumQ)
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
