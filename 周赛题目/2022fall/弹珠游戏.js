function ballGame(num, plate) {
    const n = plate.length
    const m = plate[0].length
    const dir = {
        top: [-1, 0],
        right: [0, 1],
        bottom: [1, 0],
        left: [0, -1],
    }
    const nextDirWhenMeetW = { top: 'left', right: 'top', bottom: 'right', left: 'bottom' }
    const nextDirWhenMeetE = { top: 'right', right: 'bottom', bottom: 'left', left: 'top' }
    const isValidPos = pos => 0 <= pos[0] && pos[0] < n && 0 <= pos[1] && pos[1] < m
    const nextPos = (pos, direction) => [pos[0] + dir[direction][0], pos[1] + dir[direction][1]]
    const result = []
    const bfs = (from, step, direction, cache, start) => {
        const pos = nextPos(from, direction)
        // 如果越界、无步数、以同样的方向进入过该点，则返回
        if (!isValidPos(pos) || step < 0 || cache.has(`${pos[0]}-${pos[1]}-${direction}`)) {
            return
        }
        if (plate[pos[0]][pos[1]] === 'O') {
            result.push(start)
            return
        }
        cache.add(`${pos[0]}-${pos[1]}-${direction}`)
        // 计算下一个方向
        if (plate[pos[0]][pos[1]] === '.') {
            bfs(pos, step - 1, direction, cache, start)
        } else if (plate[pos[0]][pos[1]] === 'E') {
            const nextDir = nextDirWhenMeetE[direction]
            bfs(pos, step - 1, nextDir, cache, start)
        } else if (plate[pos[0]][pos[1]] === 'W') {
            const nextDir = nextDirWhenMeetW[direction]
            bfs(pos, step - 1, nextDir, cache, start)
        }
    }
    for (let i = 1; i < n - 1; i++) {
        if (plate[i][0] === '.') {
            bfs([i, 0], num - 1, 'right', new Set(), [i, 0])
        }
        if (plate[i][m - 1] === '.') {
            bfs([i, m - 1], num - 1, 'left', new Set(), [i, m - 1])
        }
    }
    for (let i = 1; i < m - 1; i++) {
        if (plate[0][i] === '.') {
            bfs([0, i], num - 1, 'bottom', new Set(), [0, i])
        }
        if (plate[n - 1][i] === '.') {
            bfs([n - 1, i], num - 1,'top', new Set(), [n - 1, i])
        }
    }
    return result
}