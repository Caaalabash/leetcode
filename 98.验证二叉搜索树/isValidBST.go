package problem0098

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 是否为合法二叉搜索树 = 其中序遍历的结果递增且无重复
func isValidBST(root *TreeNode) bool {
	var list []int
	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		list = append(list, node.Val)
		dfs(node.Right)
	}
	dfs(root)
	for i := 1; i < len(list); i++ {
		if list[i] <= list[i-1] {
			return false
		}
	}
	return true
}
