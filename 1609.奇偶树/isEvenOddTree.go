package problem1609

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// bfs层次遍历，然后验证
func isEvenOddTree(root *TreeNode) bool {
	level := 0
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		// 校验上一层
		if level%2 == 0 {
			for i := 0; i < len(queue); i++ {
				if queue[i].Val%2 == 0 {
					return false
				}
				if i > 0 && queue[i].Val <= queue[i-1].Val {
					return false
				}
			}
		} else {
			for i := 0; i < len(queue); i++ {
				if queue[i].Val%2 != 0 {
					return false
				}
				if i > 0 && queue[i].Val >= queue[i-1].Val {
					return false
				}
			}
		}
		// 处理下一层
		cur := queue
		queue = nil
		for _, node := range cur {
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		level++
	}
	return true
}
