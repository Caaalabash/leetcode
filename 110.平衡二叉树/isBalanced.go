package problem0110

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 与二叉树的最大深度 & 最小深度很相似
func isBalanced(root *TreeNode) bool {
	status, _ := checkAndNext(root)
	return status
}

func checkAndNext(node *TreeNode) (bool, int) {
	if node == nil {
		return true, 0
	}
	leftStatus, leftDepth := checkAndNext(node.Left)
	rightStatus, rightDepth := checkAndNext(node.Right)

	if leftStatus == false || rightStatus == false || leftDepth-rightDepth > 1 || rightDepth-leftDepth > 1 {
		return false, 0
	}
	if leftDepth > rightDepth {
		return true, leftDepth + 1
	} else {
		return true, rightDepth + 1
	}
}
