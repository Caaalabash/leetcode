package problem0513

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findBottomLeftValue(root *TreeNode) int {
	var result int
	var depth int

	var dfs func(node *TreeNode, currentDepth int)
	dfs = func(node *TreeNode, currentDepth int) {
		if node == nil {
			return
		}
		dfs(node.Left, currentDepth+1)
		if currentDepth > depth {
			depth = currentDepth
			result = node.Val
		}
		dfs(node.Right, currentDepth+1)
	}
	dfs(root, 1)

	return result
}