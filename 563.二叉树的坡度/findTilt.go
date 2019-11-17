package problem0563

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 此题题目需要多看几遍!
// 坡度(node) = Math.abs(node.Left下所有节点和 - node.Right下所有节点和)
// 树的坡度 = 各个节点的坡度之和
func findTilt(root *TreeNode) int {
	var treeTilt int

	var helper func(node *TreeNode) int
	helper = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		leftTotal := helper(node.Left)
		rightTotal := helper(node.Right)
		treeTilt += abs(leftTotal - rightTotal)
		return node.Val + rightTotal + leftTotal
	}
	helper(root)

	return treeTilt
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}
