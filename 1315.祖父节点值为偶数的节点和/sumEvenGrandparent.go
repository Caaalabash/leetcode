package problem1315

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumEvenGrandparent(root *TreeNode) int {
	var (
		result int
		dfs    func(gradParentVal int, parentVal int, node *TreeNode)
	)
	dfs = func(gradParentVal int, parentVal int, node *TreeNode) {
		if node == nil {
			return
		}
		if gradParentVal&1 == 0 {
			result += node.Val
		}
		dfs(parentVal, node.Val, node.Left)
		dfs(parentVal, node.Val, node.Right)
	}
	dfs(1, 1, root)
	return result
}
