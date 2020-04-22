package problem1110

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// []int => map 快速查询
// 哑节点 + 后续遍历
func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
	var (
		result []*TreeNode
		dfs    func(node *TreeNode) bool
	)

	deleteMap := make(map[int]struct{}, 0)
	deleteMap[0] = struct{}{}
	for _, v := range to_delete {
		deleteMap[v] = struct{}{}
	}

	dfs = func(node *TreeNode) bool {
		if node != nil {
			if dfs(node.Left) {
				node.Left = nil
			}
			if dfs(node.Right) {
				node.Right = nil
			}
			if _, ok := deleteMap[node.Val]; ok {
				if node.Left != nil {
					result = append(result, node.Left)
				}
				if node.Right != nil {
					result = append(result, node.Right)
				}
				return true
			}
		}
		return false
	}
	dfs(&TreeNode{0, root, nil})
	return result
}
