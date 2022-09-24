function transportationHub(path) {
    const set = new Set()
    const graph = {}
    const inDegree = {}
    for (const [to, from] of path) {
        set.add(to)
        set.add(from)
        if (!(from in graph)) graph[from] = []
        if (!(to in inDegree)) inDegree[to] = 0
        graph[from].push(to)
        inDegree[to]++
    }
    for (const [k, v] of Object.entries(graph)) {
        if (!(k in inDegree) && v.length === set.size - 1) {
            return k
        }
    }
    return -1
}