// 核心：当前节点得到左右子树高度一致时，返回当前节点
function subtreeWithAllDeepest(root) {
   if (!root) return root
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)

    if (leftDepth === rightDepth) {
        return root
    }
    if (leftDepth > rightDepth) {
        return subtreeWithAllDeepest(root.left)
    }
    return subtreeWithAllDeepest(root.right)
}

function getDepth(node) {
    if (!node) return 0
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1
}