package problem0559

type Node struct {
	Val      int
	Children []*Node
}

// dfs
func maxDepth(root *Node) int {
	if root == nil {
		return 0
	}
	result := 0
	for _, node := range root.Children {
		result = max(maxDepth(node), result)
	}
	return result + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// bfs
func maxDepth1(root *Node) int {
	if root == nil {
		return 0
	}
	queue := []*Node{root}
	result := 0

	for len(queue) > 0 {
		for _, node := range queue {
			for _, childNode := range node.Children {
				queue = append(queue, childNode)
			}
			queue = queue[1:]
		}
		result++
	}
	return result
}
