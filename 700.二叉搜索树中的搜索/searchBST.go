package problem0700

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 滑水题目，搜就完事了
func searchBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.Val == val {
		return root
	}
	if root.Val < val {
		return searchBST(root.Right, val)
	} else {
		return searchBST(root.Left, val)
	}
}
