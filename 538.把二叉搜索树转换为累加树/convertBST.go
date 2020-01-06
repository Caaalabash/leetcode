package problem0538

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func convertBST(root *TreeNode) *TreeNode {
	var (
		sum = 0
		dfs func(root *TreeNode)
	)
	dfs = func(root *TreeNode) {
		if root != nil {
			dfs(root.Right)
			root.Val += sum
			sum = root.Val
			dfs(root.Left)
		}
	}
	dfs(root)

	return root
}
