function garbageCollection(garbage, travel) {
    const position = { G: 0, M: 0, P: 0 }
    const cost = { G: 0, M: 0, P: 0 }
    for (let i = 0; i < garbage.length; i++) {
        const obj = { G: 0, M: 0, P: 0 }
        for (let j = 0; j < garbage[i].length; j++) {
            obj[garbage[i][j]]++
            cost[garbage[i][j]]++
        }
        for (const type of ['G', 'M', 'P']) {
            // 该类型垃圾车需要从position[type] 移动到 i 位置
            if (obj[type] !== 0) {
                for (let p = position[type]; p < i; p++) {
                    cost[type] += travel[p] || 0
                }
                position[type] = i
            }
        }
    }
    return cost.G + cost.M + cost.P
}
