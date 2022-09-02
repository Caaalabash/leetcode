// 对于输入的queries数组，返回一个布尔数组，表明是否是先决条件
// 比常规拓扑排序多了一个存储前面节点的数组
function checkIfPrerequisite(numCourses, prerequisites, queries) {
    const graph = new Array(numCourses).fill(0).map(() => [])
    const inDeg = new Array(numCourses).fill(0)
    const prevSet = new Array(numCourses).fill(0).map(() => new Set())
    const result = new Array(queries.length).fill(true)
    const queue = []

    for (const [u, v] of prerequisites) {
        graph[u].push(v)
        inDeg[v]++
    }
    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        const parent = queue.shift()
        for (const child of graph[parent]) {
            prevSet[child].add(parent)
            for (const gradP of prevSet[parent]) {
                prevSet[child].add(gradP)
            }
            if (--inDeg[child] === 0) {
                queue.push(child)
            }
        }
    }
    for (let i = 0; i < queries.length; i++) {
        result[i] = prevSet[queries[i][1]].has(queries[i][0])
    }
    return result
}