package problem0404

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumOfLeftLeaves(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if isLeftLeaf(root.Left) {
		return root.Left.Val + sumOfLeftLeaves(root.Left) + sumOfLeftLeaves(root.Right)
	}
	return sumOfLeftLeaves(root.Left) + sumOfLeftLeaves(root.Right)
}

func isLeftLeaf(node *TreeNode) bool {
	return node != nil && node.Right == nil && node.Left == nil
}
