package problem0530

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 和501题一个做法
func getMinimumDifference(root *TreeNode) int {
	var (
		minDiff  = math.MaxInt32
		curDiff  int
		prevNode *TreeNode
		dfs      func(root *TreeNode)
	)

	dfs = func(root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		if prevNode != nil {
			curDiff = abs(prevNode.Val, root.Val)
			if curDiff < minDiff {
				minDiff = curDiff
			}
		}
		prevNode = root
		dfs(root.Right)
	}
	dfs(root)

	return minDiff
}

func abs(a, b int) int {
	if a > b {
		return a - b
	} else {
		return b - a
	}
}
