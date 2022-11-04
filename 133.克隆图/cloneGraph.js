// 你吗你会不会写代码啊
function cloneGraph(node) {
    if (!node) {
        return node
    }
    const map = new WeakMap()
    const stack = [{ index: null, cloneParent: null, node }]
    let cloneNode

    while (stack.length) {
        const n = stack.pop()
        const neighborsLength = n.node.neighbors.length
        // 初始化
        if (!cloneNode) {
            cloneNode = new Node(n.node.val, new Array(neighborsLength))
            map.set(n.node, cloneNode)
            for (let i = 0; i < neighborsLength; i++) {
                stack.push({
                    index: i,
                    cloneParent: cloneNode,
                    node: n.node.neighbors[i],
                })
            }
            continue
        }
        // 避免循环
        if (map.has(n.node)) {
            n.cloneParent.neighbors[n.index] = map.get(n.node)
            continue
        }
        n.cloneParent.neighbors[n.index] = new Node(n.node.val, new Array(neighborsLength))
        map.set(n.node, n.cloneParent.neighbors[n.index])
        for (let i = 0; i < neighborsLength; i++) {
            stack.push({
                index: i,
                cloneParent: n.cloneParent.neighbors[n.index],
                node: n.node.neighbors[i],
            })
        }
    }
    return cloneNode
}

// 神！
function cloneGraph(node) {
    if (!node) {
        return
    }
    const map = new WeakMap([[node, new Node(node.val)]])
    const q = [node]
    while (q.length) {
        const n = q.shift()
        ;(n.neighbors || []).forEach(ne => {
            if (!map.has(ne)) {
                q.push(ne)
                map.set(ne, new Node(ne.val))
            }
            map.get(n).neighbors.push(map.get(ne))
        })
    }
    return map.get(node)
}

// Definition for a Node
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
}