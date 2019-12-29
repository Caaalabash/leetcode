package problem0515

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func largestValues(root *TreeNode) []int {
	var (
		result []int
		dfs    func(node *TreeNode, depth int)
	)
	dfs = func(node *TreeNode, depth int) {
		if node == nil {
			return
		}
		if depth > len(result) {
			result = append(result, node.Val)
		} else if node.Val > result[depth-1] {
			result[depth-1] = node.Val
		}
		dfs(node.Left, depth+1)
		dfs(node.Right, depth+1)
	}
	dfs(root, 1)

	return result
}
