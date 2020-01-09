package problem0993

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 二叉树的堂兄弟节点 = 深度一致 && 父节点不同
// => 通过某种方法求出每一个节点的深度和父节点
func isCousins(root *TreeNode, x int, y int) bool {
	var (
		depthMap  = map[int]int{}
		parentMap = map[int]*TreeNode{}
		dfs       func(node *TreeNode, parentNode *TreeNode)
	)
	dfs = func(node *TreeNode, parentNode *TreeNode) {
		if node == nil {
			return
		}
		if parentNode == nil {
			depthMap[node.Val] = 0
		} else {
			depthMap[node.Val] = depthMap[parentNode.Val] + 1
		}
		parentMap[node.Val] = parentNode
		dfs(node.Left, node)
		dfs(node.Right, node)
	}
	dfs(root, nil)

	return depthMap[x] == depthMap[y] && parentMap[x] != parentMap[y]
}
