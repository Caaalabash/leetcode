// 基于BFS的拓扑排序算法
function findOrder(numCourses, prerequisites) {
    // 建立邻接表并计算入度
    const graph = new Array(numCourses).fill(0).map(() => [])
    const inDegreeArr = new Array(numCourses).fill(0)
    for (const edge of prerequisites) {
        graph[edge[1]].push(edge[0])
        inDegreeArr[edge[0]]++
    }
    // 将所有入度为0的点放入队列
    const result = []
    const q = []
    for (let i = 0; i < numCourses; i++) {
        if (inDegreeArr[i] === 0) {
            q.push(i)
        }
    }
    // 开始BFS
    while (q.length) {
        const t = q.pop()
        result.push(t)
        // 入度-1
        for (const i of graph[t]) {
            inDegreeArr[i]--
            if (inDegreeArr[i] === 0) {
                q.push(i)
            }
        }
    }
    // 判圈
    return result.length === numCourses ? result : []
}

// 基于DFS的拓扑排序算法
function findOrder(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => [])
    const visited = new Array(numCourses).fill(0)
    const result = new Array(numCourses)
    let idx = numCourses - 1
    let hasCycle = false

    // DFS
    const dfs = (i) => {
        visited[i] = 1
        for (const v of graph[i]) {
            if (visited[v] === 1) {
                hasCycle = true
                return
            }
            if (visited[v] === 0) {
                dfs(v)
                if (hasCycle) return
            }
        }
        visited[i] = 2
        result[idx--] = i
    }
    // 建图
    for (const edge of prerequisites) {
        graph[edge[1]].push(edge[0])
    }
    // 遍历所有顶点，对未搜素状态的顶点执行dfs
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) {
            dfs(i)
            if (hasCycle) return []
        }
    }
    return result
}