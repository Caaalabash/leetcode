package problem0124

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 给定一个非空二叉树，返回其最大路径和，可以不经过根节点
// 对于如下结构，需要实现dfs函数, 接收node参数, 用于计算它及子树的最大贡献值
//       x
//        \
//         a
//        / \
//       b   c
// 它的最大值是x+a+b, x+a+c, a+b+c三者中的一个，如果暂时不考虑a+b+c的情况
// 那么最大值等于 dfs(a) = a + max(dfs(a.Left), dfs(a.Right))
// 对于a+b+c的情况，则需要遍历每个节点时计算一次，ans = max(ans, a+b+c)
func maxPathSum(root *TreeNode) int {
	var (
		ans = math.MinInt32
		dfs func(node *TreeNode) int
	)
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		leftVal := max(0, dfs(node.Left))
		rightVal := max(0, dfs(node.Right))
		ans = max(ans, node.Val+leftVal+rightVal)
		return node.Val + max(leftVal, rightVal)
	}
	dfs(root)
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
