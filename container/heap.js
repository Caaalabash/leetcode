// 堆
// 最大堆：(a, b) => a > b
// 最小堆：(a, b) => a < b
// 父节点：(i - 1) >> 1
// 左节点：i * 2 + 1
// 右节点：i * 2 + 2
class Heap {
    constructor(data = [], less) {
        this.data = data
        this.less = less || ((a, b) => a < b)
        this.init()
    }
    push(val) {
        this.data.push(val)
        this.up(this.data.length - 1)
    }
    up(i) {
        if (i < 1) return
        const pIndex = (i - 1) >> 1
        if (this.less(this.data[i], this.data[pIndex])) {
            this.swap(i, pIndex)
            this.up(pIndex)
        }
    }
    pop() {
        if (!this.data.length) return
        this.swap(0, this.data.length - 1)
        const popItem = this.data.pop()
        this.down(0)
        return popItem
    }
    down(i) {
        let leftIndex = i * 2 + 1
        if (leftIndex >= this.data.length) return
        if (leftIndex + 1 < this.data.length && this.less(this.data[leftIndex+1], this.data[leftIndex])) {
            leftIndex++
        }
        if (this.less(this.data[leftIndex], this.data[i])) {
            this.swap(i, leftIndex)
            this.down(leftIndex)
        }
    }
    init() {
        for (let p = (this.data.length -2) >> 1; p >= 0; p--) {
            this.down(p)
        }
    }
    // --- utils ---
    get length() {
        return this.data.length
    }
    peek() {
        return this.data[0]
    }
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
}

module.exports = Heap