function movingCount(m, n, k) {
    const visit = new Array(m).fill(0).map(() => new Array(n).fill(false))
    // 经过分析，可以只向右下遍历，但分析不出来
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || visit[i][j]) {
            return
        }
        if (get(i) + get(j) > k) {
            visit[i][j] = true
            return
        }
        result++
        visit[i][j] = true
        direction.forEach(dir => dfs(i + dir[0], j + dir[1]))
    }
    let result = 0
    dfs(0, 0)
    return result
}

// 获取数位之和
function get(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = (num - num % 10) / 10
    }
    return sum
}
