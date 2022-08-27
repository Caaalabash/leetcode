// 感染二叉树需要的总时间
// 从二叉树构造图，再BFS遍历
function amountOfTime(root, start) {
    // 构造图
    const graph = {}
    const helper = (node, parentNode) => {
        if (!node) return

        if (parentNode) {
            if (!(parentNode.val in graph)) graph[parentNode.val] = []
            if (!(node.val in graph)) graph[node.val] = []
            graph[parentNode.val].push(node.val)
            graph[node.val].push(parentNode.val)
        }
        helper(node.left, node)
        helper(node.right, node)
    }
    helper(root, null)
    // BFS遍历
    const visited = new Set()
    let costMin = -1
    let stack = [start]
    while (stack.length) {
        costMin++
        const len = stack.length
        for (let i = 0; i < len; i++) {
            const item = stack.shift()
            if (visited.has(item)) continue
            visited.add(item)
            for (const i of graph[item] || []) {
                if (visited.has(i)) continue
                stack.push(i)
            }
        }
    }
    return costMin
}