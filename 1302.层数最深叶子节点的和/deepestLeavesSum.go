package problem1302

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func deepestLeavesSum(root *TreeNode) int {
	var (
		result int
		deep   int
		dfs    func(node *TreeNode, depth int)
	)
	dfs = func(node *TreeNode, depth int) {
		if node == nil {
			return
		}
		if depth > deep {
			result = node.Val
			deep = depth
		} else if depth == deep {
			result += node.Val
		}
		dfs(node.Left, depth+1)
		dfs(node.Right, depth+1)
	}
	dfs(root, 1)
	return result
}
