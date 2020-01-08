package problem0671

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 在一颗特殊的二叉树中寻找第二小的值：
// 1. 每个节点只有0个或者2个子节点
// 2. 节点的值 <= 子节点的值
// 那么也就是说root是最小的，只需要向下寻找一个稍大一点的即可, 因此将root
func findSecondMinimumValue(root *TreeNode) int {
	var (
		secondMinimum = -1
		dfs           func(root *TreeNode, pivot int)
	)

	if root == nil {
		return -1
	}
	dfs = func(root *TreeNode, pivot int) {
		if root == nil {
			return
		}
		if secondMinimum != -1 && root.Val > secondMinimum {
			return
		}
		if root.Val == pivot {
			dfs(root.Left, pivot)
			dfs(root.Right, pivot)
		} else {
			secondMinimum = root.Val
		}
	}
	dfs(root, root.Val)

	return secondMinimum
}
