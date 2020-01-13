package problem0508

import (
	"sort"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findFrequentTreeSum(root *TreeNode) []int {
	var (
		result  []int
		sumList []int
		dfs     func(node *TreeNode) int
	)
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		sum := dfs(node.Left) + dfs(node.Right) + node.Val
		sumList = append(sumList, sum)
		return sum
	}
	dfs(root)
	sort.Ints(sumList)

	currentCount, maxCount := 0, 0
	for i, j := 0, 0; i < len(sumList); i++ {
		if sumList[i] == sumList[j] {
			currentCount++
		} else {
			currentCount = 1
			j = i
		}
		if currentCount > maxCount {
			result = []int{}
			result = append(result, sumList[i])
			maxCount = currentCount
		} else if currentCount == maxCount {
			result = append(result, sumList[i])
		}
	}
	return result
}
