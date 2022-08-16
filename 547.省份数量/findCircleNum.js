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
        this.unionCount = 0
    }
    find(x) {
        return this.parent[x] === x ? x : this.find(this.parent[x])
    }
    union(x, y) {
        const pX = this.find(x)
        const pY = this.find(y)
        if (pX !== pY) {
            this.parent[pY] = pX
            this.unionCount++
        }
    }
}