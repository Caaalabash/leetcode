// 时间复杂度 O(k^2 + m + n)
// 空间复杂度 O(k + m + n)
//    3 2 1
// 1  x x 1
// 3  3 x x
// 2  x 2 x
// 除了拓扑排序，后半部分也没那么好理解
function buildMatrix(k, rowConditions, colConditions) {
    const row = topoSort(k, rowConditions)
    const col = topoSort(k, colConditions)
    // 存在环
    if (row.length < k || col.length < k) {
        return []
    }

    const ans = new Array(k).fill(0).map(() => new Array(k).fill(0))
    // 构建出坐标
    const pos = new Array(k).fill(0).map(() => [])
    for (let i = 0; i < k; i++) {
        pos[row[i]][0] = i
        pos[col[i]][1] = i
    }
    for (let i = 0; i < k; i++) {
        ans[pos[i][0]][pos[i][1]] = i + 1
    }

    return ans
}

function topoSort(n, edges) {
    const res = []
    const indeg = new Array(n).fill(0)
    const graph = new Array(n).fill(0).map(() => [])
    const queue = []

    // a指向b
    for (let [a, b] of edges) {
        // 题目是 1 ~ k，转化为 0 ~ k，后面返回结果的时候再加回来
        a -= 1
        b -= 1
        graph[a].push(b)
        indeg[b]++
    }

    // 初始入度为 0 的点入队列
    for (let i = 0; i < n; i++) {
        if (indeg[i] === 0) {
            queue.push(i)
            res.push(i)
        }
    }

    // BFS处理
    while (queue.length) {
        const a = queue.shift()
        for (const b of graph[a]) {
            if (--indeg[b] === 0) {
                queue.push(b)
                res.push(b)
            }
        }
    }

    return res
}