package problem1026

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxAncestorDiff(root *TreeNode) int {
	result := 0
	var dfs func(node *TreeNode, maxVal int, minVal int)
	dfs = func(node *TreeNode, maxVal int, minVal int) {
		if node == nil {
			result = max(result, maxVal-minVal)
			return
		}
		maxVal = max(maxVal, node.Val)
		minVal = min(minVal, node.Val)
		dfs(node.Left, maxVal, minVal)
		dfs(node.Right, maxVal, minVal)
	}
	dfs(root, root.Val, root.Val)
	return result
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
