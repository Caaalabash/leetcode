function levelOrder(root) {
	if (!root) return []

	const result = []
	const stack = [root]

	while (stack.length) {
		result.push([])
		const length = stack.length
		for (let i = 0; i < length; i++) {
			const node = stack.shift()
			result[result.length - 1].push(node.val)
			for (let j = 0; j < node.children.length; j++) {
				stack.push(node.children[j])
			}
		}
	}

	return result
}