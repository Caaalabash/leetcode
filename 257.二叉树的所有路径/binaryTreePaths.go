package problem0257

import "strconv"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func binaryTreePaths(root *TreeNode) []string {
	var result []string

	var helper func(node *TreeNode, parentStr string)
	helper = func(node *TreeNode, parentStr string) {
		if node == nil {
			return
		}
		parentStr = parentStr + "->" + strconv.Itoa(node.Val)
		if node.Left == nil && node.Right == nil {
			result = append(result, parentStr[2:])
			return
		}
		helper(node.Left, parentStr)
		helper(node.Right, parentStr)
	}
	helper(root, "")

	return result
}
