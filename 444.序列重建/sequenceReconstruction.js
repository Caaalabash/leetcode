// 拓扑排序
// 判断根据sequence构造的超序列的结果是否唯一
// 将sequence视作有向图，进行拓扑排序处理，只要队列中元素数量大于1，就说明不存在唯一解
// 题目表明：sequence中不会存在环
function sequenceReconstruction(nums, sequence) {
    const n = nums.length
    const graph = new Array(n).fill(0).map(() => [])
    const inDeg = new Array(n).fill(0)
    const queue = []

    for (const seq of sequence) {
        for (let i = 0; i < seq.length - 1; i++) {
            inDeg[seq[i + 1] - 1]++
            graph[seq[i] - 1].push(seq[i + 1] - 1)
        }
    }

    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        if (queue.length > 1) return false
        const parent = queue.shift()
        for (const child of graph[parent]) {
            if (--inDeg[child] === 0) {
                queue.push(child)
            }
        }
    }

    return true
}