// 这道题的递归还是细
function longestUnivaluePath(root) {
	if (!root) {
		return 0
	}
	let result = 0

	const dfs = node => {
		if (!node) {
			return 0
		}
		let left = 0
		let right = 0
		const l = dfs(node.left)
		const r = dfs(node.right)
		if (node.left && node.left.val === node.val) {
			left = l + 1
		}
		if (node.right && node.right.val === node.val) {
			right = r + 1
		}
		// 更新最大值时，考虑双侧
		result = Math.max(result, left + right)
		// dfs返回值返回的node节点是单侧的最长同值路径的长度
		return Math.max(left, right)
	}

	dfs(root)

	return result
}