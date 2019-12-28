package problem0222

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 憨憨dfs
func countNodes(root *TreeNode) int {
	result := 0

	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		result++
		dfs(node.Left)
		dfs(node.Right)
	}
	dfs(root)

	return result
}

// 带秀dfs
func countNodes1(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return countNodes1(root.Right) + countNodes1(root.Left) + 1
}
