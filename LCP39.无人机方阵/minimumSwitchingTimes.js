function minimumSwitchingTimes(source, target) {
    const n = source.length
    const m = source[0].length
    const color = new Array(1e4 + 1).fill(0)
    let result = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            color[source[i][j]]++
            color[target[i][j]]--
        }
    }
    for (let i = 0; i < color.length; i++) {
        if (color[i] > 0) {
            result += color[i]
        }
    }

    return result
}