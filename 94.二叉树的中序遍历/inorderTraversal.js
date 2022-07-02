function inorderTraversal(root) {
	const result = []
	const dfs = node => {
		if (!node) return
		dfs(node.left)
		result.push(node.val)
		dfs(node.right)
	}
	dfs(root)
	return result
}