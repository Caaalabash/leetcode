function kthSmallest(root, k) {
	const stack = []
	while (stack.length || root) {
		while (root !== null) {
			stack.push(root)
			root = root.left
		}
		root = stack.pop()
		k--
		if (k === 0) {
			return root.val
		}
		root = root.right
	}
}