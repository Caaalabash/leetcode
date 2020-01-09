package problem0606

import "strconv"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 题目的描述很垃圾，意思是，子节点需要用"()"包裹
// [root, left, right]输出为 => root(left)(right)
// [root, null, right]输出为 => root()(right)
// [root, left, null]输出为 => root(left)
func tree2str(root *TreeNode) string {
	if root == nil {
		return ""
	}
	if root.Left != nil && root.Right != nil {
		return strconv.Itoa(root.Val) + "(" + tree2str(root.Left) + ")" + "(" + tree2str(root.Right) + ")"
	}
	if root.Left != nil && root.Right == nil {
		return strconv.Itoa(root.Val) + "(" + tree2str(root.Left) + ")"
	}
	if root.Left == nil && root.Right != nil {
		return strconv.Itoa(root.Val) + "()" + "(" + tree2str(root.Right) + ")"
	}
	return strconv.Itoa(root.Val)
}
