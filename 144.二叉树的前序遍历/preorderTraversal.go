package problem0144

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type ColorNode struct {
	Color int
	Node  *TreeNode
}

const WHITE = 0
const GRAY = 1

// 继续使用94的遍历栈做法
// 前序遍历: 根节点 -> 左节点 -> 右节点, 当展开下一个节点的时候, 使用颜色标记来避免重复
func preorderTraversal(root *TreeNode) []int {
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
				&ColorNode{WHITE, lastNode.Node.Right},
				&ColorNode{WHITE, lastNode.Node.Left},
				&ColorNode{GRAY, lastNode.Node},
			)
		} else {
			result = append(result, lastNode.Node.Val)
		}
	}
	return result
}

// dfs
func preorderTraversal1(root *TreeNode) []int {
	var (
		result []int
		dfs    func(node *TreeNode)
	)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		result = append(result, node.Val)
		dfs(node.Left)
		dfs(node.Right)
	}
	dfs(root)
	return result
}
