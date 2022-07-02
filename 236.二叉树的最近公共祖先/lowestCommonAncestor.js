// root 为 p、q 最近公共祖先的情况：
// p、q分别位于root.left， root.right
// p = root
// q = root

// 实际实现时，函数定义与题目要求有差异
// 题目定义 lowestCommonAncestor 为从 root 中找到 p、q 的最近公共祖先，一定有值
// 实现定义 lowestCommonAncestor 为从 root 中 p 和 q 其中一个
function lowestCommonAncestor(root, p, q) {
	if (!root || root === p || root === q) {
		return root
	}
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)
	if (left && right) {
		return root
	} else if (!left) {
		return right
	} else if (!right) {
		return left
	}
	return null
}