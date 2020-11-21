package problem0589

type Node struct {
	Val      int
	Children []*Node
}

// dfs
func preorder(root *Node) []int {
	var (
		result = make([]int, 0)
		dfs    func(node *Node)
	)
	dfs = func(node *Node) {
		if node == nil {
			return
		}
		result = append(result, node.Val)
		for _, childNode := range node.Children {
			dfs(childNode)
		}
	}
	dfs(root)
	return result
}

// bfs
func preorder1(root *Node) []int {
	if root == nil {
		return nil
	}
	res := make([]int, 0)
	stack := []*Node{root}

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append(res, node.Val)
		for i := len(node.Children) - 1; i >= 0; i-- {
			stack = append(stack, node.Children[i])
		}
	}
	return res
}
