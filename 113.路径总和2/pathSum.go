package problem0113

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, sum int) [][]int {
	var (
		result [][]int
		helper func(node *TreeNode, sum int, container []int)
	)
	helper = func(node *TreeNode, sum int, container []int) {
		if node == nil {
			return
		}
		sum -= node.Val
		container = append(container, node.Val)
		if node.Left == nil && node.Right == nil && sum == 0 {
			t := make([]int, len(container))
			copy(t, container)
			result = append(result, t)
		}

		helper(node.Left, sum, container)
		helper(node.Right, sum, container)
	}
	helper(root, sum, []int{})

	return result
}
