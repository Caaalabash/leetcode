package problem0938

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 给定二叉搜索树，返回L和R（含）之间的所有节点的值的和
// 普通的做法虽然一目了然，但是有多余的判断
func rangeSumBST(root *TreeNode, L int, R int) int {
	var (
		result int
		dfs    func(node *TreeNode)
	)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		if L <= node.Val && node.Val <= R {
			result += node.Val
		}
		dfs(node.Right)
	}
	dfs(root)

	return result
}

// Better
// 当前值小于L，搜索右子树
// 当前值大于R，搜索左子树
func rangeSumBST1(root *TreeNode, L int, R int) int {
	if root == nil {
		return 0
	}
	if root.Val > R {
		return rangeSumBST(root.Left, L, R)
	}
	if root.Val < L {
		return rangeSumBST(root.Right, L, R)
	}
	return root.Val + rangeSumBST(root.Left, L, R) + rangeSumBST(root.Right, L, R)
}
