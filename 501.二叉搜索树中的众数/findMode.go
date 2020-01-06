package problem0501

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 根据题目要求，二叉搜索树的中序遍历结果可能如下
// [1,1,2,2,3,3,3]
// 那么过程就是1进数组 => 2进数组 => 清空数组 => 3进数组
func findMode(root *TreeNode) []int {
	var (
		result       []int
		currentCount int
		maxCount     int
		prevNode     *TreeNode
		dfs          func(root *TreeNode)
	)

	dfs = func(root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		if prevNode == nil {
			result = []int{root.Val}
			currentCount = 1
			maxCount = 1
		} else {
			if root.Val == prevNode.Val {
				currentCount++
			} else {
				currentCount = 1
			}
			if currentCount == maxCount {
				result = append(result, root.Val)
			} else if currentCount > maxCount {
				result = []int{root.Val}
				maxCount = currentCount
			}
		}
		prevNode = root
		dfs(root.Right)
	}
	dfs(root)

	return result
}
