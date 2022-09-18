// 并查集
// 坐在正确位置上的情侣，构成一个独立的连通分量，交换次数为 1
// 坐在不正确位置上的情侣，可能会构成N个连通分量，交换次数为每个连通分量的大小 - 1
// 最少交换作为的次数 = Sum(每个连通分量的大小 - 1)
function minSwapsCouples(row) {
    const n = row.length / 2
    const uf = new UF(n)

    for (let i = 0; i < row.length; i += 2) {
        uf.union(Math.floor(row[i] / 2), Math.floor(row[i + 1] / 2))
    }

    let result = 0

    for (let i = 0; i < n; i++) {
        if (uf.rank[i] !== 0) {
            result += uf.rank[i] - 1
        }
    }

    return result
}

class UF {
    constructor(size) {
        this.p = new Array(size).fill(0).map((_, index) => index)
        this.rank = new Array(size).fill(1)
    }
    find(x) {
        if (this.p[x] !== x) {
            this.p[x] = this.find(this.p[x])
        }
        return this.p[x]
    }
    union(x, y) {
        const px = this.find(x)
        const py = this.find(y)
        if (px === py) return
        if (this.rank[px] > this.rank[py]) {
            this.union(py, px)
        } else {
            this.p[px] = py
            this.rank[py] += this.rank[px]
            this.rank[px] = 0
        }
    }
}