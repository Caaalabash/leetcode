// 先找到一个岛，将其值修改为-1，然后不断向外层拓展一圈，直到遇到1，拓展次数就是最短的桥
function shortestBridge(grid) {
    const n = grid.length
    const dir = [-1, 0, 1, 0, -1]
    const queue = []
    outer:
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    queue.push([i, j])
                    grid[i][j] = -1
                    break outer
                }
            }
        }
    const island = []

    while (queue.length) {
        const s = queue.length
        for (let i = 0; i < s; i++) {
            const [x, y] = queue.pop()
            island.push([x, y])
            for (let d = 0; d < 4; d++) {
                const ii = x + dir[d]
                const jj = y + dir[d + 1]
                if (0 <= ii && ii < n && 0 <= jj && jj < n && grid[ii][jj] === 1) {
                    queue.push([ii, jj])
                    grid[ii][jj] = -1
                }
            }
        }
    }
    let result = 0
    while (island.length) {
        const s = island.length
        for (let i = 0; i < s; i++) {
            const [x, y] = island.shift()
            for (let d = 0; d < 4; d++) {
                const ii = x + dir[d]
                const jj = y + dir[d + 1]
                if (0 <= ii && ii < n && 0 <= jj && jj < n) {
                    if (grid[ii][jj] === 0) {
                        island.push([ii, jj])
                        grid[ii][jj] = -1
                    } else if (grid[ii][jj] === 1) {
                        return result
                    }
                }
            }
        }
        result++
    }
    return result
}