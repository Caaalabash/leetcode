package problem0145

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type ColorNode struct {
	Color int
	Node  *TreeNode
}

const WHITE = 1
const BLACK = 2

// 采用94/144一样的做法
// 后序遍历: 左 -> 右 -> 根
func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	var result []int
	stack := []*ColorNode{&ColorNode{WHITE, root}}

	for len(stack) != 0 {
		lastNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if lastNode.Node == nil {
			continue
		}
		if lastNode.Color == WHITE {
			stack = append(stack,
				&ColorNode{BLACK, lastNode.Node},
				&ColorNode{WHITE, lastNode.Node.Right},
				&ColorNode{WHITE, lastNode.Node.Left},
			)
		} else {
			result = append(result, lastNode.Node.Val)
		}
	}
	return result
}
