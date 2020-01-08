package problem0572

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 检查t是否是s的一颗子树，结构必须一致
func isSubtree(s *TreeNode, t *TreeNode) bool {
	if isSameTree(s, t) {
		return true
	}
	if s == nil {
		return false
	}
	return isSubtree(s.Left, t) || isSubtree(s.Right, t)
}

func isSameTree(a, b *TreeNode) bool {
	if a == nil && b == nil {
		return true
	}
	if a == nil || b == nil {
		return false
	}
	if a.Val != b.Val {
		return false
	}
	return isSameTree(a.Left, b.Left) && isSameTree(a.Right, b.Right)
}
