package problem1325

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 删除所有值为target的叶子节点
func removeLeafNodes(root *TreeNode, target int) *TreeNode {
	if root == nil {
		return nil
	}
	root.Left = removeLeafNodes(root.Left, target)
	root.Right = removeLeafNodes(root.Right, target)
	if root.Left == nil && root.Right == nil && root.Val == target {
		return nil
	}
	return root
}
