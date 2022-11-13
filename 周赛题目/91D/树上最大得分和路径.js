// 超时
function mostProfitablePath(edges, bob, amount) {
    // 路径计算
    const findWay = (from, to, path) => {
        // 已经访问过
        if (path.includes(from)) {
            return
        }
        // 抵达目标地点
        if (from === to) {
            return [...path, from]
        }
        for (const next of graph[from]) {
            const result = findWay(next, to, [...path, from])
            if (result) {
                return result
            }
        }
    }
    // 图
    const graph = {}
    for (const [u, v] of edges) {
        if (!(u in graph)) graph[u] = []
        if (!(v in graph)) graph[v] = []
        graph[u].push(v)
        graph[v].push(u)
    }
    // 非0的叶子节点
    const aliceWayList = []
    for (const [k, v] of Object.entries(graph)) {
        if (+k !== 0 && v.length === 1) {
            aliceWayList.push(findWay(0, +k, []))
        }
    }
    const bobWay = findWay(bob, 0, [])
    let aliceBestScore = Number.MIN_SAFE_INTEGER
    for (const aliceWay of aliceWayList) {
        let score = 0
        const visited = new Set() // 访问过
        for (let i = 0; i < aliceWay.length; i++) {
            // 判断是否bob访问过, 分数不变
            if (visited.has(aliceWay[i])) {
                continue
            }
            // 判断是否同时到达
            if (i < bobWay.length && aliceWay[i] === bobWay[i]) {
                score += amount[aliceWay[i]] / 2
            } else {
                score += amount[aliceWay[i]]
            }
            // bob访问过
            if (i < bobWay.length) visited.add(bobWay[i])
        }
        aliceBestScore = Math.max(aliceBestScore, score)
    }
    return aliceBestScore
}

function mostProfitablePath(edges, bob, amount) {
    // 图
    const graph = {}
    for (const [u, v] of edges) {
        if (!(u in graph)) graph[u] = []
        if (!(v in graph)) graph[v] = []
        graph[u].push(v)
        graph[v].push(u)
    }
    const n = Object.keys(graph).length
    // 表示bob访问节点x的时间
    const bobTime = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    const dfsBob = (x, fa, t) => {
        // 抵达终点
        if (x === 0) {
            bobTime[x] = t
            return true
        }
        let found = false
        for (const next of graph[x]) {
            if (next !== fa && dfsBob(next, x, t + 1)) {
                found = true
            }
        }
        if (found) {
            bobTime[x] = t
        }
        return found
    }
    dfsBob(bob, -1, 0)
    // 0到其他叶子节点
    let result = Number.MIN_SAFE_INTEGER
    const dfsAlice = (x, fa, aliceTime, sum) => {
        if (aliceTime < bobTime[x]) {
            sum += amount[x]
        } else if (aliceTime === bobTime[x]) {
            sum += amount[x] / 2
        }
        // 如果到达叶子节点，更新答案
        if (x !== 0 && graph[x].length === 1) {
            result = Math.max(result, sum)
            return
        }
        for (const next of graph[x]) {
            if (next !== fa) {
                dfsAlice(next, x, aliceTime + 1, sum)
            }
        }
    }
    dfsAlice(0, -1, 0, 0)
    return result
}