package problem0111

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 本以为与最大深度相反即可
// 但是[1, 2]的深度为2, 说明, 空节点不参与比较
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Left == nil && root.Right != nil {
		return 1 + minDepth(root.Left)
	}
	if root.Right == nil && root.Left != nil {
		return 1 + minDepth(root.Right)
	}
	return min(minDepth(root.Left), minDepth(root.Right)) + 1
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
