function trapRainWater(heightMap) {
    const m = heightMap.length
    const n = heightMap[0].length
    if (m < 3 || n < 3) {
        return 0
    }
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    const heap = new Heap([])
    // 将最外围一圈放进heap，并修改访问状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                heap.push({
                    i,
                    j,
                    height: heightMap[i][j],
                })
                visited[i][j] = true
            }
        }
    }
    const dirs = [-1, 0, 1, 0, -1]
    let res = 0
    // 当堆不为空时，拿出最低点，向四个方向走一步
    while (heap.size) {
        const { i, j, height } = heap.pop()
        for (let k = 0; k < 4; k++) {
            const di = i + dirs[k]
            const dj = j + dirs[k + 1]
            // 在范围内且没有访问过，标记为访问，记录高度差，入堆
            if (0 <= di && di < m && 0 <= dj && dj < n && !visited[di][dj]) {
                visited[di][dj] = true
                const dHeight = heightMap[di][dj]
                if (dHeight < height) {
                    res += height - dHeight
                }
                // 注意，这里取最大值
                heap.push({ i: di, j: dj, height: Math.max(height, dHeight) })
            }
        }
    }
    return res
}

// 最小堆
class Heap {
    constructor(data = []) {
        this.data = data
        this.heapify()
    }
    get size() {
        return this.data.length
    }
    _swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    // 维护小顶堆
    _less(i, j) {
        return this.data[i].height < this.data[j].height
    }
    _up(i) {
        if (i === 0) {
            return
        }
        const pIndex = (i - 1) >> 1
        if (this._less(i, pIndex)) {
            this._swap(i, pIndex)
            this._up(pIndex)
        }
    }
    _down(i, length) {
        let leftIndex = (i << 1) + 1
        if (leftIndex >= length) {
            return
        }
        if (leftIndex + 1 < length && this._less(leftIndex + 1, leftIndex)) {
            leftIndex++
        }
        if (this._less(leftIndex, i)) {
            this._swap(leftIndex, i)
            this._down(leftIndex, length)
        }
    }
    push(val) {
        this.data.push(val)
        this._up(this.data.length - 1)
    }
    pop() {
        if (this.data.length === 0) return
        this._swap(0, this.data.length - 1)
        const popItem = this.data.pop()
        this._down(0, this.data.length)
        return popItem
    }
    heapify() {
        for (let p = (this.data.length - 2) >> 1; p >= 0; p--) {
            this._down(p, this.data.length)
        }
    }
}