// 并查集
function countPairs(n, edges) {
    // 并查集实现
    const parent = new Array(n).fill(0).map((_, index) => index)
    const rank = new Array(n).fill(1)
    const find = (x) => {
        if (parent[x] === x) return x
        parent[x] = find(parent[x])
        return parent[x]
    }
    const union = (x, y) => {
        const px = find(x)
        const py = find(y)
        if (px === py) return
        if (rank[px] >= rank[py]) {
            if (rank[px] === rank[py]) rank[px]++
            parent[py] = px
        } else {
            parent[px] = py
        }
    }
    for (const [u, v] of edges) {
        union(u, v)
    }
    // 答案求解，这里时间复杂度过高
    const count = {}
    for (const p of parent) {
        const realP = find(p)
        if (!(realP in count)) count[realP] = 0
        count[realP]++
    }
    let result = 0
    const countList = Object.values(count)
    for (let i = 0; i < countList.length; i++) {
        for (let j = i + 1; j < countList.length; j++) {
            result += countList[i] * countList[j]
        }
    }
    return result
}

// 需要在合并连通块时记录连通块的长度
function countPairs(n, edges) {
    const parent = new Array(n).fill(0).map((_, index) => index)
    const size = new Array(n).fill(1)
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    const union = (x, y) => {
        const px = find(x)
        const py = find(y)
        if (px === py) return
        // 合并连通块时，更新大小
        parent[px] = py
        size[py] += size[px]
        size[px] = 0
    }
    for (const [u, v] of edges) {
        union(u, v)
    }
    // 本题的难点也在这里：线性时间复杂度求结果
    // 如果图中没有边，不可达数量为 n*(n-1)/2
    // 一个长度为i的连通块，可以使得答案减少 i*(i-1)/2
    let result = n * (n - 1) / 2
    for (const s of size) {
        if (s === 0) continue
        result -= s * (s - 1) / 2
    }
    return result
}