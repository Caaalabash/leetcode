package problem0113

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, sum int) [][]int {
	var result [][]int

	var helper func(node *TreeNode, sum int, container []int)
	helper = func(node *TreeNode, sum int, container []int) {
		sum -= node.Val
		container = append(container, node.Val)
		if node.Left == nil && node.Right == nil {
			if sum == 0 {
				t := make([]int, len(container))
				copy(t, container)
				result = append(result, t)
			}
			return
		}

		if node.Left != nil {
			helper(node.Left, sum, container)
		}
		if node.Right != nil {
			helper(node.Right, sum, container)
		}
	}

	if root != nil {
		helper(root, sum, []int{})
	}

	return result
}
