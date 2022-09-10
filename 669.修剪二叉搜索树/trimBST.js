function trimBST(root, low, high) {
	// 修剪node，返回一个节点
	const helper = node => {
		if (!node) return null
		if (node.val > high) return helper(node.left)
		if (node.val < low) return helper(node.right)
		node.left = helper(node.left)
		node.right = helper(node.right)
		return node
	}
	return helper(root)
}