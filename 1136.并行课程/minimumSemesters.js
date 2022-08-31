// 编号 1-n，涉及到编号到数组索引的转换
// 拓扑排序，返回while循环次数
function minimumSemesters(n, relations) {
    const graph = new Array(n).fill(0).map(() => [])
    const inDeg = new Array(n).fill(0)
    const queue = []
    let result = 0
    let learnCount = 0

    for (const [u, v] of relations) {
        graph[u - 1].push(v - 1)
        inDeg[v - 1]++
    }
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        result++
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const p = queue.shift()
            learnCount++
            for (const c of graph[p]) {
                if (--inDeg[c] === 0) {
                    queue.push(c)
                }
            }
        }
    }
    return learnCount === n ? result : -1
}