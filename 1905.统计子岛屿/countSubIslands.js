// 并查集做法：
// 只需要对grid2进行并查集的合并操作，再判断对应点位是否是1即可，不需要对grid1也进行连通性处理
function countSubIslands(grid1, grid2) {
    const m = grid1.length
    const n = grid1[0].length
    const fa = new Array(m * n).fill(0).map((_, index) => index)
    const find = x => {
        if (fa[x] !== x) {
            fa[x] = find(fa[x])
        }
        return fa[x]
    }
    const union = (x, y) => {
        const fx = find(x)
        const fy = find(y)
        if (fx === fy) {
            return
        }
        fa[fx] = fy
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
             if (grid2[i][j] === 1) {
                if (i > 0 && grid2[i - 1][j] === 1) {
                    union(i * n + j, (i - 1) * n + j)
                }
                if (j > 0 && grid2[i][j - 1] === 1) {
                    union(i * n + j, i * n + j - 1)
                }
            }
        }
    }
    // 需要弄清楚连通块内有哪些元素
    const detail = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                const fa = find(i * n + j)
                if (!(fa in detail)) {
                    detail[fa] = []
                }
                detail[fa].push([i, j])
            }
        }
    }
    // 构造答案
    return Object.values(detail).reduce((acc, arr) => {
        return acc + (arr.every(pos => grid1[pos[0]][pos[1]] === 1) ? 1 : 0)
    }, 0)
}

// DFS做法
function countSubIslands(grid1, grid2) {
    const m = grid1.length
    const n = grid1[0].length
    const dir = [-1, 0, 1, 0, -1]
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return true
        // 替代visited作用
        grid2[i][j] = 0
        let flag = grid1[i][j] === 1
        for (let k = 0; k < 4; k++) {
            // 注意短路问题
            flag = dfs(i + dir[k], j + dir[k + 1]) && flag
        }
        return flag
    }
    let result = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 0) continue
            if (dfs(i, j)) {
                result++
            }
        }
    }
    return result
}
