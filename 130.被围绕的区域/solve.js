// 视作并查集，遍历所有为 O 的点，将 O -> O 视为连通的
// 如果某个集合有一个点位于边界上，则不会被 X 填充
function solve(board) {
    const m = board.length
    const n = board[0].length
    const dir = [0, 1, 0]
    const cantMark = new Set()
    const fa = new Array(40000).fill(0).map((_, index) => index)
    const rank = new Array(40000).fill(1)
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
        if (rank[fx] > rank[fy]) {
            fa[fx] = fy
            rank[fy] += rank[fx]
        } else {
            fa[fy] = fx
            rank[fx] += rank[fy]
        }
    }
    // 初始化并查集
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                // 边缘的 O 点，不能替换为 X
                if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                    cantMark.add(i * n + j)
                }
                // 只看右下即可，不用上下左右
                for (let k = 0; k < 2; k++) {
                    const x = i + dir[k]
                    const y = j + dir[k + 1]
                    if (0 <= x && x < m && 0 <= y && y < n && board[x][y] === 'O') {
                        union(i * n + j, x * n + y)
                    }
                }
            }
        }
    }
    // 找到边缘 O 点，所在连通块的代表元
    const set = new Set([...cantMark].map(i => find(i)))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                const fa = find(i * n + j)
                // 如果当前 O 点所在连通块的代表元 in Set，则不能替换
                if (set.has(fa)) {
                    continue
                }
                board[i][j] = 'X'
            }
        }
    }
}
