function levelOrder(root) {
	if (!root) return []
	const stack = [root]
	const result = []

	while (stack.length) {
		result.push([])
		const len = stack.length
		for (let i = 0; i < len; i++) {
			const node = stack.shift()
			result[result.length - 1].push(node.val)
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
	}
	return result
}