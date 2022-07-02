function pathSum(root, targetSum) {
	if (!root) {
		return []
	}
	const result = []
	const dfs = (node, sum, path) => {
		if (!node) return
		if (!node.left && !node.right) {
			if (sum === node.val) {
				result.push([...path, node.val])
			}
			return
		}
		dfs(node.left, sum - node.val, [...path, node.val])
		dfs(node.right, sum - node.val, [...path, node.val])
	}
	dfs(root, targetSum, [])
	return result
}