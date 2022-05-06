// 时间复杂度：均摊O(1)，每个元素至多入队出队各一次
// 空间复杂度：O(L), L为队列的最大元素个数
class RecentCounter {
    constructor() {
        this.r = []
    }
    ping(t) {
        this.r.push(t)
        while(this.r[0] < t - 3000) {
            this.r.shift()
        }
        return this.r.length
    }
}