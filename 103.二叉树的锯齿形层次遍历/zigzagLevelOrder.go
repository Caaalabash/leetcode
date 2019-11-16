package problem0103

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func zigzagLevelOrder(root *TreeNode) [][]int {
	var result [][]int

	var dfs func(node *TreeNode, level int)
	dfs = func(node *TreeNode, level int) {
		if node == nil {
			return
		}
		if level == len(result) {
			result = append(result, []int{})
		}
		dfs(node.Right, level+1)
		dfs(node.Left, level+1)
		if level&1 == 1 {
			result[level] = append(result[level], node.Val)
		} else {
			result[level] = append([]int{node.Val}, result[level]...)
		}
	}
	dfs(root, 0)

	return result
}
