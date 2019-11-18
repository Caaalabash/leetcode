package problem1022

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumRootToLeaf(root *TreeNode) int {
	var sum int

	var helper func(node *TreeNode, parentVal int)
	helper = func(node *TreeNode, parentVal int) {
		if node == nil {
			return
		}
		parentVal = parentVal<<1 | node.Val
		if node.Left == nil && node.Right == nil {
			sum += parentVal
			return
		}
		helper(node.Left, parentVal)
		helper(node.Right, parentVal)
	}
	helper(root, 0)

	return sum
}
