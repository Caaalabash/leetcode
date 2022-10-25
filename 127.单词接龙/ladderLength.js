function ladderLength(beginWord, endWord, wordList) {
    // 关于wordList的校验：必须含有endWord
    if (!wordList.includes(endWord)) {
        return []
    }
    // wordList中的beginWord可以过滤掉
    wordList = wordList.filter(i => i !== beginWord)
    // 构造一个图
    const graph = {}
    const arr = [beginWord, ...wordList]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (canTransform(arr[i], arr[j])) {
                if (!(arr[i] in graph)) graph[arr[i]] = []
                if (!(arr[j] in graph)) graph[arr[j]] = []
                graph[arr[i]].push(arr[j])
                graph[arr[j]].push(arr[i])
            }
        }
    }
    // BFS判断是否存在有效路径并记录层级关系
    const queue = [beginWord]
    const levelMap = new Map([[beginWord, 0]])
    let level = 0
    let found = false
    outer:
        while (queue.length) {
            level++
            // 每次把queue清空
            const n = queue.length
            for (let i = 0; i < n; i++) {
                for (const next of (graph[queue.shift()] || [])) {
                    if (levelMap.has(next)) {
                        continue
                    }
                    levelMap.set(next, level)
                    queue.push(next)
                    if (next === endWord) {
                        found = true
                        break outer
                    }
                }
            }
        }
    return found ? level + 1 : 0
}

function canTransform(a, b) {
    const n = a.length
    let diffCount = 0
    for (let i = 0; i < n; i++) {
        if (a[i] !== b[i]) {
            if (++diffCount > 1) {
                return false
            }
        }
    }
    return true
}