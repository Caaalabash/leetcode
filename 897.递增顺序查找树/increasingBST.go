package problem0897

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 给定一棵树，按中序遍历重新排列树，返回一颗只有右子树的树（这样似乎更好理解）
// 核心就是中序遍历 + 置空node.Left
func increasingBST(root *TreeNode) *TreeNode {
	newRoot := &TreeNode{0, nil, nil}
	refRoot := newRoot

	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		node.Left = nil
		refRoot.Right = node
		refRoot = refRoot.Right
		dfs(node.Right)
	}
	dfs(root)

	return newRoot.Right
}
