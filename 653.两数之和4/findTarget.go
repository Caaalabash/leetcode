package problem0653

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 给定一颗二叉搜索树和一个目标结果，如果BST中存在两个元素且他们的和等于目标结果则返回True
// 做法同第一题
func findTarget(root *TreeNode, k int) bool {
	var (
		m   = map[int]struct{}{}
		dfs func(node *TreeNode)
	)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		m[node.Val] = struct{}{}
		dfs(node.Right)
	}
	dfs(root)

	for key := range m {
		if _, ok := m[k-key]; ok && k>>1 != key {
			return true
		}
	}
	return false
}
