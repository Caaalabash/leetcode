// 遍历words，根据递增关系寻找指向关系,然后拓扑排序
function alienOrder(words) {
    const graph = {}
    const inDeg = {}
    const queue = []
    let result = ''

    // 先遍历一次，初始化graph, inDeg
    for (const word of words) {
         for (const char of word) {
             graph[char] = []
             inDeg[char] = 0
         }
    }
    // 构建关系
    for (let i = 0; i < words.length - 1; i++) {
        const len = Math.min(words[i].length, words[i + 1].length)
        let allMatch = true
        for (let j = 0; j < len; j++) {
            if (words[i][j] !== words[i + 1][j]) {
                graph[words[i][j]].push(words[i + 1][j])
                inDeg[words[i + 1][j]]++
                allMatch = false
                break
            }
        }
        // 处理一些错误的测试用例，例如["abc", "ab"]
        if (allMatch && words[i].length > words[i + 1].length) {
            return ''
        }
    }
    // 入度为0入队
    for (const entry of Object.entries(inDeg)) {
        if (entry[1] === 0) {
            queue.push(entry[0])
            result += entry[0]
        }
    }
    // BFS清空队列
    while (queue.length) {
        const parent = queue.shift()
        for (const child of graph[parent]) {
            if (--inDeg[child] === 0) {
                queue.push(child)
                result += child
            }
        }
    }
    if (result.length < Object.keys(graph).length) return ''
    return result
}