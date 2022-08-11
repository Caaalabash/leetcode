function pruneTree(root) {
    if (!root) return null
    const dfs = (node) => {
        if (!node) return false
        if (!node.left && !node.right) return node.val === 1
        const leftHasOne = dfs(node.left)
        const rightHasOne = dfs(node.right)
        node.left = leftHasOne ? node.left : null
        node.right = rightHasOne ? node.right : null
        return leftHasOne || rightHasOne || node.val === 1
    }
    return dfs(root) ? root : null
}

// 显然不如
function pruneTree(root) {
    if (!root) return null
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    if (!root.left && !root.right && root.val === 0) return null
    return root
}