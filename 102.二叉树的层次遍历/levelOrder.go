package problem0102

import "container/list"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 深度优先遍历
func levelOrder(root *TreeNode) [][]int {
	var result [][]int

	var dfs func(node *TreeNode, level int)
	dfs = func(node *TreeNode, level int) {
		if node == nil {
			return
		}
		if level == len(result) {
			result = append(result, []int{})
		}
		result[level] = append(result[level], node.Val)
		dfs(node.Left, level+1)
		dfs(node.Right, level+1)
	}

	dfs(root, 0)

	return result
}

// 广度优先遍历
func levelOrder1(root *TreeNode) [][]int {
	var result [][]int
	if root == nil {
		return result
	}

	_list := list.New()
	_list.PushFront(root)
	// 进行广度搜索
	for _list.Len() > 0 {
		var currentLevel []int

		for i, l := 0, _list.Len(); i < l; i++ {
			node := _list.Remove(_list.Back()).(*TreeNode)
			currentLevel = append(currentLevel, node.Val)
			if node.Left != nil {
				_list.PushFront(node.Left)
			}
			if node.Right != nil {
				_list.PushFront(node.Right)
			}
		}
		result = append(result, currentLevel)
	}
	return result
}
