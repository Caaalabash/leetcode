package problem0094

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// dfs
func inorderTraversal(root *TreeNode) []int {
	var (
		result []int
		dfs    func(node *TreeNode)
	)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		result = append(result, node.Val)
		dfs(node.Right)
	}
	dfs(root)
	return result
}

// 一个好理解的遍历栈做法
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/yan-se-biao-ji-fa-yi-chong-tong-yong-qie-jian-ming/
// 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
// 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈(顺序可根据遍历方式调整)。
// 如果遇到的节点为灰色，则将节点的值输出。
type ColorNode struct {
	Color int
	Node  *TreeNode
}

const WHITE = 0
const GRAY = 1

func inorderTraversal1(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	var result []int
	// 栈, 初始值为未访问的root
	// 第一次 => [右1, root(gray), 左1]
	// 第二次 => [右1, root(gray), 右2, 左1(gray), 左2]
	stack := []*ColorNode{&ColorNode{Color: WHITE, Node: root}}

	for len(stack) != 0 {
		lastNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if lastNode.Node == nil {
			continue
		}
		if lastNode.Color == WHITE {
			stack = append(stack,
				&ColorNode{Color: WHITE, Node: lastNode.Node.Right},
				&ColorNode{Color: GRAY, Node: lastNode.Node},
				&ColorNode{Color: WHITE, Node: lastNode.Node.Left},
			)
		} else {
			result = append(result, lastNode.Node.Val)
		}
	}
	return result
}
