// RATING 1678
// 拓扑排序
function findAllRecipes(recipes, ingredients, supplies) {
    const n = recipes.length
    const graph = {}
    const inDegree = {}
    const queue = []
    const result = []
    // 构图 + 入度
    for (let i = 0; i < n; i++) {
        for (const item of ingredients[i]) {
            if (!(item in graph)) graph[item] = []
            // 原料 -> 菜
            graph[item].push(recipes[i])
        }
        inDegree[recipes[i]] = ingredients[i].length
    }
    // 把材料放入队列
    for (const supply of supplies) {
        queue.push(supply)
    }
    // 拓扑排序
    while (queue.length) {
        const supply = queue.shift()
        if (supply in graph) {
            for (const item of graph[supply]) {
                if (--inDegree[item] === 0) {
                    result.push(item)
                    queue.push(item)
                }
            }
        }
    }
    return result
}