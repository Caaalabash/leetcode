// 暴力
class StockSpanner {
    constructor() {
        this.arr = []
    }
    next(price) {
        this.arr.push(price)
        // 如果仅有这一个元素，返回 1
        if (this.arr.length === 1) {
            return 1
        }
        // 如果当前元素比前一个小，返回1
        if (price < this.arr[this.arr.length - 1]) {
            return 1
        }
        let result = 1
        for (let i = this.arr.length - 2; i >= 0; i--) {
            if (this.arr[i] > price) break
            result++
        }
        return result
    }
}

// 单调栈，维护一个栈底到栈顶单减的栈
// 栈中需要保存价格以及索引，计算next时，更新idx，计算索引差即可
class StockSpanner {
    constructor() {
        this.stack = []
        this.stack.push([-1, Number.MAX_VALUE])
        this.idx = -1
    }
    next(price) {
        this.idx++
        while (price >= this.stack[this.stack.length - 1][1]) {
            this.stack.pop()
        }
        const result = this.idx - this.stack[this.stack.length - 1][0]
        this.stack.push([this.idx, price])
        return result
    }
}