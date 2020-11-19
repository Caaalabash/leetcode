package problem0429

type Node struct {
	Val      int
	Children []*Node
}

// bfs
func levelOrder(root *Node) [][]int {
	if root == nil {
		return nil
	}
	result := make([][]int, 0)
	prevLayer := []*Node{root}

	for len(prevLayer) > 0 {
		curLayer := make([]*Node, 0)
		prevValue := make([]int, 0)

		for _, node := range prevLayer {
			prevValue = append(prevValue, node.Val)
			curLayer = append(curLayer, node.Children...)
		}
		result = append(result, prevValue)
		prevLayer = curLayer
	}
	return result
}

// dfs
func levelOrder1(root *Node) [][]int {
	var (
		result = make([][]int, 0)
		dfs    func(root *Node, depth int)
	)
	dfs = func(root *Node, depth int) {
		if root == nil {
			return
		}
		if len(result) <= depth {
			result = append(result, []int{})
		}
		result[depth] = append(result[depth], root.Val)
		for _, node := range root.Children {
			dfs(node, depth+1)
		}
	}
	dfs(root, 0)
	return result
}
