function findCircleNum(isConnected) {
    const n = isConnected.length
    const uf = new UnionFind(n)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }

    return n - uf.unionCount
}

// fw并查集
class UnionFind {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, index) => index)
        this.rank = new Array(size).fill(0).map(() => 1)
        this.unionCount = 0
    }
    // 路径压缩
    find(x) {
        if (this.parent[x] === x) return x
        this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }
    union(x, y) {
        const pX = this.find(x)
        const pY = this.find(y)
        if (pX === pY) return
        this.unionCount++
        if (this.rank[pX] >= this.rank[pY]) {
            if (this.rank[pX] === this.rank[pY]) {
                this.rank[pX]++
            }
            this.parent[pY] = pX
        } else {
            this.parent[pX] = pY
        }
    }
}