function numColor(root) {
    const colorSet = new Set()
    const helper = node => {
        if (!node) return
        colorSet.add(node.val)
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    return colorSet.size
}