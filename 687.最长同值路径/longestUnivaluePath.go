package problem0687

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func longestUnivaluePath(root *TreeNode) int {
	if root == nil {
		return 0
	}
	var (
		result = 0
		dfs    func(node *TreeNode) int
	)
	// 考虑一个递归：搜寻以node为起点的最长同值路径
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		l := dfs(node.Left)
		r := dfs(node.Right)
		left, right := 0, 0
		if node.Left != nil && node.Val == node.Left.Val {
			left = l + 1
		}
		if node.Right != nil && node.Val == node.Right.Val {
			right = r + 1
		}
		result = max(result, left+right)
		return max(left, right)
	}
	dfs(root)
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
