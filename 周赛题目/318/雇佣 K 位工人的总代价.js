// 比赛傻逼暴力代码超时没过
function totalCost(costs, k, candidates) {
    let cost = 0
    while (k > 0) {
        // 寻找最小值的索引
        let minVal = Number.MAX_VALUE
        let minIndex = -1
        if (costs.length <= candidates) {
            for (let i = 0; i < costs.length; i++) {
                if (costs[i] <= minVal) {
                    minVal = costs[i]
                    minIndex = i
                }
            }
        } else {
            for (let i = costs.length - candidates; i < costs.length; i++) {
                if (costs[i] <= minVal) {
                    minVal = costs[i]
                    minIndex = i
                }
            }
            for (let i = 0; i < candidates; i++) {
                if (costs[i] <= minVal) {
                    minVal = costs[i]
                    minIndex = i
                }
            }
        }
        cost += minVal
        costs.splice(minIndex, 1)
        k--
    }
    return cost
}

// 比较明显用堆来做
class Heap {
    constructor(data = [], less) {
        this.data = data
        this.less = less || ((a, b) => a < b)

        if (this.data.length) {
            for (let p = (this.data.length -2) >> 1; p >= 0; p--) {
                this._down(p)
            }
        }
    }
    get length() {
        return this.data.length
    }
    peek() {
        return this.data[0]
    }
    push(val) {
        this.data.push(val)
        this._up(this.data.length - 1)
    }
    pop() {
        if (!this.data.length) return
        this._swap(0, this.data.length - 1)
        const popItem = this.data.pop()
        this._down(0)
        return popItem
    }
    _swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    _up(i) {
        if (i < 1) return
        const pIndex = (i - 1) >> 1
        if (this.less(this.data[i], this.data[pIndex])) {
            this._swap(i, pIndex)
            this._up(pIndex)
        }
    }
    _down(i) {
        let leftIndex = i * 2 + 1
        if (leftIndex >= this.data.length) return
        if (leftIndex + 1 < this.data.length && this.less(this.data[leftIndex+1], this.data[leftIndex])) {
            leftIndex++
        }
        if (this.less(this.data[leftIndex], this.data[i])) {
            this._swap(i, leftIndex)
            this._down(leftIndex)
        }
    }
}

function totalCost(costs, k, candidates) {
    // 左最小堆
    const leftHeap = new Heap([], (a, b) => +a < +b)
    // 右最小堆
    const rightHeap = new Heap([], (a, b) => +a < +b)

    // 从左往右，将candidates个元素插入到左堆
    let i = 0
    while (i < candidates && leftHeap.length < candidates) {
        leftHeap.push(costs[i])
        i++
    }
    // 从右往左，将candidates个元素插入到右堆
    let j = costs.length - 1
    // 总长度可能不够 2 * candidates，所以需要判断j >= i才可以，避免左右堆有重复的工人
    while (j >= i && rightHeap.length < candidates) {
        rightHeap.push(costs[j])
        j--
    }
    let ans = 0
    while (k) {
        // 查看左右堆的堆顶元素(代价最小的工人)，如果堆元素为空，直接设置1e6，大于最大代价，不会参与计算。
        const left = leftHeap.length === 0 ? 1e6 : leftHeap.peek()
        const right = rightHeap.length === 0 ? 1e6 : rightHeap.peek()
        // 根据题意两侧的代价相同，优先选取坐标小的。所以只要左侧最小代价大于右侧，才用右侧的工人
        if (left > right) {
            // 用右边的工人
            ans += right
            // 剔除掉员工
            rightHeap.pop()
            // i <= j 说明仍有工人未进入堆中，所以将其插入
            if (i <= j) {
                rightHeap.push(costs[j])
                j--
            }
        } else {
            // 用左边的
            ans += left
            leftHeap.pop()
            if (i <= j) {
                leftHeap.push(costs[i])
                i++
            }
        }
        k--
    }
    return ans
}