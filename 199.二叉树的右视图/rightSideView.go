package problem0199

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 右视图：在深度优先搜索中每层都先访问右子树即可，将根节点视作第一层
func rightSideView(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	result := []int{root.Val}

	var dfs func(node *TreeNode, depth int)
	dfs = func(node *TreeNode, depth int) {
		if node == nil {
			return
		}
		if depth > len(result) {
			result = append(result, node.Val)
		}
		dfs(node.Right, depth+1)
		dfs(node.Left, depth+1)
	}
	dfs(root, 1)

	return result
}
