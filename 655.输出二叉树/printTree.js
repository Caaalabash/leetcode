function printTree(root) {
    // 求树的高度, 一层 = 0
    const height = getHeight(root) - 1
    const m = height + 1
    const n = Math.pow(2, height + 1) - 1
    const result = new Array(m).fill(0).map(() => new Array(n).fill(''))

    const write = (node, x, y) => {
        if (!node) return
        result[x][y] = String(node.val)
        const delta = Math.pow(2, height - x - 1)
        write(node.left, x + 1, y - delta)
        write(node.right, x + 1, y + delta)
    }
    write(root, 0, (n - 1) >> 1)

    return result
}

function getHeight(node) {
    if (!node) return 0
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}