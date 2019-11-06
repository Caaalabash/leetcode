package problem0107

import "container/list"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrderBottom(root *TreeNode) [][]int {
	if root == nil {
		return nil
	}
	var result [][]int
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
		result = append([][]int{currentLevel}, result...)
	}
	return result
}
