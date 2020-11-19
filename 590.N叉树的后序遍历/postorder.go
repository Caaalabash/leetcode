package problem0590

type Node struct {
	Val      int
	Children []*Node
}

// 后序遍历N叉树：左、右、根
// bfs
func postorder(root *Node) []int {
	if root == nil {
		return nil
	}
	// 此处命名是stack而不是queue，因为需要后进先出
	stack := []*Node{root}
	res := make([]int, 0)
	for len(stack) > 0 {
		last := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append([]int{last.Val}, res...)
		for _, node := range last.Children {
			stack = append(stack, node)
		}
	}
	return res
}

// dfs
func postoroder1(root *Node) []int {
	var (
		result = make([]int, 0)
		dfs    func(node *Node)
	)
	dfs = func(node *Node) {
		if node == nil {
			return
		}
		for _, childNode := range node.Children {
			dfs(childNode)
		}
		result = append(result, node.Val)
	}
	dfs(root)
	return result
}
