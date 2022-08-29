// 拓扑排序做法: 将矩阵看做图，节点的入度 = 上下左右比他小的数量
// 然后开始拓扑排序，每次while清空当前队列，循环次数就是答案
function longestIncreasingPath(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const dirs = [-1, 0, 1, 0, -1]
    const inDeg = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const queue = []
    let result = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < 4; k++) {
                const x = i + dirs[k]
                const y = j + dirs[k + 1]
                if (0 <= x && x < m && 0 <= y && y <= n && matrix[x][y] < matrix[i][j]) {
                    inDeg[i][j]++
                }
            }
            if (inDeg[i][j] === 0) {
                queue.push([i, j])
            }
        }
    }

    while (queue.length) {
        result++
        const length = queue.length
        for (let ii = 0; ii < length; ii++) {
            const [i, j] = queue.shift()
            for (let k = 0; k < 4; k++) {
                const x = i + dirs[k]
                const y = j + dirs[k + 1]
                if (0 <= x && x < m && 0 <= y && y <= n && matrix[x][y] > matrix[i][j]) {
                    if (--inDeg[x][y] === 0) {
                        queue.push([x, y])
                    }
                }
            }
        }
    }

    return result
}