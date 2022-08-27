function makeConnected(n, connections) {
    // n台机器全部连通，至少要 n - 1 根线
    if (connections.length < n - 1) {
        return -1
    }
    const size = connections.length
    const uf = new UF(size)
    // 初始状态 n 个连通分量，最后要保留 1 个连通分量
    // 每union成功一次，连通分量 - 1
    // n - count - result = 1
    let count = 0
    for (const connection of connections) {
        count += !!uf.union(connection[0], connection[1])
    }
    return n - count - 1
}

class UF {
    constructor(size) {
        this.fa = new Array(size).fill(0).map((_, index) => index)
    }
    find(x) {
        if (this.fa[x] !== x) {
            this.fa[x] = this.find(this.fa[x])
        }
        return this.fa[x]
    }
    union(x, y) {
        const fX = this.find(x)
        const fY = this.find(y)
        if (fX !== fY) {
            this.fa[fX] = fY
            return true
        }
        return false
    }
}