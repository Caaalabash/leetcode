package problem0637

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func averageOfLevels(root *TreeNode) []float64 {
	var (
		result    []float64
		container [][]int
		dfs       func(root *TreeNode, depth int)
	)
	dfs = func(root *TreeNode, depth int) {
		if root == nil {
			return
		}
		if len(container) < depth {
			container = append(container, make([]int, 0))
		}
		container[depth-1] = append(container[depth-1], root.Val)
		dfs(root.Left, depth+1)
		dfs(root.Right, depth+1)
	}
	dfs(root, 1)

	for i := 0; i < len(container); i++ {
		sum := 0
		for j := 0; j < len(container[i]); j++ {
			sum += container[i][j]
		}
		result = append(result, float64(sum)/float64(len(container[i])))
	}
	return result
}
