// 计算将每一个0变成1之后，最大的岛屿面积
// 时间复杂度是 O(n^4)，对于 n = 500的规模来说，大于1e10，超时了
function largestIsland(grid) {
    const n = grid.length
    let result = getMaxArea(grid)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                grid[i][j] = 1
                result = Math.max(result, getMaxArea(grid))
                grid[i][j] = 0
            }
        }
    }

    return result
}
// 并查集，计算当前状态最大的岛屿面积
function getMaxArea(grid) {
    const dir = [0, 1, 0]
    const n = grid.length
    const fa = new Map()
    const rank = new Map()
    const findParent = pos => {
        if (fa.get(pos) === pos) {
            return pos
        }
        fa.set(pos, findParent(fa.get(pos)))
        return fa.get(pos)
    }
    const union = (x, y) => {
        const fx = findParent(x)
        const fy = findParent(y)
        if (fx === fy) return
        if (rank.get(fx) >= rank.get(fy)) {
            rank.set(fx, rank.get(fy) + rank.get(fx))
            rank.set(fy, 0)
            fa.set(fy, fx)
        } else {
            rank.set(fy, rank.get(fy) + rank.get(fx))
            rank.set(fx, 0)
            fa.set(fx, fy)
        }
    }
    // 初始化，fa，rank
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fa.set(`${i}-${j}`, `${i}-${j}`)
                rank.set(`${i}-${j}`, 1)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                for (let k = 0; k < 2; k++) {
                    const ii = i + dir[k]
                    const jj = j + dir[k + 1]
                    if (0 <= ii && ii < n && 0 <= jj && jj < n && grid[ii][jj] === 1) {
                        union(`${i}-${j}`, `${ii}-${jj}`)
                    }
                }
            }
        }
    }
    return Math.max(...rank.values())
}

// 并查集 + 枚举做法
// 时间复杂度 O(n^2)
// 空间复杂度 O(n^2)
class UF {
    constructor(size) {
        this.p = new Array(size).fill(0).map((_, index) => index)
        this.rank = new Array(size).fill(1)
    }
    find(i) {
        if (this.p[i] !== i) {
            this.p[i] = this.find(this.p[i])
        }
        return this.p[i]
    }
    union(a, b) {
        const fa = this.find(a)
        const fb = this.find(b)
        if (fa === fb) return
        if (this.rank[fa] > this.rank[fb]) {
            this.union(fb, fa)
        } else {
            this.p[fa] = fb
            this.rank[fb] += this.rank[fa]
        }
    }
}
function largestIsland(grid) {
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const n = grid.length
    const uf = new UF(n * n)
    // 初始化
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue
            for (const [x, y] of dir) {
                const ii = i + x
                const jj = j + y
                if (0 <= ii && ii < n && 0 <= jj && jj < n && grid[ii][jj] === 1) {
                    uf.union(i * n + j, ii * n + jj)
                }
            }
        }
    }
    // 遍历可翻转点
    let result = Math.max(...uf.rank)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) continue
            // 该点可以翻转，计算新连通块的大小
            const set = new Set() // 避免四个方向的位于一个连通块内
            let total = 1 // 假设当前已经被翻转，数量为1
            for (const [x, y] of dir) {
                const ii = i + x
                const jj = j + y
                if (0 <= ii && ii < n && 0 <= jj && jj < n && grid[ii][jj] === 1) {
                    const root = uf.find(ii * n + jj)
                    if (set.has(root)) continue
                    set.add(root)
                    total += uf.rank[root]
                }
            }
            result = Math.max(result, total)
        }
    }
    return result
}
