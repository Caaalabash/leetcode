package problem0437

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 双重递归
func pathSum(root *TreeNode, sum int) int {
	if root == nil {
		return 0
	}

	var dfs func(node *TreeNode, sum int) int
	dfs = func(node *TreeNode, sum int) int {
		if node == nil {
			return 0
		}
		count := 0
		if sum == node.Val {
			count = 1
		}
		return dfs(node.Left, sum-node.Val) + dfs(node.Right, sum-node.Val) + count
	}

	return dfs(root, sum) + pathSum(root.Left, sum) + pathSum(root.Right, sum)
}
