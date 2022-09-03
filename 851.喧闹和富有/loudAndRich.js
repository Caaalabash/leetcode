// RATE 1783
// 拓扑排序即可
function loudAndRich(richer, quiet) {
    const n = quiet.length
    const graph = new Array(n).fill(0).map(() => [])
    const inDeg = new Array(n).fill(0)
    const result = new Array(n).fill(0).map((_, index) => index)
    const queue = []

    // 钱多 -> 钱少
    for (const [u, v] of richer) {
        graph[u].push(v)
        inDeg[v]++
    }
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        const parent = queue.shift()
        for (const child of graph[parent]) {
            if (quiet[result[child]] > quiet[result[parent]]) {
                result[child] = result[parent]
            }
            if (--inDeg[child] === 0) {
                queue.push(child)
            }
        }
    }
    return result
}