package problem0543

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 题意怪怪的，因为树结构节点之间的连线是"/"，倾斜的，不容易往高度上联想，实际是104题的拓展
// result = max(preResult, depth(root.Right) + depth(root.Left))
func diameterOfBinaryTree(root *TreeNode) int {
	var (
		result int
		depth  func(root *TreeNode) int
	)

	depth = func(root *TreeNode) int {
		if root == nil {
			return 0
		}
		left := depth(root.Left)
		right := depth(root.Right)
		result = max(result, left+right)
		return max(left, right) + 1
	}
	depth(root)

	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
