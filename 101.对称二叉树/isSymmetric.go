package problem0101

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	return isMirrorNode(root, root)
}

func isMirrorNode(left *TreeNode, right *TreeNode) bool {
	if left == nil && right == nil {
		return true
	}
	if left == nil || right == nil {
		return false
	}
	return left.Val == right.Val && isMirrorNode(left.Left, right.Right) && isMirrorNode(left.Right, right.Left)
}
