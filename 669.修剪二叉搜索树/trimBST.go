package problem0669

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 给定一颗二叉搜索树，同时给定边界[L, R]，返回修剪好的二叉搜索树的新的根节点
//
func trimBST(root *TreeNode, L int, R int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.Val < L {
		return trimBST(root.Right, L, R)
	}
	if root.Val > R {
		return trimBST(root.Left, L, R)
	}
	root.Left = trimBST(root.Left, L, R)
	root.Right = trimBST(root.Right, L, R)
	return root
}
