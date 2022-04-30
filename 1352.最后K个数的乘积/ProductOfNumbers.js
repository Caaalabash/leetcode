// 不用动脑的做法如下：add O(1) getProduct O(k) 空间复杂度 O(n)
// 显然需要将 getProduct 变成 O(1) 的  => 前缀积
class ProductOfNumbers {
    constructor() {
        this.arr = []
    }
    add(num) {
        this.arr.push(num)
    }
    getProduct(k) {
        let product = 1
        for (let i = this.arr.length - 1; i > this.arr.length - 1 - k; i--) {
            product *= this.arr[i]
        }
        return product
    }
}

// 前缀积: 核心是对 0 的处理
class ProductOfNumbers1 {
    constructor() {
        this.arr = [1]
    }
    // 由于出现0会导致前缀积失效，所以每次遇到0就直接重置前缀积数组
    add(num) {
        if (num === 0) {
            this.arr = [1]
        } else {
            this.arr.push(num * this.arr[this.arr.length - 1])
        }
    }
    getProduct(k) {
        // 如果当前前缀积记录的数没有k个，说明之前出现了0，直接返回0
        if (k > this.arr.length - 1) return 0
        return this.arr[this.arr.length - 1] / this.arr[this.arr.length - k - 1]
    }
}