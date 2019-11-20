package problem0513

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 找树最左下角的值, 题意为: 如果最底层只有一个，那就返回最底层的点，如果最底层有多个，就返回最底层做左边的那个
// 递归基于信任，每次向下"递"深度，当深度大于当前记录值时，更新结果以及记录值
// 因为左侧的优先级要高一点，因此先递归左树
// 如果你想先递归右树，current >= depth即可
func findBottomLeftValue(root *TreeNode) int {
	var result int
	var depth int

	var dfs func(node *TreeNode, currentDepth int)
	dfs = func(node *TreeNode, currentDepth int) {
		if node == nil {
			return
		}
		if currentDepth > depth {
			depth = currentDepth
			result = node.Val
		}
		dfs(node.Left, currentDepth+1)
		dfs(node.Right, currentDepth+1)
	}
	dfs(root, 1)

	return result
}